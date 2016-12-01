// Palindromes
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-z]/g, "");
    // your code goes here
    let stack = new Stack();
    for(let i in s) {
      stack.push(s[i])
    }
    for(let i in s) {
      if(s[i] !== stack.pop()) return false;
    }
    return true;
}
// console.log(s.split("").reverse().join("") === true);
// true, true, true
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));


// Matching parentheses in an expression
function missingBrackets(exp) {
  exp = exp.toString();
  console.log(exp);
  let stack = new Stack();
  function checkClosure(closingBracket, i) {
    let x = closingBracket, y;
    if(!x) return `Unopened ${exp[i]} at position ${i}`
    if(exp[i] === ")") y = "(";
    if(exp[i] === "]") y = "[";
    if(exp[i] === "}") y = "{";
    if(x[1] != y) return `Unopened ${exp[i]} at position ${i}`
    };

  for(let i in exp) {
    if(stack.length()) {
      if((stack.peek()[1] === "'" || stack.peek()[1] === '"') && 
         (exp[i] === "'" || exp[i] === '"')) stack.pop()
      else if(exp[i] === "'" || exp[i] === '"') stack.push([i, exp[i]])
      else if(stack.peek()[1] === "'" || stack.peek()[1] === '"'){}
        //skip further analysis since bracket would be within quotations
      else if(exp[i].match(/[\(\[\{]/g)) stack.push([i, exp[i]])
      else if(exp[i].match(/[\)\]\}]/g)) {
        let check = checkClosure(stack.pop(), i);
        if(check) return check;
      }
    }
    else if(exp[i].match(/[\(\[\{\'\"]/g)) stack.push([i, exp[i]])
    else if(exp[i].match(/[\)\]\}]/g)) {
      let check = checkClosure(stack.pop(), i);
      if(check) return check;
    }
  }
  if(stack.length()) return `Unclosed ${stack.peek()[1]} at position ${stack.peek()[0]}`

  return "brackets closed"
}

console.log(missingBrackets("(){}[{}]"));
console.log(missingBrackets("(1+2+[a,b,c]*{{}})"));
console.log(missingBrackets("(1+2){}[("));
console.log(missingBrackets("(1+2))"));
console.log(missingBrackets("hello(world"));
console.log(missingBrackets("hello(world(and)others"));
console.log(missingBrackets("hello'(world(and)others"));


// Square dance pairing
function squareDancePair(dancerArray) {
  let queueM = new Queue(), queueF = new Queue(), pairs = [];
  for(let i in dancerArray) {
    if(dancerArray[i][0] === "m") queueM.enqueue(dancerArray[i])
    else if(queueM.dataStore[0]) pairs.push([dancerArray[i], queueM.dequeue()])
    else queueF.enqueue(dancerArray[i])
  }
  // return {pairs: pairs, queueM: queueM.dataStore, queueF: queueF.dataStore};
  return {pairs: pairs, 
          "unpaired dancers": 
            (queueM.dataStore[0]) && (queueF.dataStore[0]) ? "males and females" : 
              (queueM.dataStore[0]) ? "at least one male" : 
                (queueF.dataStore[0]) ? "at least one female" : "none"};
}
console.log(squareDancePair(["m1", "m2","m3","f1","f2","f3", "m4", "m5"]))
console.log(squareDancePair(["m1", "m2","f1","f2","f3"]))
console.log(squareDancePair(["m1", "m2", "m3", "f1","f2", "m4", "f3", "f4"]))
console.log(squareDancePair(["m1", "m2","m3","f1","f2","f3","f4"]))


//Ophidian Bank
function bankLobbyQueue(customerCount) {
  let customerQueue = new Queue();
  for(let i = 1; i <= customerCount; i++) {
    customerQueue.enqueue(i);
  }
  while(customerQueue.dataStore.length) {
    console.log(customerQueue.dataStore);
    console.log(customerQueue.dataStore.length);
    //appropriate paperwork?
    if(Math.random() <= 0.74) {
      customerQueue.dequeue();
    } else customerQueue.enqueue(customerQueue.dequeue());
  }
  return "all customers served";
}


