# Django & Mongo

The scripts provided in this directory makes it easy to start up a Django and Mongo stack.

If you have permission issues:
run `chmod +x start-dm.sh`

## To start Mongo + Django
```
./start-dm.sh
```

## To stop Mongo + Django
```
./stop-dm.sh
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
        'ENGINE' : 'django.db.backends.mongo',
        'NAME' : 'mongo',
        'USER': 'mongo',
        'PASSWORD': 'mongo',
        'HOST': 'mongo',
        'PORT': '27017',
    }
	}
```
