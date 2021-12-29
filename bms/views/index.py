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
    return flask.render_template("dashboard.html")

@bms.app.route('/items/<item_id>/')
def show_item(item_id):
    """Display Item route."""
    
    return flask.render_template("item.html")