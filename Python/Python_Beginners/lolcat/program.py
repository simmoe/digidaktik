import os

import cat_service


def main():
    # Get or create output folder
    folder = get_or_create_output_folder()
    print('Found or created folder: ' + folder)
    # download cats
    download_cats(folder)
    # display cats
    print('Done...')


def get_or_create_output_folder():
    # bemærk også print(__file__)
    # Vi vil lægge mappe cat_pictures lige ved siden af program.py
    base_folder = os.path.dirname(__file__)
    folder = 'cat_pictures'
    full_path = os.path.abspath(os.path.join(base_folder, folder))
    print(full_path)

    # hvis mappen ikke findes, opret den
    if not os.path.exists(full_path):
        print('creating new directory at {}'.format(full_path))
        os.mkdir(full_path)

    return full_path

def download_cats(folder):
    print('Contacting server to download cats...')
    cat_service.get_cat(folder,"")
    cat_count = 8
    for i in range(0, cat_count):
        # end kan defineres direkte i print
        name = 'lolcat_' + format(i)
        print('Downloading cat: ' + name, end='... \n')
        cat_service.get_cat(folder, name)



if __name__ == '__main__':
    main()
