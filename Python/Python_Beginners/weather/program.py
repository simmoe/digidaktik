import requests


def main():
    # print the header
    print_the_header()
    # get city from user
    city = input("What city do you want the weather for?")
    # get the html from the web
    html = get_html_from_web(city)
    # parse the html
    # display the forecast
    print("hello from main")


def print_the_header():
    print('---------------------------------')
    print('-----------WEATHER APP-----------')
    print('---------------------------------')

def get_html_from_web(city):
    url = 'https://www.wunderground.com/weather/dk/' + city
    print (url)
    response = requests.get(url)
    #print(response.status_code)
    #print(response.text[0:250])
    return response.text


if __name__ == '__main__':
    main()

