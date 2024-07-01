import requests
import time

def get_load_time(url):
    start_time = time.time()
    response = requests.get(url)
    end_time = time.time()
    
    load_time = end_time - start_time
    return load_time

# Test the function with multiple sites
urls = [
    'https://www.google.com',
    'https://www.ynet.co.il',
    'https://www.imdb.com'
]

for url in urls:
    load_time = get_load_time(url)
    print(f"{url} took {load_time:.4f} seconds to load")