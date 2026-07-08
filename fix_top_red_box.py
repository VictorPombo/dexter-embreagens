from PIL import Image, ImageDraw, ImageFilter
import numpy as np

img = Image.open('/Users/hadi/dexter-embreagens/public/images/banner-desktop.jpg')
width, height = img.size
pixels = img.load()

# Find the bounding box of the top red box by sampling the top right area
red_color = (204, 25, 21) # approximate red #CC1915
# We know it's on the top right. Let's scan from right to left, top to bottom.
# Actually, let's just do a manual crop and paste.
# The top red box goes from x=something to width, y=0 to something.
# Let's find the bottom of the top red box by checking the rightmost column.
box_bottom = 0
for y in range(height // 2):
    r, g, b = pixels[width - 10, y]
    # Check if it's reddish
    if r > 150 and g < 50 and b < 50:
        box_bottom = y
    else:
        if box_bottom > 0:
            break

# Find the left edge of the top red box
box_left = width - 1
for x in range(width - 10, width // 2, -1):
    r, g, b = pixels[x, 10]
    if r > 150 and g < 50 and b < 50:
        box_left = x
    else:
        break

print(f"Detected top red box: left={box_left}, bottom={box_bottom}")

# Copy the sky to the left of the red box
# We'll take a vertical strip of sky just to the left of the box
sky_strip_width = 300
sky_left = max(0, box_left - sky_strip_width)
sky_strip = img.crop((sky_left, 0, box_left, box_bottom))

# Stretch or mirror the sky strip to cover the red box
# A horizontal flip of the sky looks more natural than a stretch
sky_patch = sky_strip.resize((width - box_left, box_bottom))

# Paste it over the red box
img.paste(sky_patch, (box_left, 0))

# Save
img.save('/Users/hadi/dexter-embreagens/public/images/banner-desktop.jpg')
print("Red box removed and sky adapted!")
