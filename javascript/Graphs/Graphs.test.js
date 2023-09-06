const Graph = require('./Graphs');

test('Vertex can be successfully added to the graph', () => {
    const graph = new Graph();
    const vertex = graph.addVertex('A');
    
    expect(graph.getVertices()).toContain(vertex);
});

test('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    const vertex1 = graph.addVertex('A');
    const vertex2 = graph.addVertex('B');
    
    graph.addEdge(vertex1, vertex2, 10);
    expect(graph.getNeighbors(vertex1)).toHaveLength(1);
    expect(graph.getNeighbors(vertex2)).toHaveLength(1);
});

test('A collection of all vertices can be properly retrieved from the graph', () => {
    const graph = new Graph();
    const vertex1 = graph.addVertex('A');
    const vertex2 = graph.addVertex('B');
    
    const vertices = graph.getVertices();
    expect(vertices).toContain(vertex1);
    expect(vertices).toContain(vertex2);
});

test('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();
    const vertex1 = graph.addVertex('A');
    const vertex2 = graph.addVertex('B');
    const vertex3 = graph.addVertex('C');
    
    graph.addEdge(vertex1, vertex2, 10);
    graph.addEdge(vertex1, vertex3, 20);
    
    const neighbors = graph.getNeighbors(vertex1);
    expect(neighbors).toHaveLength(2);
    expect(neighbors[0].vertex).toBe(vertex2);
    expect(neighbors[1].vertex).toBe(vertex3);
});

test('Neighbors are returned with the weight between vertices included', () => {
    const graph = new Graph();
    const vertex1 = graph.addVertex('A');
    const vertex2 = graph.addVertex('B');
    
    graph.addEdge(vertex1, vertex2, 10);
    
    const neighbors = graph.getNeighbors(vertex1);
    expect(neighbors).toHaveLength(1);
    expect(neighbors[0].weight).toBe(10);
});

test('The proper size is returned, representing the number of vertices in the graph', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    
    expect(graph.size()).toBe(2);
});


test('A graph with only one vertex and edge can be properly returned', () => {
    const graph = new Graph();
    const vertex = graph.addVertex('A');
    
    graph.addEdge(vertex, vertex, 5);
    
    expect(graph.getVertices()).toContain(vertex);
    expect(graph.getNeighbors(vertex)).toHaveLength(2); // Change this to 2
    expect(graph.size()).toBe(1);
});