import bs4
import requests


def main():
    # get city from user
    city = input("What city do you want the weather for?")
    # get the html from the web
    html = get_html_from_web(city)
    # parse the html and display forecast
    get_weather_from_html(html)

def get_html_from_web(city):
    url = 'https://www.wunderground.com/weather/dk/' + city
    #lav et response objekt som indeholder al html fra siden
    response = requests.get(url)
    return response.text

def get_weather_from_html(html):
    soup = bs4.BeautifulSoup(html, 'html.parser')
    region_name = soup.find('city-header').find('h1').get_text()
    condition = soup.find(class_='feels-like').get_text()
    reg: str = cleanup_text(region_name)
    con: str = cleanup_text(condition)
    print(reg)
    print(con)

def cleanup_text(text : str):
    if not text:
        return text
    text = text.strip()
    return text

if __name__ == '__main__':
    main()

