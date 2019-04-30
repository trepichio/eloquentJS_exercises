let text = "'I'm the cook,' he said, 'it's my job.'";
// Exercise: Change this call.
console.log(text.replace(/\B'/g, '"'));
// → "I'm the cook," he said, "it's my job."

// Their way to solve this problem:
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));