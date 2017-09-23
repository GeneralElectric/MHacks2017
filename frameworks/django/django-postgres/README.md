# Django & Mongo

The scripts provided in this directory makes it easy to start up a Django and PostgreSQL stack.

If you have permission issues:
run `chmod +x start-dp.sh`

## To start Mongo + Postgres
```
./start-dp.sh
```

## To stop Mongo + Postgres
```
./stop-dp.sh
```

## Usage

In your code, just specify `mongo` whereever you configure the connection host.
Here is a sample configuration using the mongodb package:

```
# Go into settings.py
nano ~/mysite/mysite/settings.py


# Go to 'DATABASES' setting:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'HOST': 'db',
        'PORT': 5432,
    }
}
```
