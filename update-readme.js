const fs = require('fs');

async function getRandomQuote() {
  try {
    const data = fs.readFileSync('quotes.json', 'utf8');
    const quotes = JSON.parse(data);
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier :', error.message);
  }
}

async function updateReadme() {
  try {
    const quoteData = await getRandomQuote();
    
    // Vérifiez que les données de citation sont valides
    if (quoteData && quoteData.quote && quoteData.author) {
      const quote = `"${quoteData.quote}" — ${quoteData.author}`;
      console.log(quote);

      // Lire le contenu actuel du README.md
      let readmeContent = fs.readFileSync('README.md', 'utf8');

      // Remplacer ou ajouter la citation du jour
      const newContent = readmeContent.replace(/(Citation du jour 🌟\n\n)(.*)/, `$1${quote}`);
      
      // Écrire le nouveau contenu dans le README.md
      fs.writeFileSync('README.md', newContent);
    } else {
      console.warn('Citation ou auteur non définis, aucune mise à jour effectuée.');
    }
  } catch (error) {
    console.error('Erreur :', error.message);
  }
}

updateReadme();
