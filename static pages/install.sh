#!/usr/bin/env bash


 echo "Running npm install..."
  npm install

if which bower >/dev/null; then
  echo "Bower is required. Installing Bower..."
  npm install -g bower
  bower install
else
  bower install
fi

if which yarn >/dev/null; then
  echo "Yarn is required. Installing Yarn..."
  npm install -g yarn
  yarn install
else
  yarn install
fi