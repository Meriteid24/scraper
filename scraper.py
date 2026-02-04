import requests
from bs4 import BeautifulSoup
from datetime import datetime, timedelta
import time
from functools import lru_cache
from fuzzywuzzy import fuzz
import pandas as pd
import os

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/58.0.3029.110 Safari/537.3"
}
RETRY_LIMIT = 3
RETRY_DELAY = 5  # seconds
RETENTION_DAYS = 5  # Keep trends for 5 days
EXCEL_FILE = "trending_products.xlsx"

# ------------------ Scrapers ------------------

def fetch_with_retry(url, headers=HEADERS, retries=RETRY_LIMIT):
    for attempt in range(1, retries + 1):
        try:
            response = requests.get(url, headers=headers, timeout=10)
            response.raise_for_status()
            return response.text
        except Exception as e:
            print(f"⚠️ Attempt {attempt} failed for {url}: {e}")
            if attempt < retries:
                time.sleep(RETRY_DELAY)
    return None

def scrape_amazon():
    html = fetch_with_retry("https://www.amazon.com/bestsellers/computers")
    if not html:
        return []
    soup = BeautifulSoup(html, 'html.parser')
    return [p.get_text(strip=True) for p in soup.select(".a-carousel-card .p13n-sc-truncate")[:15]]

def scrape_newegg():
    html = fetch_with_retry("https://www.newegg.com/Best-Sellers/Computer-Accessories/ID-93")
    if not html:
        return []
    soup = BeautifulSoup(html, 'html.parser')
    return [item.get_text(strip=True) for item in soup.select(".item-title")[:15]]

def scrape_jumia():
    html = fetch_with_retry("https://www.jumia.co.ke/computing/")
    if not html:
        return []
    soup = BeautifulSoup(html, 'html.parser')
    selectors = [".name", ".info .title", "h3.name"]
    for selector in selectors:
        products = [item.get_text(strip=True) for item in soup.select(selector)[:15]]
        if products:
            return products
    return []

# ------------------ Excel Storage ------------------

def save_trends_to_excel(trends, filename=EXCEL_FILE):
    if not trends:
        return

    df_new = pd.DataFrame(trends)
    df_new['scraped_at'] = pd.to_datetime(df_new['scraped_at'])

    # Load existing Excel file if it exists
    if os.path.exists(filename):
        df_existing = pd.read_excel(filename)
        df_existing['scraped_at'] = pd.to_datetime(df_existing['scraped_at'])
        df = pd.concat([df_existing, df_new], ignore_index=True)
    else:
        df = df_new

    # Remove duplicates: keep last occurrence
    df.drop_duplicates(subset=['source', 'product'], keep='last', inplace=True)

    # Keep only last RETENTION_DAYS
    cutoff = datetime.now() - timedelta(days=RETENTION_DAYS)
    df = df[df['scraped_at'] >= cutoff]

    df.to_excel(filename, index=False)
    print(f"Saved {len(df_new)} trends to {filename}")

# ------------------ Main Scraping ------------------

def scrape_global_trends():
    print("\n=== Scraping Latest Trends ===")
    scrapers = {
        "Amazon": scrape_amazon,
        "Newegg": scrape_newegg,
        "Jumia": scrape_jumia
    }

    all_trends = []
    for site, scraper in scrapers.items():
        print(f"Scraping {site}...")
        products = scraper()
        all_trends.extend({
            "source": site,
            "product": product,
            "scraped_at": datetime.now().isoformat()
        } for product in products)
        print(f"Found {len(products)} products on {site}")

    save_trends_to_excel(all_trends)
    return all_trends

# ------------------ Trending Check ------------------

@lru_cache(maxsize=1)
def get_trending_products():
    if not os.path.exists(EXCEL_FILE):
        return []
    df = pd.read_excel(EXCEL_FILE)
    return df['product'].tolist()

def is_trending(item_name):
    item_lower = item_name.lower()
    return any(fuzz.partial_ratio(item_lower, p.lower()) > 80 for p in get_trending_products())

# ------------------ Runner ------------------

def main():
    trends = scrape_global_trends()
    print(f"Total products scraped: {len(trends)}")

if __name__ == "__main__":
    main()
