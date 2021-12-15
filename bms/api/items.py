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
    GET_ITEMS = "SELECT item_id, item, date, category, sub_category, pretax_price, tax, price" \
                " FROM item NATURAL JOIN sub_category NATURAL JOIN category" \
                " ORDER BY item_id"

    connection = bms.model.get_db()
    cur = connection.execute(GET_ITEMS)
    items = cur.fetchall()

    context = {
        "url": "/api/v1/items/",
        "items": items
    }

    return flask.jsonify(**context)

@bms.app.route("/api/v1/item/1/", methods=['GET'])
def get_item():
    """Get list of items."""
    GET_ITEMS = "SELECT item_id, item, date, category, sub_category, pretax_price, tax, price" \
                " FROM item NATURAL JOIN sub_category NATURAL JOIN category" \
                " ORDER BY item_id"

    connection = bms.model.get_db()
    cur = connection.execute(GET_ITEMS)
    item = cur.fetchone()

    context = {
        "url": "/api/v1/item/1/",
        "item": item
    }

    return flask.jsonify(**context)
