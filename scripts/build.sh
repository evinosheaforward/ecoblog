#!/bin/bash

docker stop ecoblog

docker rm ecoblog

docker build ./ -t ecoblog
