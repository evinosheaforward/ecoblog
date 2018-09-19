#!/bin/bash

MYPWD=${PWD}

docker run -it -p 3000:3000 -v $MYPWD/frontend/src:/frontend/src ecoblog
