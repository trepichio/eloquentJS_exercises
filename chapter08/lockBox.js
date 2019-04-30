'use strict'
const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {

  let locked = box.locked;
  //if unlocked then stays unlocked
  if (!locked) { return body()}

  //Unlocks the box
  box.unlock();
  try {
    // Runs the function
    body();
    //getting box content
    console.log(box.content);  
  }
  finally
  {
    // ensures the box is locked again
   box.lock()
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
