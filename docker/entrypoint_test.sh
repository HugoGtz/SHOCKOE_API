#!/usr/bin/env sh
set -e

# Create test database enviroment 
docker-compose run -e NODE_ENV=test api npx sequelize-cli db:create
docker-compose run -e NODE_ENV=test api npx sequelize-cli db:migrate

# Run test api
docker-compose run api npm test
