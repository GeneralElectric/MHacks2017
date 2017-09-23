#!/bin/bash
# This script will start a Django and Mongo Container.
# It is expecting a Docker engine to be running
#
# Usage:  ./start-node
#

docker-compose run web django-admin.py startproject my_app .