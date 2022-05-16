# Requests

## Doc

https://docs.python-requests.org/en/latest/



## Tutorial

https://realpython.com/courses/python-requests/



## FAQ

1. requests.get('https://api.github.com')验证错误

```shell
>>> import requests
>>> url = 'https://api.github.com'
>>> requests.get(url)
Traceback (most recent call last):
  File "F:\pythonVENV\web_scraping\lib\site-packages\urllib3\connectionpool.py", line 700, in urlopen
    self._prepare_proxy(conn)
  File "F:\pythonVENV\web_scraping\lib\site-packages\urllib3\connectionpool.py", line 994, in _prepare_proxy
    conn.connect()
  File "F:\pythonVENV\web_scraping\lib\site-packages\urllib3\connection.py", line 364, in connect  
    conn = self._connect_tls_proxy(hostname, conn)
  File "F:\pythonVENV\web_scraping\lib\site-packages\urllib3\connection.py", line 501, in _connect_tls_proxy
    socket = ssl_wrap_socket(
  File "F:\pythonVENV\web_scraping\lib\site-packages\urllib3\util\ssl_.py", line 453, in ssl_wrap_socket
    ssl_sock = _ssl_wrap_socket_impl(sock, context, tls_in_tls)
  File "F:\pythonVENV\web_scraping\lib\site-packages\urllib3\util\ssl_.py", line 495, in _ssl_wrap_socket_impl
    return ssl_context.wrap_socket(sock)
  File "C:\Users\jason\AppData\Local\Programs\Python\Python310\lib\ssl.py", line 512, in wrap_socket
    return self.sslsocket_class._create(
  File "C:\Users\jason\AppData\Local\Programs\Python\Python310\lib\ssl.py", line 1070, in _create  
    self.do_handshake()
  File "C:\Users\jason\AppData\Local\Programs\Python\Python310\lib\ssl.py", line 1341, in do_handshake
    self._sslobj.do_handshake()
ssl.SSLEOFError: EOF occurred in violation of protocol (_ssl.c:997)

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "F:\pythonVENV\web_scraping\lib\site-packages\requests\adapters.py", line 440, in send      
    resp = conn.urlopen(
  File "F:\pythonVENV\web_scraping\lib\site-packages\urllib3\connectionpool.py", line 785, in urlopen
    retries = retries.increment(
  File "F:\pythonVENV\web_scraping\lib\site-packages\urllib3\util\retry.py", line 592, in increment    raise MaxRetryError(_pool, url, error or ResponseError(cause))
urllib3.exceptions.MaxRetryError: HTTPSConnectionPool(host='api.github.com', port=443): Max retries exceeded with url: / (Caused by SSLError(SSLEOFError(8, 'EOF occurred in violation of protocol (_ssl.c:997)')))

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "F:\pythonVENV\web_scraping\lib\site-packages\requests\api.py", line 75, in get
    return request('get', url, params=params, **kwargs)
  File "F:\pythonVENV\web_scraping\lib\site-packages\requests\api.py", line 61, in request
    return session.request(method=method, url=url, **kwargs)
  File "F:\pythonVENV\web_scraping\lib\site-packages\requests\sessions.py", line 529, in request   
    resp = self.send(prep, **send_kwargs)
  File "F:\pythonVENV\web_scraping\lib\site-packages\requests\sessions.py", line 645, in send      
    r = adapter.send(request, **kwargs)
  File "F:\pythonVENV\web_scraping\lib\site-packages\requests\adapters.py", line 517, in send      
    raise SSLError(e, request=request)
requests.exceptions.SSLError: HTTPSConnectionPool(host='api.github.com', port=443): Max retries exceeded with url: / (Caused by SSLError(SSLEOFError(8, 'EOF occurred in violation of protocol (_ssl.c:997)')))
```

出错原因：国内无法访问外网

解决方案：设置代理参数

https://stackoverflow.com/questions/8287628/proxies-with-python-requests-module

```python
import requests

http_proxy = 'http://localhost:7890'
https_proxy = 'http://localhost:7890'
ftp_proxy = 'http://localhost:7890'

proxy_dict = {
    'http': http_proxy,
    'https': https_proxy,
    'ftp': ftp_proxy
}

url = 'https://api.github.com'
print(requests.get(url, proxies=proxy_dict))
```





