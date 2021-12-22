"""
Insta485 index (main) view.

URLs include:
/
"""
import flask
import bms


@bms.app.route('/')
def show_index():
    """Display / route."""
    return flask.render_template("index.html")

@bms.app.route('/add-item/')
def show_add_item():
    """Display Add Item route."""
    return flask.render_template("add_item.html")