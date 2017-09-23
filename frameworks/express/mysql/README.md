# MySQL & Postgres

The scripts provided in this directory makes it easy to start up a MySQL and Postgres stack.

## Usage

In your code, just specify `postgres` wherever you configure the connection host.
Here is a sample configuration using the postgres package:

```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'password'
});
```

Here are the default credentials:

|Name | Default|
|-----|--------|
|HOST|mysql|
|MYSQL_ROOT_PASSWORD| password|

To modify any of these please open `docker-compose.yml` and edit the `environment` section.

## To start Mongo + MySQL
```
./start-node
```

## To stop Mongo + MySQL
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
