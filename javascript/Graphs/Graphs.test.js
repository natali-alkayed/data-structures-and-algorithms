const {Graph} = require("./Graphs");

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
    expect(graph.getNeighbors(vertex)).toHaveLength(2); 
    expect(graph.size()).toBe(1);
});

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
describe('Graph breadthFirst method', () => {
    let graph;
    let pandora, arendelle, metroville, monstropolis, narnia, naboo;
  
    beforeEach(() => {
      graph = new Graph();
      pandora = graph.addVertex('Pandora');
      arendelle = graph.addVertex('Arendelle');
      metroville = graph.addVertex('Metroville');
      monstropolis = graph.addVertex('Monstropolis');
      narnia = graph.addVertex('Narnia');
      naboo = graph.addVertex('Naboo');
  
      graph.addEdge(pandora, arendelle);
      graph.addEdge(arendelle, metroville);
      graph.addEdge(arendelle, monstropolis);
      graph.addEdge(metroville, monstropolis);
      graph.addEdge(metroville, narnia);
      graph.addEdge(metroville, naboo);
      graph.addEdge(monstropolis, naboo);
      graph.addEdge(narnia, naboo);
    });
  
    it('should return the correct breadth-first traversal order starting from Pandora', () => {
      const bfsResult = graph.breadthFirst(pandora);
      expect(bfsResult).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Narnia', 'Naboo']);
    });
      
  
    // it('should throw an error for a non-existent start node', () => {
    //   const nonExistentNode = new Vertex('Atlantis');
    //   expect(() => graph.breadthFirst(nonExistentNode)).toThrowError('Start node does not exist in the graph.');
    // });
  
    beforeEach(() => {
      emptyGraph = new Graph();
    });
    it('should return an empty array for an empty graph', () => {
      const emptyGraph = new Graph();
      const startNode = emptyGraph.addVertex('Start');
      const bfsResult = emptyGraph.breadthFirst(startNode);
      expect(bfsResult).toHaveLength(1);
    });
    
    it('should handle a graph with a single node', () => {
      const singleNodeGraph = new Graph();
      const startNode = singleNodeGraph.addVertex('Single');
      const bfsResult = singleNodeGraph.breadthFirst(startNode);
      expect(bfsResult).toEqual(['Single']);
    });
    
    it('should handle a graph with no edges', () => {
      const noEdgesGraph = new Graph();
      const node1 = noEdgesGraph.addVertex('Node1');
      const node2 = noEdgesGraph.addVertex('Node2');
      const bfsResult = noEdgesGraph.breadthFirst(node1);
      expect(bfsResult).toEqual(['Node1']);
    });
    
    it('should handle a disconnected graph', () => {
      const disconnectedGraph = new Graph();
      const node1 = disconnectedGraph.addVertex('Node1');
      const node2 = disconnectedGraph.addVertex('Node2');
      const node3 = disconnectedGraph.addVertex('Node3');
      const bfsResult = disconnectedGraph.breadthFirst(node1);
      expect(bfsResult).toEqual(['Node1']);
    });
    
    it('should return the correct order when there is only one path', () => {
      const singlePathGraph = new Graph();
      const node1 = singlePathGraph.addVertex('Node1');
      const node2 = singlePathGraph.addVertex('Node2');
      const node3 = singlePathGraph.addVertex('Node3');
      singlePathGraph.addEdge(node1, node2);
      singlePathGraph.addEdge(node2, node3);
      const bfsResult = singlePathGraph.breadthFirst(node1);
      expect(bfsResult).toEqual(['Node1', 'Node2', 'Node3']);
    });
    
    it('should return the correct order when there are multiple paths', () => {
      const multiPathGraph = new Graph();
      const node1 = multiPathGraph.addVertex('Node1');
      const node2 = multiPathGraph.addVertex('Node2');
      const node3 = multiPathGraph.addVertex('Node3');
      multiPathGraph.addEdge(node1, node2);
      multiPathGraph.addEdge(node1, node3);
      multiPathGraph.addEdge(node3, node2);
      const bfsResult = multiPathGraph.breadthFirst(node1);
      expect(bfsResult).toEqual(['Node1', 'Node2', 'Node3']);
    });
    });
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const businessTrip = require('./graph-business-trip/graph-breadth-first'); 

describe('businessTrip function', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
    });

    it('should return the cost of a valid trip with direct flights', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        
        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);

        expect(businessTrip(graph, ['City A', 'City B', 'City C'])).toEqual(125);
    });

    it('should return null for an invalid trip with a missing city', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');

        graph.addEdge(cityA, cityB, 50);

        expect(businessTrip(graph, ['City A', 'City E'])).toBeNull();
    });

    it('should return null for an invalid trip with no direct flight', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityC, cityB, 75);

        expect(businessTrip(graph, ['City A', 'City C', 'City D'])).toBeNull();
    });

    it('should handle a different graph and return the cost of a valid trip with direct flights', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City A', 'City B', 'City C'])).toEqual(125);
    });

    it('should handle a different graph and return the cost of a valid trip with a different order of cities', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City C', 'City B', 'City A'])).toEqual(125);
    });

    it('should handle a different graph and return null for an invalid trip with a missing city', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City A', 'City E'])).toBeNull();
    });

    it('should handle a different graph and return null for an invalid trip with no direct flight', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City A', 'City C', 'City E'])).toBeNull();
    });

    it('should handle a different graph and return the cost of a valid trip with multiple direct flights', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City A', 'City B', 'City C', 'City D'])).toEqual(225);
    });

    it('should handle a different graph and return the cost of a valid trip with a direct flight between the first and last city', () => {
        const cityA = graph.addVertex('City A');
        const cityB = graph.addVertex('City B');
        const cityC = graph.addVertex('City C');
        const cityD = graph.addVertex('City D');
        const cityE = graph.addVertex('City E');

        graph.addEdge(cityA, cityB, 50);
        graph.addEdge(cityB, cityC, 75);
        graph.addEdge(cityC, cityD, 100);
        graph.addEdge(cityA, cityD, 200);

        expect(businessTrip(graph, ['City A', 'City D'])).toEqual(200);
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
describe('depth first', () => {
    let myGraph;
  
    beforeEach(() => {
      myGraph = new Graph();
    });

it('should perform depth-first traversal starting from a node', () => {
    const vertexA = myGraph.addVertex('A');
    const vertexB = myGraph.addVertex('B');
    const vertexC = myGraph.addVertex('C');
    const vertexD = myGraph.addVertex('D');
    const vertexE = myGraph.addVertex('E');
    const vertexF = myGraph.addVertex('F');

    myGraph.addEdge(vertexA, vertexB);
    myGraph.addEdge(vertexA, vertexC);
    myGraph.addEdge(vertexB, vertexD);
    myGraph.addEdge(vertexB, vertexE);
    myGraph.addEdge(vertexC, vertexF);

    const result = myGraph.depthFirst(vertexA);
    const expected = ['A', 'B', 'D', 'E', 'C', 'F'];

    expect(result).toEqual(expected);
  });

  it('should throw an error for non-existent start node', () => {
    expect(() => myGraph.depthFirst('NonExistentNode')).toThrowError(
      'Start node does not exist in the graph.'
    );
  });});
