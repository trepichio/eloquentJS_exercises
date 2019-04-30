'use strict'
require('./scripts.js');

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection (text) {
  let counted = countBy(text,char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(s => s.name !== "none");

  if (counted.length === 0) { return "ltr"}

  let majorScript = counted.reduce( (a,b) => a.count < b.count ? b : a);
  for (let script of SCRIPTS) {
    if (script.name === majorScript.name) {
      return `Dominant Language: ${script.name} and its direction: ${script.direction}`;
    }  
  } 
}

console.log(dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'))
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl