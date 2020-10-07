#!/usr/bin/env sh
set -e

# Create development database enviroment 
NODE_ENV=development npx sequelize-cli db:create
NODE_ENV=development npx sequelize-cli db:migrate

# Run build api
node build/index.js
