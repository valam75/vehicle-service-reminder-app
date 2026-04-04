pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'yourdockerhubusername/vehicle-service-reminder-app'
        APP_SERVER = 'ubuntu@YOUR_APP_SERVER_IP'
    }

    stages {
        stage('Clone Source Code') {
            steps {
                git branch: 'main', url: 'https://github.com/yourusername/vehicle-service-reminder-app.git'
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
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                ssh $APP_SERVER "docker stop vehicle-app || true"
                ssh $APP_SERVER "docker rm vehicle-app || true"
                ssh $APP_SERVER "docker pull $DOCKER_IMAGE:$BUILD_NUMBER"
                ssh $APP_SERVER "docker run -d --name vehicle-app -p 3000:3000 $DOCKER_IMAGE:$BUILD_NUMBER"
                '''
            }
        }
    }
}
