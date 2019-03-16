import pymysql
import pandas as pd
pd.set_option('max_columns', None)

from IPython import embed
from sklearn import preprocessing


class DataFetcher:

    def __init__(self, host, user, password, db=None, port=None):
        """
        Connects to the hackathon MySql database
        :param host: The hostname
        :param port: Port number
        :param user: Username
        :param passwd: Password
        :param db: Database name
        """
        self.db = pymysql.connect(
            host=host,
            user=user,
            password=password,
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
        cursor = self.db.cursor()
        cursor.execute(query_string)
        res = list(cursor.fetchall())

        if as_df:
            # If true, return as pandas data frame
            column_query = 'describe {}'.format(table)
            cursor.execute(column_query)
            columns = cursor.fetchall()
            columns = [r[0] for r in columns]

            # Make data frame
            res = pd.DataFrame(res, columns=columns)

        return res

    def _preprocess_car_inventory(self, df):
        drop_col = ['car_id',
                    'inventory_id',
                    'inventory_make',
                    'inventory_model',
                    'commercial',
                    'vehicle_page_views',
                    'car_int_photo_url1',
                    'car_int_photo_url2',
                    'car_int_photo_url3',
                    'car_ext_photo_url1',
                    'car_ext_photo_url2',
                    'car_ext_photo_url3',
                    'date_created',
                    'inventory_trim',
                    'car_status',
                    'engine_type',
                    'fuel',
                    'inventory_frame_category_id',
                    'inventory_frame_category',
                    'inventory_frame_style',
                    'inventory_frame_desc',
                    'note',
                    'option',
                    'drive_train',
                    'extra_option',
                    'date_entry',
                    'date_updated',
                    'date_service',
                    'date_sold',
                    'inventory_color',
                    'inventory_interior_color',
                    'induction',
                    'transmission_type',
                    'cubic_capacity',
                    'warranty_class',
                    'warranty_date',
                    'warranty_km']

        df = df.drop(drop_col, axis=1).fillna(-100)
        # df['drive_train'] = df['drive_train'].replace('Front wheel drive', 1).astype(int)
        # df['drive_train'] = df['drive_train'].replace('All wheel drive', 2).astype(int)
        # df['drive_train'] = df['drive_train'].replace('Rear wheel drive', 3).astype(int)
        # df['drive_train'] = df['drive_train'].replace('4X4', 4).astype(int)
        # df['fuel'] = df['fuel'].replace('Unleaded', 1).astype(int)
        # df['fuel'] = df['fuel'].replace('Premium unleaded', 2).astype(int)
        # df['transmission_type'] = df['transmission_type'].replace('MANUAL', 0).astype(int)
        # df['transmission_type'] = df['transmission_type'].replace('AUTOMATIC', 1).astype(int)
        df['doors'] = df['doors'].astype(int)
        df['inventory_frame_style_id'] = df['inventory_frame_style_id'].astype(int)

        # Encode categorical features
        df['price'] = df['price'].astype(float)
        # le_fuel = preprocessing.LabelEncoder()
        # le_fuel.fit(df.fuel)
        # le_fuel.transform(df.fuel)
        # le_transmission = preprocessing.LabelEncoder()
        # le_transmission.fit(df.transmission_type)
        # le_transmission.transform(df.transmission_type)

        return df

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
        if isinstance(res, pd.DataFrame):
            res = self._preprocess_car_inventory(res)

        return res

    def get_car_info(self, car_id):
        query = '''
            SELECT * FROM car_inventory
            WHERE car_id = {}
        '''.format(
            car_id
        )
        res = self._query(query, 'car_inventory', as_df=False)[0]

        return res
