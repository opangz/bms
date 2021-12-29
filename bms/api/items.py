"""REST API for items."""

import flask
import bms


@bms.app.route('/api/v1/', methods=['GET'])
def get_services():
    """Retrieve available API routes."""
    context = {
        "get_items": "api/v1/items"
    }
    return flask.jsonify(**context)


@bms.app.route("/api/v1/items/", methods=['GET'])
def get_items():
    """Get list of items."""
    GET_ITEMS = "SELECT item_id as id, name, date, category, subcategory, pretax_price, tax, price" \
                " FROM item NATURAL JOIN subcategory NATURAL JOIN category" \
                " ORDER BY item_id"

    connection = bms.model.get_db()
    cur = connection.execute(GET_ITEMS)
    items = cur.fetchall()

    context = {
        "url": "/api/v1/items/",
        "items": items
    }

    return flask.jsonify(**context)

@bms.app.route("/api/v1/items/<item_id>/", methods=['GET'])
def get_item(item_id):
    """Get a single item."""
    GET_ITEMS = "SELECT item_id, name, date, category, subcategory, pretax_price, tax, price" \
                " FROM item NATURAL JOIN subcategory NATURAL JOIN category" \
                f" WHERE item_id = {item_id}"

    connection = bms.model.get_db()
    cur = connection.execute(GET_ITEMS)
    item = cur.fetchone()

    context = {
        "url": f"/api/v1/items/{item_id}/",
        "item": item
    }

    return flask.jsonify(**context)

def check_item_exists(item_id):
    """Check existence of item."""
    CHECK_ITEM = f"SELECT * FROM item WHERE item_id = {item_id}"

    connection = bms.model.get_db()
    cur = connection.execute(CHECK_ITEM)
    return cur.fetchone() == None