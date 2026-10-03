#!/bin/bash
# Generate all logo-derived assets from logo.png (406x318, black bg).
# Run from repo root: bash scripts/make-icons.sh
set -e
cd "$(dirname "$0")/.."
SRC=logo.png
mkdir -p icons public

# 1. Square master (pad to 406x406, black)
magick "$SRC" -background black -gravity center -extent 406x406 icons/logo-square-406.png

# 2. Desktop master: 1024 black canvas, emblem at 85% (safe for squircle/circle masks)
magick -size 1024x1024 xc:black \( icons/logo-square-406.png -filter Lanczos -resize 870x870 \) \
  -gravity center -composite icons/icon-1024.png

# 3. Web: favicon 64, apple-touch 180, pwa 192/512
magick icons/icon-1024.png -filter Lanczos -resize 64x64 public/favicon.png
magick icons/icon-1024.png -filter Lanczos -resize 180x180 public/apple-touch-icon.png
magick icons/icon-1024.png -filter Lanczos -resize 192x192 public/icon-192.png
magick icons/icon-1024.png -filter Lanczos -resize 512x512 public/icon-512.png

# 4. Android adaptive foreground: 1080 transparent, emblem at 60% (adaptive safe zone)
magick -size 1080x1080 xc:none \( icons/logo-square-406.png -filter Lanczos -resize 648x648 \) \
  -gravity center -composite icons/fg-1080.png

# 5. Android legacy/round: black canvas, emblem at 85% (safe for circle crop)
for d in 48:mdpi 72:hdpi 96:xhdpi 144:xxhdpi 192:xxxhdpi; do
  px=${d%%:*}; den=${d##*:}
  sz=$(( px * 85 / 100 ))
  for f in ic_launcher ic_launcher_round; do
    magick -size ${px}x${px} xc:black \( icons/logo-square-406.png -filter Lanczos -resize ${sz}x${sz} \) \
      -gravity center -composite android/app/src/main/res/mipmap-$den/$f.png
  done
  magick icons/fg-1080.png -filter Lanczos -resize ${px}x${px} android/app/src/main/res/mipmap-$den/ic_launcher_foreground.png
done

# 6. Adaptive background -> black
printf '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#000000</color>\n</resources>' \
  > android/app/src/main/res/values/ic_launcher_background.xml

echo "icons done:"; ls icons/ public/favicon.png public/apple-touch-icon.png public/icon-192.png public/icon-512.png
