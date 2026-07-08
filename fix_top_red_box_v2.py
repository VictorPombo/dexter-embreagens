from PIL import Image

# Abre a imagem original
img = Image.open('/Users/hadi/dexter-embreagens/public/images/banner-desktop.jpg')
width, height = img.size

# A caixa vermelha superior direita esta em [2980:3712, 0:440]
box_left = 2980
box_bottom = 440

# Pegar uma "fatia" do céu imediatamente a esquerda da caixa
# Uma fatia de 100 pixels de largura
sky_slice_width = 100
sky_left = box_left - sky_slice_width

# Recorta o céu
sky_slice = img.crop((sky_left, 0, box_left, box_bottom))

# Estica esse pedaço do céu para cobrir toda a largura da caixa vermelha
new_width = width - box_left
sky_patch = sky_slice.resize((new_width, box_bottom))

# Cola por cima da caixa vermelha
img.paste(sky_patch, (box_left, 0))

# Salva a imagem
img.save('/Users/hadi/dexter-embreagens/public/images/banner-desktop.jpg')
print("Magica feita! Caixa vermelha superior removida.")
