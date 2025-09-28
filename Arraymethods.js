// Author: Daluchi Okafor
// 24/0552

const programmingLanguages = ["JavaScript", "Python", "C", "Java"];

// for each  list of languages
programmingLanguages.forEach(lang => console.log("Daluchi studies", lang));

// map to convert to uppercase
const upperLanguages = programmingLanguages.map(lang => lang.toUpperCase());
console.log("Uppercase:", upperLanguages);

// filterto get languages longer than 4 letters
const longLanguages = programmingLanguages.filter(lang => lang.length > 4);
console.log("Long languages:", longLanguages);
