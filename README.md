# Vehicle Service Reminder Application

## Project Description

The Vehicle Service Reminder Application is a Node.js-based web application designed to help users track important vehicle maintenance activities such as service due dates, insurance renewal dates, and pollution check dates.

This project demonstrates an end-to-end DevOps pipeline using GitHub, Jenkins, Docker, AWS EC2, Prometheus, Grafana, shell scripting, and cron jobs.

---

## Features

* Display vehicle owner details
* Display vehicle name
* Display service due date
* Display insurance renewal date
* Display pollution check date
* Dockerized application deployment
* Automated Jenkins CI/CD pipeline
* Monitoring using Prometheus and Grafana
* Backup and cleanup automation using shell scripts and cron jobs

---

## Tech Stack

* Node.js
* Express.js
* EJS
* Docker
* Docker Hub
* Jenkins
* GitHub
* AWS EC2
* Prometheus
* Grafana
* Node Exporter
* Bash Shell Scripting
* Cron Jobs

---

## Project Structure

```text
vehicle-service-reminder-app/
│
├── app.js
├── package.json
├── Dockerfile
├── Jenkinsfile
├── docker-compose.yml
├── README.md
├── .gitignore
│
├── views/
│   └── index.ejs
│
├── public/
│   └── style.css
│
├── routes/
│   └── vehicleRoutes.js
│
└── scripts/
    ├── backup.sh
    └── cleanup.sh
```

---

## Clone Repository

```bash
git clone https://github.com/valam75/vehicle-service-reminder-app.git
cd vehicle-service-reminder-app
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Application Locally

```bash
npm start
```

Application URL:

```text
http://localhost:3000
```

---

## Docker Commands

### Build Docker Image

```bash
docker build -t vehicle-service-reminder-app .
```

### Run Docker Container

```bash
docker run -d -p 3000:3000 --name vehicle-app vehicle-service-reminder-app
```

### View Running Containers

```bash
docker ps
```

### View Docker Images

```bash
docker images
```

### Stop Container

```bash
docker stop vehicle-app
```

### Remove Container

```bash
docker rm vehicle-app
```

---

## Jenkins CI/CD Flow

1. Developer pushes source code to GitHub.
2. GitHub webhook triggers Jenkins pipeline.
3. Jenkins pulls the latest source code.
4. Jenkins installs Node.js dependencies.
5. Jenkins builds Docker image.
6. Jenkins pushes Docker image to Docker Hub.
7. Jenkins connects to AWS EC2 application server through SSH.
8. Jenkins deploys the latest Docker container.
9. Prometheus monitors the server metrics.
10. Grafana visualizes the monitoring dashboard.

Pipeline Flow:

```text
GitHub → Jenkins → Docker Hub → AWS EC2 → Prometheus → Grafana
```

---

## Jenkinsfile Stages

* Clone Source Code
* Install Dependencies
* Build Docker Image
* Docker Login
* Push Docker Image
* Deploy Application

---

## Docker Hub Details

Docker Image Name:

```text
valam75/vehicle-service-reminder-app
```

Docker Container Name:

```text
vehicle-app
```

---

## AWS Infrastructure Details

### Jenkins Server

* Purpose: CI/CD Automation
* Public IP: 54.234.127.29
* Port Used: 8080

### Application Server

* Purpose: Run Docker Container
* Public IP: 107.20.84.14
* Port Used: 3000

### Monitoring Server

* Purpose: Prometheus and Grafana
* Ports Used:

  * 9090 for Prometheus
  * 3000 for Grafana
  * 9100 for Node Exporter

---

## Monitoring Setup

### Prometheus

Prometheus is used to collect server metrics from Node Exporter.

Prometheus Targets:

* Application Server
* Monitoring Server

### Grafana

Grafana is used to visualize:

* CPU Usage
* Memory Usage
* Disk Usage
* Network Traffic
* System Load
* Uptime

Grafana Dashboard ID Used:

```text
1860
```

---

## Shell Scripts

### Backup Script

```bash
#!/bin/bash
DATE=$(date +%F)
BACKUP_DIR="/home/ubuntu/backups"

mkdir -p $BACKUP_DIR
cp -r /var/lib/docker/containers $BACKUP_DIR/container-backup-$DATE
```

### Cleanup Script

```bash
#!/bin/bash
find /var/log -type f -name "*.log" -mtime +7 -exec rm -f {} \;
```

---

## Cron Jobs

### Backup Job

```bash
0 1 * * * /home/ubuntu/scripts/backup.sh
```

### Cleanup Job

```bash
0 2 * * 0 /home/ubuntu/scripts/cleanup.sh
```

---

## Deployment URL

```text
http://107.20.84.14:3000
```

---

## Common Troubleshooting

### Docker Permission Denied

```bash
sudo usermod -aG docker jenkins
sudo chmod 666 /var/run/docker.sock
```

### Node.js Not Installed

```bash
sudo apt install nodejs npm -y
```

### Check Running Container

```bash
docker ps
```

### Check Container Logs

```bash
docker logs vehicle-app
```

### Test Application Locally on Server

```bash
curl http://localhost:3000
```

---

## Future Enhancements

* Add MongoDB database
* Add User Login and Authentication
* Add Email Notifications
* Add Kubernetes Deployment
* Add Terraform for Infrastructure Provisioning
* Add SonarQube Integration
* Add Slack Notifications from Jenkins
