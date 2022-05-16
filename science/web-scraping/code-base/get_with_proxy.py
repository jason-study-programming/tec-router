import requests
from requests.exceptions import HTTPError

http_proxy = 'http://localhost:7890'
https_proxy = 'http://localhost:7890'
ftp_proxy = 'http://localhost:7890'
proxy_dict = {
    'http': http_proxy,
    'https': https_proxy,
    'ftp': ftp_proxy
}

# requests to GitHub's API now require a User-Agent header
# https://stackoverflow.com/questions/39907742/github-api-is-responding-with-a-403-when-using-requests-request-function
# headers = {'User-Agent': 'request'}

# https://docs.github.com/en/rest/overview/resources-in-the-rest-api#authentication
# https://www.nylas.com/blog/use-python-requests-module-rest-apis/
params = {'u':'JasonWang1125'}

for url in ['https://api.github.com/invalid', 'https://api.github.com']:
    try:
        response = requests.get(url, params=params ,proxies=proxy_dict)

        # If the response was successful, no Exception will be raised
        response.raise_for_status()
    except HTTPError as http_err:
        print(f'HTTP error occured: {http_err}')
    except Exception as err:
        print(f'Other error occured: {err}')
    else:
        print(response._content)