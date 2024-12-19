import argparse
from pathlib import Path
from bs4 import BeautifulSoup

parser = argparse.ArgumentParser()
parser.add_argument('title', type=str)
args = parser.parse_args()

new_page_title = args.title
new_page_filename = args.title
html_filename = new_page_filename + '.html'
markdown_filename = new_page_filename + '.md'

template_filepath = Path('src/templates/markdown_page.html')
with open(template_filepath) as f:
    page_soup = BeautifulSoup(f, "html.parser")

header_title = page_soup.find_all(id='headerTitle')[0]
header_title.string = new_page_title

markdown_page = page_soup.find_all(id='markdown')[0]
markdown_page['src'] = markdown_filename


html_filepath = Path('src/content/' + html_filename)
html_filepath.write_text(page_soup.prettify())

markdown_filepath = Path('src/content/' + markdown_filename)
markdown_filepath.touch()