# Rails Frameworks
We have configured two different Rails framework combinations for you.
One combines Rails + MongoDB and the other combines Rails + Postgres.
There are two scripts that will download and automatically configure an
an `app` directory where you can put your rails code. The database services
are also started with data directories automatically created to store the
data. You can access your app on `http://localhost:3000` from your browser.

The scripts are as follows:

* Rails + MongoDB
  * `mongorails new` - to create a new application and MongoDB configuration
  * `mongorails start` - to start the Rails and MongoDB server
  * `mongorails stop` - to stop the Rails and MongoDB server
  * `mongorails <arbitrary rails comman>` - to run commands like `mongorails rails generate scaffold`

* Rails + Postgres
  * `pgrails new` - to create a new application and MongoDB configuration
  * `pgrails start` - to start the Rails and MongoDB server
  * `pgrails stop` - to stop the Rails and MongoDB server
  * `pgrails <arbitrary rails comman>` - to run commands like `mongorails rails generate scaffold`
