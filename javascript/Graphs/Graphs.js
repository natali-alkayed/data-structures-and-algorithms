class Vertex {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.vertices = new Map();
    }

    addVertex(value) {
        const vertex = new Vertex(value);
        this.vertices.set(vertex, []);
        return vertex;
    }

    addEdge(vertex1, vertex2, weight = 0) {
        if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
            throw new Error('Vertices must exist in the graph.');
        }

        const edges1 = this.vertices.get(vertex1);
        const edges2 = this.vertices.get(vertex2);

        edges1.push(new Edge(vertex2, weight));
        edges2.push(new Edge(vertex1, weight));
    }

    getVertices() {
        return [...this.vertices.keys()];
    }

    getNeighbors(vertex) {
        if (!this.vertices.has(vertex)) {
            throw new Error('Vertex does not exist in the graph.');
        }

        return this.vertices.get(vertex);
    }

    size() {
        return this.vertices.size;
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////
    breadthFirst(startNode) {
        if (!this.vertices.has(startNode)) {
            throw new Error('Start node does not exist in the graph.');
        }

        const visited = new Set();
        const queue = [];
        const result = [];

        queue.push(startNode);
        visited.add(startNode);

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            result.push(currentVertex.value);

            for (const neighborEdge of this.getNeighbors(currentVertex)) {
                const neighborVertex = neighborEdge.vertex;

                if (!visited.has(neighborVertex)) {
                    visited.add(neighborVertex);
                    queue.push(neighborVertex);
                }
            }
        }

        return result;
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////
depthFirst(startNode) {
    if (!this.vertices.has(startNode)) {
        throw new Error('Start node does not exist in the graph.');
    }

    const visited = new Set();
    const result = [];

    const dfs = (currentVertex) => {
        visited.add(currentVertex);
        result.push(currentVertex.value);

        for (const neighborEdge of this.getNeighbors(currentVertex)) {
            const neighborVertex = neighborEdge.vertex;
            if (!visited.has(neighborVertex)) {
                dfs(neighborVertex);
            }
        }
    };

    dfs(startNode);
    console.log("Depth-First Traversal (Pre-order):", result);
    return result;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
}

module.exports = {Graph,Vertex,Edge };