# Databases

The scripts provided in the `databases` directory will enable you to
start and stop local instances of each type of datbase. This is done
using the Docker engine you previously installed.

# MongoDB

MongoDB is a NoSQL database that is popular for usage in web applications.
To install and start a local instance of MongoDB, use the following
commands:
```
cd mongodb
./start-mongo
```
This command will download a copy of the MongoDB container and start it on
port **27017**. It will also create a directory for storing the data files
associated with the database. A container ID file will also be created to
enable stopping the database. This development database does *not* have
authentication enabled, so *no* password is required.

To stop the database from the `mongodb` directory, use the command:
```
./stop-mongo
```

# Postgres

Postgres is a popular opensource SQL database. To install and start a local
instance of Postgres, use the following commands:
```
cd postgres
./start-pg
```
This command will download a copy of the Postgres container and start it on
port **5432**. It will also create a directory for storing the data files
associated with the database. A container ID file will also be created to
enable stopping the database. This database *does* have authentication
enabled, so will need the following:

* POSTGRES_USER = postgres
* POSTGRES_PASSWORD = postgres
* POSTGRES_DB = postgres

To stop the database from the `postgres` directory, use the command:
```
./stop-pg
```

# MySQL

MySQL is another popular opensource SQL database. To install and start a local
instance of MySQL, use the following commands:
```
cd mysql
./start-mysql
```
This command will download a copy of the MySQL container and start it on
port **3306**. It will also create a directory for storing the data files
associated with the database. A container ID file will also be created to
enable stopping the database. This database *does* have authentication
enabled, so will need the following:

* MYSQL_ROOT_PASSWORD = mysqlsecret

To stop the database from the `mysql` directory, use the command:
```
./stop-mysql
```
