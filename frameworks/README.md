# Frameworks

This directory contains preconfigured web-based application development
frameworks. The scripts contained within each framework directory
will allow you to standup a complete application and database
server combination.

# Ruby On Rails Frameworks

The current combinations that we have supported include the following:

* Rails + MongoDB
* Rails + Postgres
* Rails + MySQL

These frameworks are installed in the [rails](/rails) directory. Your
rails app will go in a `/rails/app` directory, which will be a sub-directory
below the one hold all the `rails` scripts.

## Rails + MongoDB

To run the Rails + MongoDB stack, you can run the following command. This
will fire up the Rails server which can communicate with the MongoDB.
The command to execute is:
```
start-rails-mongo
```
To stop the servers, just enter `Control-C`.  Your application will need
to reside in the `app` subdirectory. You will need to have a `mongoid.yml`
that is part of your Rails application. It will need an entry something like:
```
development:
  sessions:
    default:
      database: mongoid
      hosts:
        - ENV['DATABASE_HOST']:27017
```
You can generate a full MongoDB configuration file by running:
```
rails-cmd rails g mongoid:config
```

## Rails + Postgres

## Rails + MySQL

## Running Rails Commands

You can run rails commands inside a Docker container by using the wrapper
script.  The name of the wrapper script is `rails-cmd`. To execute a
rails command, you would use the following:
```
rails-cmd <command arguments>
```
For example:
```
rails-cmd rails generate scaffold User first_name:string last_name:string

OR

rails-cmd rake db:migrate
```

# NodeJS + Express Frameworks

NodeJS and the Express.js packages are pre-installed in this combination
framework. The current combinations that we have supported include the following:

* NodeJS + Express + MongoDB
* NodeJS + Express + Postgres
* NodeJS + Express + MySQL

These frameworks are installed in the [nodejs](/nodejs) directory.

## NodeJS + Express + MongoDB

## NodeJS + Express + Postgres

## NodeJS + Express + MySQL

# Django Frameworks

The current combinations that we have supported include the following:

* Django + MongoDB
* Django + Postgres
* Django + MySQL

These frameworks are installed in the [django](/django) directory.
