require('./scripts.js')

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

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

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

;
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));


function greaterThan (n) {
  return m => m > n;
}
var greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

function noisy (f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned ", result);
    return result;
  }
}

noisy(greaterThan(10))(11);
noisy(Math.min)(3,5,100,2);

function unless (test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 === 1, () => {
    console.log(n, "is even");
  } );
});


repeat(5, msg => console.log(msg) );


["A","B"].forEach(l => console.log(l));

console.log(SCRIPTS.filter(s => s.living === false).map( (el, i) => el.name));

let roseDragon = " 🌹🐉 ";
for (let char of roseDragon) {
  console.log(char);
}

for (let char in roseDragon) {
console.log("char in: ", roseDragon.charCodeAt(char));
}

for (let char of roseDragon) {
console.log("char of: ", roseDragon.charCodeAt(char));
}

for (let char in roseDragon) {
console.log("code in: ", roseDragon.codePointAt(char));
}

for (let char of roseDragon) {
console.log("code of: ", roseDragon.codePointAt(char));
}

for (let char in roseDragon) {
console.log("char in: ",roseDragon[char]);
}
for (let char of roseDragon) {
  if (char !== " ") {
    console.log("char of: ", char);
  }
}
let items = [1,2,3,4,5];
for (let item of items) {
console.log(item);
}