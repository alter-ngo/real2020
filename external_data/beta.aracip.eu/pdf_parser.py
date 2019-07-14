import camelot
import pandas as pd


def extract_specific_dataframe(code, tables):
    for table_index in range(len(tables)):
        if code in tables[table_index].df.values[0][0]:

            # Concatenate fragments of a table which spans multiple pages
            current_table_index = table_index + 1
            current_table = tables[table_index].df

            while tables[current_table_index].df.values[0][0][0] != 'D':
                current_table = pd.concat(
                    [current_table, tables[current_table_index].df])
                current_table_index += 1

    return current_table


def extract_dataframes_from_pdf(path):

    tables = camelot.read_pdf(path, flavor='lattice',
                              pages='all', line_scale=40)

    # TODO: Extracting and storing useful information
    print(extract_specific_dataframe('D68b', tables))


# TODO: analyse each PDF sequentially
extract_dataframes_from_pdf('./pdfs/output/10017376_2017_RAEI.pdf')
