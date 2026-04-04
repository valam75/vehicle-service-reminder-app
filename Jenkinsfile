pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'valam75/vehicle-service-reminder-app'
        APP_SERVER = 'ubuntu@107.20.84.14'
        CONTAINER_NAME = 'vehicle-app'
    }

    stages {

        stage('Clone Source Code') {
            steps {
                git branch: 'main', url: 'https://github.com/valam75/vehicle-service-reminder-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
                sh 'docker tag $DOCKER_IMAGE:$BUILD_NUMBER $DOCKER_IMAGE:latest'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE:$BUILD_NUMBER'
                sh 'docker push $DOCKER_IMAGE:latest'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no $APP_SERVER "docker stop $CONTAINER_NAME || true"
                ssh -o StrictHostKeyChecking=no $APP_SERVER "docker rm $CONTAINER_NAME || true"
                ssh -o StrictHostKeyChecking=no $APP_SERVER "docker pull $DOCKER_IMAGE:latest"
                ssh -o StrictHostKeyChecking=no $APP_SERVER "docker run -d --name $CONTAINER_NAME -p 3000:3000 $DOCKER_IMAGE:latest"
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully. Application deployed.'
        }

        failure {
            echo 'Pipeline failed. Check Jenkins console logs.'
        }
    }
}
