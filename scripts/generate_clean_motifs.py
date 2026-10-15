import fitz
import glob
import os
import re
import sys
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

def main():
    out_dir = "public/images/maison-de-vi/motifs"
    os.makedirs(out_dir, exist_ok=True)

    pdfs = glob.glob('*.pdf')
    target_pdf = [p for p in pdfs if 'Đường-nét' in p or 'Duong-net' in p][0]
    print(f"Loading {target_pdf}...")
    doc = fitz.open(target_pdf)
    page = doc[4]
    svg = page.get_svg_image()

    header_match = re.search(r'(<svg[^>]*>.*?<defs>.*?</defs>)', svg, re.DOTALL)
    header = header_match.group(1) if header_match else ""
    body = svg[len(header):]
    paths = re.findall(r'<path[^>]*?/>', body)
    print(f"Total paths in SVG body: {len(paths)}")

    # Groups defined by exact path indices:
    groups = {
        # Individual Solid
        "motif-anise-solid": [169],
        "motif-hat-solid": [170],
        "motif-knot-solid": [171],
        "motif-stack-solid": [169, 170, 171],

        # Individual Outline
        "motif-anise-outline": [164, 165],
        "motif-hat-outline": [153, 154, 155],
        "motif-knot-outline": list(range(156, 164)),
        "motif-stack-outline": list(range(153, 166)),

        # Left Emblem (arch + 2 tassels + star anise)
        "motif-heritage-emblem": list(range(25, 70)) + list(range(74, 103)),

        # Artisan sub-elements from the Emblem
        "motif-anise-artisan": list(range(74, 103)),
        "motif-tassel-knot": list(range(25, 46)),
        "motif-hat-chevron": [67, 68, 69],
    }

    DPI = 300
    PADDING = 16

    for name, indices in groups.items():
        # Build clean SVG with only these paths
        selected_paths = "\n".join([paths[i] for i in indices])
        item_svg = f"{header}\n{selected_paths}\n</svg>"

        # Open in PyMuPDF
        item_doc = fitz.open(stream=item_svg.encode('utf-8'), filetype='svg')
        item_page = item_doc[0]

        # Render high-res
        pix = item_page.get_pixmap(alpha=True, dpi=DPI)
        img = Image.frombytes("RGBA", [pix.width, pix.height], pix.samples)

        # Auto-crop to exact visible bounds
        bbox = img.getbbox()
        if bbox:
            left = max(0, bbox[0] - PADDING)
            top = max(0, bbox[1] - PADDING)
            right = min(img.width, bbox[2] + PADDING)
            bottom = min(img.height, bbox[3] + PADDING)
            cropped = img.crop((left, top, right, bottom))
        else:
            cropped = img

        png_path = os.path.join(out_dir, f"{name}.png")
        webp_path = os.path.join(out_dir, f"{name}.webp")
        svg_path = os.path.join(out_dir, f"{name}.svg")

        # Save PNG, WebP
        cropped.save(png_path, "PNG", optimize=True)
        cropped.save(webp_path, "WEBP", quality=95)

        # Also write standalone trimmed SVG
        if bbox:
            # calculate viewBox in points
            scale = DPI / 72.0
            vb_x = left / scale
            vb_y = top / scale
            vb_w = (right - left) / scale
            vb_h = (bottom - top) / scale
            standalone_svg = f'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="{vb_x:.2f} {vb_y:.2f} {vb_w:.2f} {vb_h:.2f}" width="{cropped.width}" height="{cropped.height}">\n{selected_paths}\n</svg>'
            with open(svg_path, 'w', encoding='utf-8') as f:
                f.write(standalone_svg)

        print(f"Generated {name}: {cropped.width}x{cropped.height} -> PNG, WebP & SVG")

    print("\nAll brand motifs generated with 100% purity!")

if __name__ == "__main__":
    main()
