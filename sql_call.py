from data_fetchers import DataFetcher

db = DataFetcher(
    host="hackathon-db.bdc.n360.io",
    user="events",
    passwd="Hack@th0n2019",
    port=3306,
    db="hackathon",
).get_db()

query = """
    select count(*) from car_inventory where date_sold is null;
"""

db.query(query)

data = db.store_result().fetch_row(0)
# data = [d[0] for d in data]
print(data)

