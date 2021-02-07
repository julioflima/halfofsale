#!/bin/bash
sudo docker build -f ./packages/backend/Dockerfile -t platiot . 

sudo docker run -p 3000:80 -t platiot
