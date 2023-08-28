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
}

module.exports = Hashtable;