#!/bin/bash
shopt -s globstar

# Tjek https://github.com/processing/p5.js/releases/latest for at se den
# nyeste version og giv den som argument
curl -OL https://github.com/processing/p5.js/releases/download/$1/p5.zip
if [[ $? -eq 0 ]]; then
    unzip p5.zip -d libs
    for f in **/**/libraries; do
        rm "$f"/*.js
        cp libs/p5/addons/p5.dom.js "$f"
        cp libs/p5/addons/p5.sound.js "$f"
        cp libs/p5/p5.js "$f"
    done
    rm p5.zip
    rm -r libs
else
    echo "Fejl i at hente p5. Findes versionen ($1)?"
fi
