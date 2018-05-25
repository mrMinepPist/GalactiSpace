/*   ____                                        _______ ________ ▪  _______  ________   __   __  ________
    /    \        /\      |             /\      /            |    | /        /        \ |  \_/   |
   /      \      /  \     |            /  \     |            |    | |        |        | |        |
   |    ___     /    \    |           /    \    |            |    | |        |        | |        |________
   |       \   /______\   |          /______\   |            |    | |        |        | |        |
   \       |  /        \  |         /        \  |            |    | |        |        | |        |
    \______/ /          \ |_______ /          \ \_______     |    | \_______ \________/ |        |________
*/
//импортируем библиотеку измерений
IMPORT("dimensions");
//переменные, нужны моду
var GUI_BAR_STANDART_SCALE = 3.2;
var colours=["black", "blue", "brown", "lime", "magenta", "gray", "red", "yellow", "teal", "pink", "plain", "purple", "orange", "darkblue", "darkgreen", "darkgray"];
var colours1=["black", "blue", "brown", "lime", "magenta", "gray", "red", "yellow", "teal", "pink", "purple", "orange", "darkblue", "darkgreen", "darkgray"];
var matMet=["ingot", "plate", "dust"];
var matunMet=["plate", "dust"];
var inst =["sword", "pickaxe", "axe", "shovel", "hoe"];
//методы, нужные моду
var parachuteRegistry = function(){
	for(var row = 0; row < colours.length; row++){
		IDRegistry.genItemID(colours[row]+"Parachute"); 
        Item.createItem(colours[row]+"Parachute", colours[row]+" Parachute", {name: colours[row]+"Parachute", meta: 1}, {});
	}
};
var registryMaterial = function(namemat, typemat) {
	if(typemat == "METAL"){
		for(var row=0; row<matMet.length; row++){
			IDRegistry.genItemID(matMet[row]+namemat); 
            Item.createItem(matMet[row]+namemat, namemat+" "+matMet[row], {name: matMet[row]+namemat, meta: 1}, {});
		}
		IDRegistry.genBlockID("block" + namemat); 
        Block.createBlock("block" + namemat, [{name: namemat + " block", texture: [["block" + namemat, 1]], inCreative: true}]);
		IDRegistry.genBlockID("ore" + namemat); 
        Block.createBlock("ore" + namemat, [{name: namemat + " ore", texture: [["ore" + namemat, 1]], inCreative: true}]);
	}
	if(typemat == "METAL__alloy"){
		for(var row=0; row<matMet.length; row++){
			IDRegistry.genItemID(matMet[row]+namemat); 
            Item.createItem(matMet[row]+namemat, namemat+" "+matMet[row], {name: matMet[row]+namemat, meta: 1}, {});
		}
	}
	if(typemat == "UNMETAL"){
		for(var row=0; row<matunMet.length; row++){
			IDRegistry.genItemID(matunMet[row]+namemat); 
            Item.createItem(matunMet[row]+namemat, namemat+" "+matunMet[row], {name: matunMet[row]+namemat, meta: 1}, {});
		}
		IDRegistry.genItemID(namemat); 
        Item.createItem(namemat, namemat, {name: namemat, meta: 1}, {});
		IDRegistry.genBlockID("block" + namemat); 
        Block.createBlock("block" + namemat, [{name:namemat + " block", texture: [["block" + namemat, 1]], inCreative: true}]);
	}
};
var registryInstruments = function(namemat, idIngot){
	for(var row = 0; row < inst.length; row++){
		IDRegistry.genItemID(inst[row]+ namemat); 
        Item.createItem(inst[row]+namemat, inst[row]+" "+namemat, {name: inst[row]+namemat, meta: 1}, {toolRender: true, stack: 1});
	}
};
var registryMaterialwithOtherOre = function(namemat, typemat, orename) {
	if(typemat == "METAL"){
		for(var row=0; row<matMet.length; row++){
			IDRegistry.genItemID(matMet[row]+namemat); 
            Item.createItem(matMet[row]+namemat, namemat+" "+matMet[row], {name: matMet[row]+namemat, meta: 1}, {});
		}
		IDRegistry.genBlockID("block" + namemat); 
        Block.createBlock("block" + namemat, [{name: namemat + " block", texture: [["block" + namemat, 1]], inCreative: true}]);
		IDRegistry.genBlockID("ore" + orename); 
        Block.createBlock("ore" + orename, [{name: orename + " ore", texture: [["ore" + orename, 1]], inCreative: true}]);
	}
};
var registryMaterialwithoutOre = function(namemat, typemat) {
	if(typemat == "METAL"){
		for(var row=0; row<matMet.length; row++){
			IDRegistry.genItemID(matMet[row]+namemat); 
            Item.createItem(matMet[row]+namemat, namemat+" "+matMet[row], {name: matMet[row]+namemat, meta: 1}, {});
		}
	}
};
//рандом
var random = function(min, max) {
    var floor = Math.floor(Math.random() * max) + min;
	if(floor > max){
		floor=floor-min;
		return floor;
	}
	return floor;
};
