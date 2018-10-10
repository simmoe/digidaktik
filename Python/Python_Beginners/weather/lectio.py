import bs4
import requests


def main():
    # hent elevid fra brugeren (fx 20911898156)
    klasse = input("Hvilken klasse vil du undersøge stamdata for?")
    # get the html from the web
    html = get_html_from_web(klasse)
    # parse the html and display forecast
    get_class_from_html(html)


def get_html_from_web(klasse):
    url = 'https://www.lectio.dk/lectio/557/subnav/members.aspx?showstudents=1&klasseid=' + klasse
    #lav et response objekt som indeholder al html fra siden
    response = requests.get(url)
    #Send den tilbage fra metoden
    return response.text

def get_class_from_html(html):
    soup = bs4.BeautifulSoup(html, 'html.parser')
    table: str = soup.find(id="printlistarea").get_text()
    table.split()
    print(table)


if __name__ == '__main__':
    main()

