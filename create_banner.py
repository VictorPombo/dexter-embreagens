from PIL import Image
import sys

try:
    # Open the original square image
    img = Image.open('/Users/hadi/dexter-embreagens/public/images/banner-site.jpeg')
    width, height = img.size

    # Target dimensions for horizontal banner
    target_width = int(height * (16/9)) # roughly 1920x1080 if original is 1080x1080
    target_height = height

    # Create new image
    new_img = Image.new('RGB', (target_width, target_height))

    # Calculate padding
    pad_left = (target_width - width) // 2
    pad_right = target_width - width - pad_left

    # Get the 1-pixel sliver from left edge
    left_edge = img.crop((0, 0, 1, height))
    # Resize it to fill the left padding (stretching the pixels)
    left_padding = left_edge.resize((pad_left, height))

    # Get the 1-pixel sliver from right edge
    right_edge = img.crop((width-1, 0, width, height))
    # Resize it to fill the right padding
    right_padding = right_edge.resize((pad_right, height))

    # Paste everything together
    new_img.paste(left_padding, (0, 0))
    new_img.paste(img, (pad_left, 0))
    new_img.paste(right_padding, (pad_left + width, 0))

    # Save the new horizontal banner
    new_img.save('/Users/hadi/dexter-embreagens/public/images/banner-horizontal.jpeg', quality=95)
    print("Horizontal banner created successfully!")
except Exception as e:
    print(f"Error: {e}")
