import requests

def get_car_inventory():
    res = requests.get('https://hackathon-api.bdc.n360.io/car_inventory')

    return res.content
