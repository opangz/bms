"""BMS development configuration"""

import pathlib

# Root of this application
APPLICATION_ROOT = '/'

# Secret key for encrypting cookies
SECRET_KEY = b'\xe0\xc3TU\x92 \x11\xe18@wV<\xba\x97\xf6\xea\x86Y\x1ciS{N'
SESSION_COOKIE_NAME = 'login'

# Root folder for all data
BMS_ROOT = pathlib.Path(__file__).resolve().parent.parent

# Database file
DATABASE_FILENAME = BMS_ROOT/'var'/'bms.sqlite3'