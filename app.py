import requests

from flask import (
    Flask,
    request
)

from IPython import embed

app = Flask(__name__)

@app.route("/")
def index():
    return ""

@app.route("/requirements", methods=['POST'])
def requirements():
    embed()


if __name__ == '__main__':
     app.run(port=5000)
