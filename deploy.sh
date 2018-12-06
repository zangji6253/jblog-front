#!/bin/bash

cnpm install
npm run build
\cp -rf dist/* /usr/share/nginx/html/
