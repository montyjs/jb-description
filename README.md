# Front End Capstone


> This was made during my time at Hack Reactor. It is a UI clone of a REI product page.

## Related Projects

Services
  - https://github.com/montyjs/mg-product-wrapper
  - https://github.com/montyjs/reviews-tm-service

Proxy
  - https://github.com/montyjs/jb-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. Run ```sh npm install ``` to install dependencies
2. 
a. For development create an .env file with this information inside
- See below:
```
NODE_ENV = 'development'
LOCAL_PORT= 3003
LOCAL_USER = <USERNAME>
LOCAL_HOST = 'localhost'
LOCAL_DATABASE = 'descriptions'
LOCAL_PASSWORD = <PASSWORD>
```
- You will also need to set '<USERNAME>' to your psql username in package.json script 'build-dev-db'
- Then run ```sh npm run build-db ``` 
b. For production create an .env file, set NODE_ENV and a connection string
- See below:
```
NODE_ENV = 'production'
CON_STRING= <CONNECTION STRING>
```
3. Run ```sh npm run seed-db ``` to seed the database
4. Run ```sh npm run build-dev ``` to compile jsx files
5. Run ```sh npm run start ``` to start express

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

