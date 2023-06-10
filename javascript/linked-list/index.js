'use strict';
const linkedList= require ('./lib/LinkedList');
const LL = new linkedList();
LL.insert("c");
LL.insert("b");
LL.insert("a");
console.log(LL.toString()); 
console.log(LL.includes("b")); 
console.log(LL.includes("d")); 



