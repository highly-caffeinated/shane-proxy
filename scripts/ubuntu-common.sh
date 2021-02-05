#/bin/sh
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install unattended-upgrades
sudo sed -i 's/\/\/\s*"\${distro_id}:\${distro_codename}-updates";/        "\${distro_id}:\${distro_codename}-updates";/g' /etc/apt/apt.conf.d/50unattended-upgrades
