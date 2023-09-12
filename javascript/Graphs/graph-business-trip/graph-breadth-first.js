const { Graph } = require('../Graphs'); 

function businessTrip(graph, cities) {
    if (!graph instanceof Graph || !Array.isArray(cities) || cities.length < 2) {
        return null; 
    }

    let totalCost = 0;

    for (let i = 0; i < cities.length - 1; i++) {
        const currentCity = cities[i];
        const nextCity = cities[i + 1];
        const currentVertex = graph.getVertices().find((vertex) => vertex.value === currentCity);

        if (!currentVertex) {
            return null; 
        }

        const neighborEdge = graph.getNeighbors(currentVertex).find(
            (edge) => edge.vertex.value === nextCity
        );

        if (!neighborEdge) {
            return null; 
        }

        totalCost += neighborEdge.weight;
    }

    return totalCost;
}



module.exports = businessTrip;