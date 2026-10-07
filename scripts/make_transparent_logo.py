from PIL import Image
import math

img = Image.open('public/images/maison-de-vi/logo-badge.png').convert('RGBA')
pixdata = img.load()
w, h = img.size

# Sample background from top-left pixel
bg_r, bg_g, bg_b, _ = pixdata[0, 0]

for y in range(h):
    for x in range(w):
        r, g, b, a = pixdata[x, y]
        dist = math.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)
        if dist < 22:
            pixdata[x, y] = (r, g, b, 0)
        elif dist < 45:
            new_a = int((dist - 22) / (45 - 22) * 255)
            pixdata[x, y] = (r, g, b, new_a)

img.save('public/images/maison-de-vi/logo-transparent.png', 'PNG')
print("Saved transparent logo successfully with Pillow pure!")
