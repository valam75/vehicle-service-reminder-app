DATE=$(date +%F)
BACKUP_DIR="/home/ubuntu/backups"

mkdir -p $BACKUP_DIR
cp -r /var/lib/docker/containers $BACKUP_DIR/container-backup-$DATE

echo "Backup completed successfully on $DATE"
