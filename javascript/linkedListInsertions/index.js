'use strict';
const linkedList = require('./lib/LinkedList');
const LL = new linkedList();
LL.append(10);
LL.append(20);
LL.append(30);

console.log(LL);

LL.insertBefore(20, 15);
LL.insertAfter(30, 35);

console.log(LL); 