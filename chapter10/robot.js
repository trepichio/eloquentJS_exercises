'use strict'
const roads = [
	"Alice's House-Bob's House", "Alice's House-Cabin",
	"Alice's House-Post Office", "Bob's House-Town Hall",
	"Daria's House-Ernie's House", "Daria's House-Town Hall",
	"Ernie's House-Grete's House", "Grete's House-Farm",
	"Grete's House-Shop", "Marketplace-Farm",
	"Marketplace-Post Office", "Marketplace-Shop",
	"Marketplace-Town Hall", "Shop-Town Hall"
];

// console.log(roads);

function buildGraph (edges) {
	let graph = Object.create(null);
	function addEdge (from, to) {
		if (graph[from] == null) {
			graph[from] = [to];
		}
		else
		{
			graph[from].push(to);
		}
	}
	for (let [from, to] of edges.map(r => r.split("-"))) {
		addEdge(from, to);	
		addEdge(to, from);	
	} 
	return graph;
}

const roadGraph = buildGraph(roads);
// console.log(roadGraph);

class VillageState {
	constructor(place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}

	move(destination) {
		if (!roadGraph[this.place].includes(destination)) {
			return this;
		}
		else
		{
			let parcels = this.parcels.map(p => {
				if (p.place != this.place) return p;
				return {place: destination, address: p.address};
			}).filter(p => p.place != p.address);
			return new VillageState(destination, parcels);
		}
	}
}

let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);
// console.log(first);
let next = first.move("Alice's House");
// console.log(next);

function runRobot (state, robot, memory) {
	for (let turn = 0;; turn++) {
		if (state.parcels.length === 0) {
			console.log(`Done in ${turn} turns`);
			break;
			// return turn;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(`Moved to ${action.direction}`);
	}
}

function randomPick (array) {
	let choice = Math.floor(Math.random() * array.length);
	return array[choice];
}

function randomRobot (state) {
	return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
	let parcels = [];
	for (let i = 0; i < parcelCount; i++) {
		let address = randomPick(Object.keys(roadGraph));
		let place;
		do {
			place = randomPick(Object.keys(roadGraph));
		} while (place === address);
		parcels.push({place, address});
	}
	return new VillageState("Post Office", parcels);
}

// runRobot(VillageState.random(), randomRobot);

const mailRoute = [
	"Alice's House", "Cabin", "Alice's House", "Bob's House",
	"Town Hall", "Daria's House", "Ernie's House",
	"Grete's House", "Shop", "Grete's House", "Farm",
	"Marketplace", "Post Office"
];

function routeRobot (state, memory) {
	if (memory.length == 0) {
		memory = mailRoute;
	}
	return {direction: memory[0], memory: memory.slice(1)};
}

// runRobot(VillageState.random(), routeRobot, []);

function findRoute (graph, from, to) {
	let work = [{at: from, route: []}];
	for (let i = 0; i < work.length; i++) {
		let {at, route} = work[i];
		for (let place of graph[at]) {
			if (place === to) return route.concat(place);
			if (!work.some(w => w.at == place)) {
				work.push({at: place, route: route.concat(place)});
			}
		} 
	}
}

let route = findRoute(roadGraph, "Alice's House", "Grete's House");
// console.log(route);

function goalOrientedRobot ({place, parcels}, route) {
	if (route.length == 0) {
		let parcel = parcels[0];
		// console.log("parcel: ", parcel)
		if (parcel.place != place) {
			route = findRoute(roadGraph, place, parcel.place);
			console.log("picking route", route);
		}
		else
		{
			route = findRoute(roadGraph, place, parcel.address);
			console.log("delivery route", route);
		}
	}
	return {direction: route[0], memory: route.slice(1)};
}


// runRobot(VillageState.random(), goalOrientedRobot, []);


//////////////////////
// MEASURING ROBOTS //
//////////////////////
function compareRobots (robotA, memoryA, robotB, memoryB) {
	// let turnsA = [], turnsB = [];
	let totalA = 0, totalB = 0;
	for (let i = 0; i < 100; i++) {
		let state = VillageState.random();
		// turnsA.push(runRobot(state, robotA, memoryA));
		// turnsB.push(runRobot(state, robotB, memoryB));

		totalA += countSteps(state,robotA,memoryA);
		totalB += countSteps(state,robotB,memoryB);

	}
	// let avarageA = Math.round(turnsA.reduce((a, b) => a + b ) / turnsA.length);
	// let avarageB = Math.round(turnsB.reduce((a, b) => a + b ) / turnsB.length);

	// console.log(`robotA done in around ${avarageA} per task and robotB done in ${avarageB}` )
	console.log(`robotA done in around ${totalA / 100 } per task and robotB done in ${totalB / 100}` )
}

// compareRobots(goalOrientedRobot, [], yourRobot, []);

function countSteps (state, robot, memory) {
	for (let steps = 0;; steps++) {
		if (state.parcels.length == 0) {
			return steps;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
	}
}

function yourRobot ({place, parcels}, route) {
	if (route.length == 0) {
		// DESCRIBE A ROUTE FOR EVERY PARCEL
		let routes = parcels.map(parcel => {
			if (parcel.place != place) {
				return {route: findRoute(roadGraph, place, parcel.place), pickup: true}
			}
			else
			{
				return {route: findRoute(roadGraph, place, parcel.address), pickup: false}
			}
		});

	// This determines the precedence a route gets when choosing.
    // Route length counts negatively, routes that pick up a package
    // get a small bonus.
		function score ({route, pickup}) {
			return (pickup ? 0.5 : 0) - route.length;
		}
		route = routes.reduce((a,b) => score(a) > score(b) ? a : b ).route;
	}
	return {direction: route[0], memory: route.slice(1)};
}

runRobot(VillageState.random(), yourRobot, []);

