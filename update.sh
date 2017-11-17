#!/bin/bash
shopt -s globstar

# Tjek https://github.com/processing/p5.js/releases/latest for at se den
# nyeste version og giv den som argument
curl -OL https://github.com/processing/p5.js/releases/download/$1/p5.zip
unzip p5.zip -d libs
if [[ $? -eq 0 ]]; then
    for f in **/**/libraries; do
        cp libs/p5/addons/p5.dom.js "$f"
        cp libs/p5/addons/p5.sound.js "$f"
        cp libs/p5/p5.js "$f"
    done
    rm -r libs
else
    echo "Fejl i at hente p5 med versionen '$1'! Findes den?"
fi
rm p5.zip
