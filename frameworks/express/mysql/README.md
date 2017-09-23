# Node & Mongo

The scripts provided in this directory makes it easy to start up a Node and Mongo stack.

## Usage

In your code, just specify`mongo` whereever you configure the connection host.
Here is a sample configuration using the mongodb package:

```
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://*mongo*:27017/test';
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
