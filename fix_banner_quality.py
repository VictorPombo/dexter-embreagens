from PIL import Image

# Start from the original, uncompressed image in Downloads!
img = Image.open('/Users/hadi/Downloads/banner.jpg')
width, height = img.size

# 1. REMOVE TOP RED BOX
box_left = 2980
box_bottom = 440
sky_slice_width = 100
sky_left = box_left - sky_slice_width
sky_slice = img.crop((sky_left, 0, box_left, box_bottom))
new_width = width - box_left
sky_patch = sky_slice.resize((new_width, box_bottom))
img.paste(sky_patch, (box_left, 0))

# 2. ADD BOTTOM PADDING (80 pixels)
pad_height = 80
new_img = Image.new('RGB', (width, height + pad_height))
new_img.paste(img, (0, 0))
bottom_row = img.crop((0, height - 1, width, height))
stretched_bottom = bottom_row.resize((width, pad_height))
new_img.paste(stretched_bottom, (0, height))

# 3. SAVE WITH MAXIMUM QUALITY
new_img.save('/Users/hadi/dexter-embreagens/public/images/banner-desktop.jpg', quality=100, subsampling=0)
print("Image recreated with 100% quality!")
