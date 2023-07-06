const AnimalShelter = require('./AnimalShelter');
const Node=require('./Node');
const Queue=require('./Queue');


describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('enqueue should add animals to the correct queues', () => {
    const dog1 = { species: 'dog', name: 'xx' };
    const cat1 = { species: 'cat', name: 'yy' };
    const dog2 = { species: 'dog', name: 'zz' };

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);

    expect(shelter.dogs.peek()).toEqual(dog1);
    expect(shelter.cats.peek()).toEqual(cat1);
  });

  test('dequeue should return the correct animal based on pref', () => {
    const dog1 = { species: 'dog', name: 'xx' };
    const cat1 = { species: 'cat', name: 'yy' };
    const dog2 = { species: 'dog', name: 'zz' };

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);

    expect(shelter.dequeue('dog')).toEqual(dog1);
    expect(shelter.dequeue('cat')).toEqual(cat1);
    expect(shelter.dequeue('dog')).toEqual(dog2);
  });
  test('dequeue should return null for invalid pref', () => {
    const dog1 = { species: 'dog', name: 'xx' };
    const cat1 = { species: 'cat', name: 'yy' };

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);

    expect(shelter.dequeue('anyThing')).toBeNull();
  });

});
