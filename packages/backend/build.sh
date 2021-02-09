#!/bin/bash
sudo docker build -f ./Dockerfile -t platiot . 

sudo docker run -p 3000:80 -t platiot
