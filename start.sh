#!/bin/sh

command="npm run production"

screen -d -m -L -S 'simple-stats-back' $command
