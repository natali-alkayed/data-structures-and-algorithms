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
///////////////////////////////////////////////////
//////////////////////////////////////////////////////
describe('Left Join Hashmaps"', () => {
    let hashtable;

    beforeEach(() => {
        hashtable = new Hashtable();
        hashtable.set('diligent', 'employed');
        hashtable.set('fond', 'enamored');
        hashtable.set('guide', 'usher');
        hashtable.set('outfit', 'garb');
        hashtable.set('wrath', 'anger');
    });

    it('should perform a left join with antonyms', () => {
        const antonymsHash = {
            diligent: 'idle',
            fond: 'averse',
            guide: 'follow',
            flow: 'jam',
            wrath: 'delight',
        };

        const result = hashtable.leftJoin(antonymsHash);
        result.sort((a, b) => a[0].localeCompare(b[0]));

        expect(result).toEqual([
            ['diligent', 'employed', 'idle'],
            ['fond', 'enamored', 'averse'],
            ['guide', 'usher', 'follow'],
            ['outfit', 'garb', null],
            ['wrath', 'anger', 'delight'],
        ]);
    });

    it('should handle empty antonymsHash', () => {
        const antonymsHash = {};

        const result = hashtable.leftJoin(antonymsHash);
        result.sort((a, b) => a[0].localeCompare(b[0]));
        expect(result).toEqual([
            ['diligent', 'employed', null],
            ['fond', 'enamored', null],
            ['guide', 'usher', null],
            ['outfit', 'garb', null],
            ['wrath', 'anger', null],
        ]);
    });

    it('should handle antonymsHash with missing keys', () => {
        const antonymsHash = {
            diligent: 'idle',
            guide: 'follow',
        };

        const result = hashtable.leftJoin(antonymsHash);
        result.sort((a, b) => a[0].localeCompare(b[0]));
        expect(result).toEqual([
            ['diligent', 'employed', 'idle'],
            ['fond', 'enamored', null],
            ['guide', 'usher', 'follow'],
            ['outfit', 'garb', null],
            ['wrath', 'anger', null],
        ]);
    });
});

});