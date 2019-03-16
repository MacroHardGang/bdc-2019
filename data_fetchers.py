import MySQLdb

from IPython import embed


class DataFetcher:

    def __init__(self, host, user, passwd, db=None, port=None):
        """
        Connects to the hackathon MySql database
        :param host: The hostname
        :param port: Port number
        :param user: Username
        :param passwd: Password
        :param db: Database name
        """
        self.db = MySQLdb.connect(
            host=host,
            user=user,
            passwd=passwd,
            db=db,
            port=port,
        )

    def _query(self, query_string):
        """
        Helper to make queries to underlying database and return result
        :param query_string: A valid MySQL query

        :return: List of lists. Each item corresponds to a row in the table
        """

        self.db.query(query_string)
        res = self.db.store_result().fetch_row(0)  # Fetches all rows

        return res

    def get_car_inventory(self, **kwargs):
        query = '''
            SELECT * FROM car_inventory LIMIT 5;
        '''

        res = self._query(query)
        embed()
        return res
