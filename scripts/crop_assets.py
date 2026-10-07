from PIL import Image

# logo-page-2 has a centered logo on #DED3B4 (approx 1600x1600)
img = Image.open('public/images/maison-de-vi/logo-page-2.png')
w, h = img.size

# Crop centered logo box
box = (int(w * 0.3), int(h * 0.3), int(w * 0.7), int(h * 0.7))
cropped_logo = img.crop(box)
cropped_logo.save('public/images/maison-de-vi/logo-badge.png')

# Also crop signboard mockup from page 9
img_sign = Image.open('public/images/maison-de-vi/logo-page-9.png')
img_sign.save('public/images/maison-de-vi/signboard.png')

# Also crop entrance from page 12
img_arch = Image.open('public/images/maison-de-vi/logo-page-12.png')
img_arch.save('public/images/maison-de-vi/entrance.png')

# Also crop tableware from page 11
img_plate = Image.open('public/images/maison-de-vi/logo-page-11.png')
img_plate.save('public/images/maison-de-vi/tableware.png')

print("Cropped assets saved!")
