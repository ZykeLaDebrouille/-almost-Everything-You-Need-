const fs = require('fs');
const fetch = require('node-fetch');

async function updateReadme() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  const quote = `"${data.content}" — ${data.author}`;

  let readmeContent = fs.readFileSync('README.md', 'utf8');
  const updatedContent = readmeContent.replace(/> ".*" — .*$/m, `> ${quote}`);

  fs.writeFileSync('README.md', updatedContent);
}

updateReadme();
