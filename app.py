import decimal
import flask
import json
import pandas as pd

from data_fetchers import DataFetcher
from flask import (
    Flask,
    jsonify,
    request,
    render_template
)
from flask_cors import CORS
from IPython import embed


class MyJSONEncoder(flask.json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, decimal.Decimal):
            # Convert decimal instances to strings.
            return str(obj)
        return super(MyJSONEncoder, self).default(obj)


# Setup app
app = Flask(__name__, template_folder='templates')
app.json_encoder = MyJSONEncoder
CORS(app)

# App configs
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# Setup data fetcher
data_fetcher = DataFetcher(
    host="hackathon-db.bdc.n360.io",
    user="events",
    password="Hack@th0n2019",
    port=3306,
    db="hackathon",
)


# @app.route("/")
# def index():
#     '''
#     Landing page
#     '''
#     return render_template('index.html')


@app.route("/requirements", methods=['GET', 'POST'])
def requirements():
    data = json.loads(request.data)
    inventory = data_fetcher.get_car_inventory(price_low=data['low'], price_high=data['high'], car_type=data['type'])

    return inventory


# @app.route("/car_info/<int:car_id>", methods=['GET'])
# def car_info(car_id):
#     info = data_fetcher.get_car_info(car_id)
#
#     return jsonify(info)


if __name__ == '__main__':
     app.run(port=5000)
