use u-bus-dev;

var bus1 = {
	busId:"1",
	name:"1号线",
	routers:[
	"从化","太平","钟落潭","广州省汽车站"
	]
}
var bus2 = {
	busId:"2",
	name:"2号线",
	routers:[
	"从化","太平","磨碟沙","广州海珠汽车站"
	]	
}
var bus_location1 = {
	busId:"1",
	location: {},
	station:"钟落潭"
}
var bus_location2 = {
	busId:"1",
	location: {},
	station:"太平"
}
var bus_location3 = {
	busId:"2",
	location: {},
	station:"磨碟沙"
}

db.buses.insert(bus1);
db.buses.insert(bus2);
db.bus_locations.insert(bus_location1);
db.bus_locations.insert(bus_location2);
db.bus_locations.insert(bus_location3);
