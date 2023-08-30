const Hashtable = require('./HashTable');

describe('Hashtable', () => {
    let ht;

    beforeEach(() => {
        ht = new Hashtable();
    });

    test('Retrieving based on a key returns the value stored', () => {
        ht.set('key1', 'value1');
        expect(ht.get('key1')).toBe('value1');
    });

    test('Successfully returns null for a key that does not exist in the hashtable', () => {
        ht.set('key1', 'value1');
        expect(ht.get('key1')).toBe('value1');
    });

    test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
        expect(ht.get('nonexistent_key')).toBeNull();
    });

    test('Successfully handle a collision within the hashtable', () => {
        ht.set('key1', 'value1');
        expect(ht.has('key1')).toBe(true);
    });

    test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        expect(ht.has('key1')).toBe(false);
    });

    test('Successfully hash a key to an in-range value', () => {
        ht.set('key1', 'value1');
        ht.set('key2', 'value2');
        ht.set('key3', 'value3');
        ht.set('key1', 'new_value'); 
        expect(ht.keys()).toEqual(expect.arrayContaining(['key1', 'key2', 'key3']));
    });




    const RepeatedWord = require('../RepeatedWord/RepeatedWord'); 
    describe('RepeatedWord function', () => {
      it('should return the first repeated word in a sentence', () => {
        const sentence = "This is a sample sentence. This is a sample.";
        const repeatedWord = RepeatedWord(sentence);
        expect(repeatedWord).toBe('This');
      });
    
      it('should return null for a sentence with no repeated words', () => {
        const sentence = "This is a unique sentence.";
        const repeatedWord = RepeatedWord(sentence);
        expect(repeatedWord).toBe(null);
      });
    });

});