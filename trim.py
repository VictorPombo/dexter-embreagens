from PIL import Image
import sys

def trim_transparency(img_path):
    try:
        im = Image.open(img_path).convert("RGBA")
        alpha = im.split()[-1]
        # Threshold alpha: any pixel with alpha < 20 becomes 0, else 255
        alpha_threshold = alpha.point(lambda p: 255 if p > 20 else 0)
        bbox = alpha_threshold.getbbox()
        if bbox:
            im = im.crop(bbox)
            im.save(img_path)
            print(f"Trimmed {img_path} to {bbox}")
        else:
            print(f"No transparent bounding box found for {img_path}")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

if __name__ == '__main__':
    for arg in sys.argv[1:]:
        trim_transparency(arg)
