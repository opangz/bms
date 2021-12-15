"""BMS package initializer."""

import flask
app = flask.Flask(__name__)  # pylint: disable=invalid-name

# Specify configuration file
app.config.from_object('bms.config')

import bms.model    # noqa: E402  pylint: disable=wrong-import-position
import bms.views   # noqa: E402  pylint: disable=wrong-import-position
import bms.api  # noqa: E402  pylint: disable=wrong-import-position
