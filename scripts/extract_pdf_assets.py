import fitz # PyMuPDF
import os

os.makedirs('public/images/maison-de-vi', exist_ok=True)

# 1. Extract pages from Logo-Maison-de-Vị-final (1).pdf
doc_logo = fitz.open('Logo-Maison-de-Vị-final (1).pdf')
for i, page in enumerate(doc_logo):
    pix = page.get_pixmap(dpi=200)
    out_path = f'public/images/maison-de-vi/logo-page-{i+1}.png'
    pix.save(out_path)
    print(f'Saved {out_path}')

# 2. Extract pages from Đường-nét-Maison-de-Vị-2.pdf
doc_duongnet = fitz.open('Đường-nét-Maison-de-Vị-2.pdf')
for i, page in enumerate(doc_duongnet):
    pix = page.get_pixmap(dpi=200)
    out_path = f'public/images/maison-de-vi/pattern-page-{i+1}.png'
    pix.save(out_path)
    print(f'Saved {out_path}')

print("Done extracting PDF pages!")
