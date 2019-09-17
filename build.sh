#!/bin/bash

# this forces the bash script to stop processing as soon as it hits an error
set -e

docker build -t hwwsd:latest -t adamdryit/hwwsd:latest .
