const Node = require('./Node');
const Queue = require('./Queue');

class AnimalShelter {
    constructor() {
      this.dogs = new Queue();
      this.cats = new Queue();
    }
  
    enqueue(animal) {
      if (animal.species === 'dog') {
        this.dogs.enqueue(animal);
      } else if (animal.species === 'cat') {
        this.cats.enqueue(animal);
      }
    }
  
    dequeue(pref) {
      if (pref === 'dog') {
        return this.dogs.dequeue();
      } else if (pref === 'cat') {
        return this.cats.dequeue();
      } else {
        return null;
      }
    }
  }
  
  module.exports = AnimalShelter;
  
  
 


