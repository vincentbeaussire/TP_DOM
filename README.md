# TP DOM – Création d’une interface de profil utilisateur dynamique

## Objectif

Créer une interface interactive en JavaScript pur (sans bibliothèque) permettant à un utilisateur de créer un petit profil personnalisé avec un thème, un pseudo, une description et un avatar.

Ce travail permet de s’exercer à :

- Manipuler le DOM
- Gérer les événements
- Valider les entrées utilisateur
- Mettre à jour dynamiquement l’interface

---

## Contraintes techniques

- Aucun framework ou bibliothèque externe n’est autorisé.
- Le travail principal se fait en JavaScript, HTML et CSS peuvent être simples ou fournis.
- Le code JavaScript doit être structuré, lisible et commenté.

---

## Structure attendue de l’interface

L’interface doit contenir :

1. Un sélecteur de thème Light/Dark fixé en bas de l’écran.
2. Une description (type slogan) changeant aléatoirement parmi 3 propositions :
    - au chargement de la page
    - à l’appui d’un bouton "Changer de description"
3. Un champ input pour entrer un pseudo, validé en JS :
    - Le pseudo doit contenir seulement des lettres (a-z, A-Z)
4. Un choix d’avatar parmi 3 images miniatures :
    - Une seule sélection possible à la fois
5. Un bouton "Suivant", désactivé par défaut, qui s’active uniquement lorsque :
    - un pseudo valide est saisi,
    - une description est affichée,
    - un avatar est sélectionné.

---

## Comportement à implémenter

### 1. Thème Light/Dark

- Bouton/clique permettant de basculer entre thème clair et sombre.
- Modification au moins de la couleur de fond et du texte.

### 2. Description dynamique

- Trois phrases proposées.
- Une phrase affichée :
    - au chargement de la page,
    - au clic sur le bouton "Changer de description".
- Pas de répétition immédiate du même texte.

### 3. Champ pseudo

- Validation dynamique au fur et à mesure de la saisie.
- Le pseudo ne doit contenir que des lettres (a-z, A-Z).
- Affichage d’un message ou changement de couleur en cas d’erreur.

### 4. Choix d’un avatar

- Affichage de 3 avatars miniatures.
- Sélection d’un seul avatar visible par un style distinctif (bordure, ombre...).

### 5. Bouton "Suivant"

- Désactivé (grisé) tant que tous les champs ne sont pas valides.
- Activé uniquement si pseudo valide + description affichée + avatar choisi.

### 6. Résumé final

- Après clic sur "Suivant", le formulaire disparaît.
- Affichage d’une carte profil avec :
    - Le pseudo
    - La description choisie
    - L’avatar sélectionné
- Optionnel : un bouton "Réinitialiser" pour revenir au formulaire.

---

## Conseils pour la réalisation

- Procéder par étapes, tester chaque fonctionnalité indépendamment.
- Utiliser les événements : `input`, `click`, `change`, `DOMContentLoaded`.
- Utiliser `classList` (`add`, `remove`, `toggle`) pour manipuler les styles.
- Utiliser une expression régulière pour valider le pseudo : `/^[a-zA-Z]+$/`.
- Factoriser le code pour éviter les répétitions.
- Commenter le code pour faciliter la compréhension.

---

## Livrables

- Un fichier `.html` contenant l’interface.
- Un fichier `.js` propre et commenté.
- Un fichier `.css` pour le style.

---

## Remarques

Ce TP permet d’approfondir la manipulation du DOM, la gestion des événements et la validation dynamique en JavaScript.

