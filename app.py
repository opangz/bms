"""Flask App."""

from flask import Flask

app = Flask(__name__)

@app.route("/")
def main():
    """Main application."""
    return "<p>Hello, World!<p>"