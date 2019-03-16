import MySQLdb
import pandas as pd
pd.set_option('max_columns', None)

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

    def get_db(self):
        """
        Returns the db object

        :return: self.db
        """

        return self.db

    def _query(self, query_string, table, as_df=True):
        """
        Helper to make queries to underlying database and return result
        :param query_string: A valid MySQL query
        :param as_df: Returns result as dataframe (with column names)

        :return: List of lists. Each item corresponds to a row in the table
        """

        # Retrieve data
        self.db.query(query_string)
        res = list(self.db.store_result().fetch_row(0))  # Fetches all rows

        if as_df:
            # If true, return as pandas data frame
            # Retrieve column names
            column_query = 'describe {}'.format(table)
            self.db.query(column_query)
            columns = self.db.store_result().fetch_row(0)
            columns = [r[0] for r in columns]

            # Make data frame
            res = pd.DataFrame(res, columns=columns)

        return res

    def get_car_inventory(self, **kwargs):
        query = '''
            SELECT * FROM car_inventory
            WHERE price BETWEEN {price_low} AND {price_high}
            AND date_sold IS NULL;
        '''.format(
            price_low=kwargs['price_low'],
            price_high=kwargs['price_high']
        )
        res = self._query(query, 'car_inventory', as_df=kwargs.get('as_df', True))

        return res
