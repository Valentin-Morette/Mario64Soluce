#!/bin/bash

# Dans package.json, ajouter :

# "homepage": "https://Valentin-Morette.github.io/NomDuRepo",
# "scripts": {
    # "deploy": "gh-pages -d build"
# }

# bash installGithubPages.sh pour lancer le script

if [ -e node_modules/.cache/gh-pages/ ]; 
then
  echo "gh-pages déjà installé"
else
npm i gh-pages
fi

npm run build
npm run deploy

# Si erreur -> "fatal: Une branche nommée 'gh-pages' existe déjà."
# Supprimer le fichier node_modules/.cache/gh-pages
