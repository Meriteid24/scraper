A Python scraper that collects trending computer and tech products from multiple e-commerce sites and saves them to Excel.

Features:
1. Scrapes product trends from Amazon, Newegg, and Jumia.
2. Saves trends to trending_products.xlsx for easy viewing and analysis.
3. Automatically removes duplicate products and keeps only the last 5 days of data.
4. Uses fuzzy matching to check if a specific item is trending.
5. Implements retries and user-agent headers for reliable scraping.

Tech Stack
Python 3.x, requests, BeautifulSoup4, pandas, fuzzywuzzy, python-Levenshtein, openpyxl

Usage
1. Clone the repo and navigate to the project folder.
2. (Optional) Create a virtual environment: 
   python3 -m venv venv
   source venv/bin/activate
3. Install dependencies:
    pip install -r requirements.txt
4. Run the scraper:
    python3 scraper.py
5. Check trending_products.xlsx for the latest scraped products.