## About

Project: Budget Management System
Purpose: Provide an interface to manage a budget
Author: Owen Pang

## Set up

To install utilities, run

```
brew install sqlite3 curl node (macOS)
sudo apt-get install sqlite3 curl nodejs npm (Linux/Windows)
```

To create/activate virtual environment and install requirements, run

```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 -m pip install -e .
```

To install frontend dependencies, run
```
npm ci .
```

Pro-tip: `pip freeze` can be used to list out the installed packages

## Run
To reset and build the front end, run
```
rm ./bms/static/js/*
npx webpack --watch
```
To run a development server, run
```
./bin/run
```
The application can be viewed at localhost:8000.