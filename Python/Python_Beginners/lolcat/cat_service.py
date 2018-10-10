import os
import shutil

import requests


def get_cat(folder, name):
    url =  'http://consuming-python-services-api.azurewebsites.net/cats/random'
    # Hent rå binære data fra url
    data = get_data_from_url(url)
    save_image(folder, name, data)

def get_data_from_url(url):
    response = requests.get(url, stream=True)
    # hent rå data fra url
    return response.raw


def save_image(folder, name, data):
    # Lav et filnavn
    file_name = os.path.join(folder, name + '.jpg')
    # fVi vil åbne filen i write mode med binære data: wb - fout skal betyde output filestream
    with open(file_name, 'wb') as fout:
        shutil.copyfileobj(data, fout)

