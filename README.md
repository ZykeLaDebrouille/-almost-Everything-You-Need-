# (almost) Everything You Need !

Bienvenue dans le repository qui a (presque) tout ce qu'il vous faut ! 🎉

## Qu'est-ce que c'est ?

Ce projet est une collection de scripts, d'outils, et de ressources qui vous aideront à conquérir le monde (ou au moins à rendre votre journée un peu plus facile). Que vous soyez développeur, designer, ou simplement curieux, vous trouverez ici quelque chose d'utile et de divertissant.

## Pourquoi ce repository ?

Parce que la vie est trop courte pour chercher partout ce dont vous avez besoin. Ici, nous avons rassemblé les essentiels pour vous faire gagner du temps et vous offrir un sourire.

## Une dose quotidienne de motivation

Chaque jour, découvrez une nouvelle phrase motivante pour booster votre énergie et votre créativité. Parce qu'on a tous besoin d'un petit coup de pouce parfois !

### Exemple de phrase motivante :

> "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui." – Franklin D. Roosevelt

## Comment ça marche ?

Pour intégrer une nouvelle phrase motivante chaque jour, vous pouvez utiliser une API comme [ZenQuotes.io](https://zenquotes.io/) ou [Quotable.io](https://quotable.io/). Voici un exemple simple en JavaScript pour récupérer une phrase :

```javascript
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => console.log(data.content + ' — ' + data.author));
