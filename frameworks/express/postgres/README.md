# Node & Postgres

The scripts provided in this directory makes it easy to start up a Node and Postgres stack.

## Usage

In your code, just specify `postgres` whereever you configure the connection host.
Here is a sample configuration using the postgres package:

```
const pg = require('pg');
const connectionString = "postgres://postgres:postgres@postgres/postgres"
```

Here are the default credentials:
```
|Name | Default|
|-----|--------|
|POSTGRES_USER| postgres|
|POSTGRE_PASSWORD| password|
|POSTGRES_DB|postgres|

To modify any of these please the the `environment` section of `docker-compose.yml` then run `./run-node`
```


## To start Mongo + Node
```
./start-node
```

## To stop Mongo + Node
```
./start-node
```

## To run a npm command

If you are using npm as a task runner, you can use:

```
./run-node <your command args>
```

If you had a npm task to seed doing data, you would be able to execute it like so:
```
./run-node npm seed
```
