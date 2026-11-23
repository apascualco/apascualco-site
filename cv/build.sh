#!/bin/sh
set -eu
cd "$(dirname "$0")"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$chrome" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="../public/download/resume.pdf" "file://$(pwd)/resume.html"
