import os
import shutil
import re
import fitz

base_dir = r"c:\Users\Admin\Desktop\WEB DONE\Maison-de-vi"
docx_img_dir = os.path.join(base_dir, "temp_docx_images")
public_img_dir = os.path.join(base_dir, "public", "images")
maison_img_dir = os.path.join(public_img_dir, "maison-de-vi")
os.makedirs(maison_img_dir, exist_ok=True)

# 1. Process SVG logo from PDF
pdf_path = os.path.join(base_dir, "Logo-Maison-de-Vị-final (1).pdf")
doc = fitz.open(pdf_path)

# Page 0 has terracotta brand seal
svg_p0 = doc[0].get_svg_image()
with open(os.path.join(public_img_dir, "maison-de-vi-logo.svg"), "w", encoding="utf-8") as f:
    f.write(svg_p0)

# Also create transparent SVG (remove outer square #722c22 background)
svg_transparent = re.sub(r'<path[^>]+fill="#722c22"[^>]*>', '', svg_p0, count=1)
with open(os.path.join(public_img_dir, "maison-de-vi-logo-transparent.svg"), "w", encoding="utf-8") as f:
    f.write(svg_transparent)

# Also page 5 (black on white / monochrome if needed)
svg_p5 = doc[5].get_svg_image()
with open(os.path.join(public_img_dir, "maison-de-vi-logo-mono.svg"), "w", encoding="utf-8") as f:
    f.write(svg_p5)

# Also page 7 (beige background)
svg_p7 = doc[7].get_svg_image()
with open(os.path.join(public_img_dir, "maison-de-vi-logo-badge.svg"), "w", encoding="utf-8") as f:
    f.write(svg_p7)

# 2. Copy and organize assets from docx
asset_mapping = {
    # Hero/Banner
    "image8.png": "maison-hero.png",
    # 3 Menu images
    "image11.png": "maison-menu-1.png",
    "image12.png": "maison-menu-2.png",
    "image13.png": "maison-menu-midi.png",
    # 5 Ambiance images
    "image14.png": "maison-ambiance-1.png",
    "image15.png": "maison-ambiance-2.png",
    "image16.png": "maison-ambiance-3.png",
    "image17.png": "maison-ambiance-4.png",
    # (image8 is also ambiance 5)
    # image9 & image10 (content references from docx)
    "image9.png": "maison-hero-content-ref.png",
    "image10.png": "maison-histoire-ref.png",
}

for src_name, target_name in asset_mapping.items():
    src_file = os.path.join(docx_img_dir, src_name)
    if os.path.exists(src_file):
        dst_file = os.path.join(maison_img_dir, target_name)
        shutil.copy2(src_file, dst_file)
        print(f"Copied {src_name} -> {dst_file}")

# Image 8 is also used as ambiance 5
shutil.copy2(os.path.join(docx_img_dir, "image8.png"), os.path.join(maison_img_dir, "maison-ambiance-5.png"))

print("All assets successfully extracted and organized.")
