#!/bin/bash

# this forces the bash script to stop processing as soon as it hits an error
set -e

docker run -it -p 80:80 hwwsd:latest
