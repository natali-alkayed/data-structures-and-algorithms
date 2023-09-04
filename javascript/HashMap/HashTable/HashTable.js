// consider size =50 for example
class Hashtable {
    constructor(size = 50) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }

        return null;
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return true;
            }
        }

        return false;
    }

    keys() {
        const keys = [];
        for (const bucket of this.buckets) {
            for (const [key] of bucket) {
                if (!keys.includes(key)) {
                    keys.push(key);
                }
            }
        }
        return keys;
    }



//////////////////////////////////////////////////////
leftJoin(antonymsHash) {
    const result = [];

    for (const key in this.buckets) {
        const bucket = this.buckets[key];
        for (const [key, synonym] of bucket) {
            const antonym = antonymsHash[key] || null;
            result.push([key, synonym, antonym]);
        }
    }

    return result;
}}


const synonymsHashTable = new Hashtable();


synonymsHashTable.set('diligent', 'employed');
synonymsHashTable.set('fond', 'enamored');
synonymsHashTable.set('guide', 'usher');

const antonymsHash = {
    diligent: 'idle',
    fond: 'averse',
    guide: 'follow',
    flow: 'jam',
    wrath: 'delight',
};


const result = synonymsHashTable.leftJoin(antonymsHash);

console.log(result);
/////////////////////////////////////////////////////////////////
module.exports = Hashtable;