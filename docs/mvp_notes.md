## 🧩MVP Find my Band 🎸

## 🎯 Objectif  
***Découvrir de manière aléatoire un groupe de metal avec interaction simple et engageante***

## 🛠️ Fonctions principales
- [X] Bouton principal "Find my band !"
- [X] Affichage du nom du groupe et son pays d'origine
- [X] Lien vers une vidéo YouTube
- [X] Icône ❤️ permettant de mettre le groupe en favori
- [ ] Historique des requêtes (optionnel à ce stade)

## 🚀 Flux utilisateur
1. L'utilisateur clique sur le bouton
2. Affichage :
    - d'un groupe
    - de son pays d'origine
    - d'un lien YouTube cliquable
    - d'un icône ❤️
3. Il peut cliquer 
    - sur le lien YouTube pour écouter l'extrait choisi
    - sur l'icône pour sauvegarder ce groupe dans ses favoris
4. Option (plus tard) : afficher l'historique des requêtes

## ⚙️ Comportement attendu

### État initial
- L'application affiche uniquement un bouton "Find my band!"
- Aucun groupe, pays ou média n’est visible

### Après clic sur le bouton
- Une carte s’affiche avec :
  - le nom du groupe
  - son pays d’origine
  - une icône YouTube menant à une vidéo
  - une icône ❤️ pour ajouter aux favoris

### Si l’utilisateur recharge la page ou ferme le navigateur
- L’application revient à l’état initial
- Le groupe affiché précédemment n’est **pas** conservé