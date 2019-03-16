from data_fetchers import DataFetcher
from flask import Flask
from flask_cors import CORS
from IPython import embed


# Setup app
app = Flask(__name__)
CORS(app)

# Setup data fetcher
# TODO: Move to config file
data_fetcher = DataFetcher(
    host="hackathon-db.bdc.n360.io",
    user="events",
    passwd="Hack@th0n2019",
    port=3306,
    db="hackathon",
)


@app.route("/")
def index():
    '''
    Landing page
    TODO: route to landing page for dev, static page for prod
    '''
    return ""


@app.route("/requirements", methods=['POST'])
def requirements():
    # Mock
    price = {
        'low': 13000,
        'high': 33000
    }

    car_type = 'blah'
    inventory = data_fetcher.get_car_inventory(price_low=price['low'], price_high=price['high'])
    return inventory


if __name__ == '__main__':
     app.run(port=5000)
