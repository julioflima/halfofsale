#!/bin/bash
sudo docker build -f ./Dockerfile -t halfofsale .

sudo docker run -p 3000:80 -t halfofsale
