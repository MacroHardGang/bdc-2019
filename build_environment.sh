# Update apt-get
echo "------------------ Updating apt-get ------------------------"
sudo apt-get update

# Install Node
echo "------------------ Installing Node -------------------------"
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y --no-install-recommends nodejs

# Install Python
echo "------------------ Installing Python 3.6 -------------------------"
sudo add-apt-repository ppa:jonathonf/python-3.6
sudo apt-get update
sudo apt-get install -y python3.6
sudo apt-get install -y python3-pip

# Install Elastic Beanstalk CLI (For Deployment)
echo "------------------ Installing Elastic Beanstalk CLI -------------------------"
pip3 install awsebcli --upgrade --user

# Clean
echo "------------------ Cleaning Apt-Get -------------------------"
sudo apt-get clean