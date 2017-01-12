# Mortgage Calculator
You should install nodejs and npm tool and then, first of all, "bower install" and "npm install" respectively.

This project has been generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1. NICE TOOL. Read a little bit about how to use it.

## Build & development
If not installed grunt `npm install -g grunt-cli`
Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.





##In order to create the scaffolding of this project we have used yeoman and the angular generator for yeoman:

Create the scaffold of your project
-----------------------------------
yo angular

To add a new controller to your app
-----------------------------------
yo angular:controller MyNewController

Per mostrar ajuda del angular generator
---------------------------------------
yo angular --help

Information about the angular generator we are using in yeoman
--------------------------------------------------------------
https://github.com/yeoman/generator-angular#readme

RECOMMENDED IN UBUNTU 14.04 TO install compass properly
-------------------------------------------------------
#https://gorails.com/setup/ubuntu/14.04
sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties
sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev

curl -L https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
echo "source ~/.rvm/scripts/rvm" >> ~/.bashrc
rvm install 2.1.2
rvm use 2.1.2 --default
ruby -v

#http://blog.acrona.com/index.php?post/2014/05/15/Installer-Fondation-et-Compass/sass-sur-Ubuntu-14.04
gem install compas
