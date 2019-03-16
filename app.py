import data_fetchers

from flask import (
    Flask
)

app = Flask(__name__)

@app.route("/")
def index():
    return ""

@app.route("/requirements", methods=['POST'])
def requirements():
    inventory = data_fetchers.get_car_inventory()
    return inventory


if __name__ == '__main__':
     app.run(port=5000)
