/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 20
*/



// file: api.js

/*   ____                                        _______ ________ ▪  _______  ________   __   __  ________
    /    \        /\      |             /\      /            |    | /        /        \ |  \_/   |
   /      \      /  \     |            /  \     |            |    | |        |        | |        |
   |    ___     /    \    |           /    \    |            |    | |        |        | |        |________
   |       \   /______\   |          /______\   |            |    | |        |        | |        |
   \       |  /        \  |         /        \  |            |    | |        |        | |        |
    \______/ /          \ |_______ /          \ \_______     |    | \_______ \________/ |        |________
*/
var GUI_BAR_STANDART_SCALE = 3.2;
var colours=["black", "blue", "brown", "lime", "magenta", "gray", "red", "yellow", "teal", "pink", "plain", "purple", "orange", "darkblue", "darkgreen", "darkgray"];
var colours1=["black", "blue", "brown", "lime", "magenta", "gray", "red", "yellow", "teal", "pink", "purple", "orange", "darkblue", "darkgreen", "darkgray"];
var matMet=["ingot", "plate", "dust"];
var matunMet=["plate", "dust"];
var inst =["sword", "pickaxe", "axe", "shovel", "hoe"];
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
var random = function(min, max) {
    var floor = Math.floor(Math.random() * max) + min;
	if(floor > max){
		floor=floor-min;
		return floor;
	}
	return floor;
};




// file: blocks/transport.js





// file: blocks/blocks.js

IDRegistry.genBlockID("glassTin");
Block.createBlock("glassTin", [{name: "Tin glass", texture: [["glassTin", 1]], inCreative: true}]);
IDRegistry.genBlockID("glassClear");
Block.createBlock("glassClear", [{name: "Clear glass", texture: [["glassClear", 1]], inCreative: true}]);
IDRegistry.genBlockID("glassSapphire");
Block.createBlock("glassSapphire", [{name: "Sapphire glass", texture: [["glassSapphire", 1]], inCreative: true}]);




// file: core/materials.js

registryMaterial("BatteryAlloy", "METAL__alloy");
registryMaterial("RedAlloy", "METAL__alloy");
registryMaterial("Sapphire", "UNMETAL");
registryMaterial("Silicon", "METAL");
registryMaterial("Aluminium", "METAL");
registryMaterialwithoutOre("Antimony", "METAL");




// file: dimensions/moon.js

IMPORT("dimensions");
IDRegistry.genBlockID("turfMoon");
Block.createBlock("turfMoon", [{name: "Moon tutf", texture: [["turfMoon", 1]], inCreative: true}]);
IDRegistry.genBlockID("stoneMoon");
Block.createBlock("stoneMoon", [{name: "Moon stone", texture: [["stoneMoon", 1]], inCreative: true}]);
IDRegistry.genBlockID("dirtMoon");
Block.createBlock("dirtMoon", [{name: "Moon dirt", texture: [["dirtMoon", 1]], inCreative: true}]);
var moon = new Dimension({
    name: "moon",
    
    generation: { 
        layers: [{
			 range: [0, 64], 
			 noise: { 
			 	octaves: { 
					count: 4, 
					weight: 0.6, 
					scale: [1, 0.4, 1] 
				} 
			}, 
			gradient: [[0, 0], [-0, 0], [-0, 0], [0, 0], [0, 0], [0, 0]], 
			terrain: { 
				base: BlockID.stoneMoon,
				cover: { 
					height: 4, 
					top: BlockID.turfMoon,
					block: BlockID.dirtMoon
				},
			},
		}],
        decoration: {
        }
    },
    environment: {
		sky: [0, 0.1953125, 0.328125]
    },
    callbacks: {
        tick: function() { 
        },
        generateChunk: function(chunkX, chunkZ) { 
        },
        loaded: function() {
        },
        unloaded: function() {
        }
	}
});
var MoonTransferSequence = new TransferSequence(moon);
MoonTransferSequence.setPortalTimeout(40);
MoonTransferSequence.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});
IDRegistry.genBlockID("dimTp");
Block.createBlock("dimTp", [{name: "Planet teleporter(Creative ONLY)", texture: [["machine", 1]], inCreative: true}]);
Callback.addCallback("DestroyBlock", function (coords, block, player) { 
	if(block.id == BlockID.dimTp){
		if(moon.isInDimension()){
			moon.transferOut();
		} else {
			moon.transferIn();
		}
	}
});




// file: items/Instruments.js






// file: items/liquidStorages.js

IDRegistry.genItemID("copperCanister"); 
Item.createItem("copperCanister", "Copper canister", {name: "copperCanister", meta: 1}, {});
IDRegistry.genItemID("tinCanister"); 
Item.createItem("tinCanister", "Tin canister", {name: "tinCanister", meta: 1}, {});




// file: items/mechanicParts.js

IDRegistry.genItemID("ventAir"); 
Item.createItem("ventAir", "ventAir", {name: "ventAir", meta: 1}, {});
IDRegistry.genItemID("fanAir"); 
Item.createItem("fanAir", "Air fan", {name: "fanAir", meta: 1}, {});
IDRegistry.genItemID("oxygen_concentrator"); 
Item.createItem("oxygen_concentrator", "Oxygen concentrator", {name: "oxygen_concentrator", meta: 1}, {});
IDRegistry.genItemID("canvas"); 
Item.createItem("canvas", "Canvas", {name: "canvas", meta: 1}, {});
IDRegistry.genItemID("poleSteel"); 
Item.createItem("poleSteel", "Steel pole", {name: "poleSteel", meta: 1}, {});
IDRegistry.genItemID("pipeOxygen"); 
Item.createItem("pipeOxygen", "Oxygen pipe", {name: "pipeOxygen", meta: 1}, {});




// file: items/rocketParts.js

IDRegistry.genItemID("dutyHeavy1"); 
Item.createItem("dutyHeavy1", "Heavy duty plate", {name: "dutyHeavy", meta: 1}, {});
IDRegistry.genItemID("noseCone"); 
Item.createItem("noseCone", "Nose cone", {name: "noseCone", meta: 1}, {});
IDRegistry.genItemID("engine");
Item.createItem("engine", "Rocket engine(Tier 1)", {name: "engine", meta: 1}, {});
IDRegistry.genItemID("finsRocket");
Item.createItem("finsRocket", "Rocket fins", {name: "finsRocket", meta: 1}, {});
IDRegistry.genItemID("booster"); 
Item.createItem("booster", "Booster", {name: "booster", meta: 1}, {});




// file: entity/Rocket.js

var mesh = new RenderMesh(__dir__ + "images/models/rocket_t1.obj", "obj", null);
var textureRocket = new Texture("rocket_t1.png");
var render = new Render();
var bodyPart = render.getPart("body");
bodyPart.setMesh(mesh);
var model = new EntityModel();
model.setTexture(textureRocket);
model.setRender(render);
var EntityRocket_t1 = MobRegistry.registerEntity("rocket-t1");
EntityRocket_t1.customizeVisual({ 
	getModels: function() { 
		return { 
			"main": model 
		}; 
	} 
});
IDRegistry.genItemID("rocket_item1");
Item.createItem("rocket_item1", "Rocket", {name: "rocket_t1", meta: 1}, {});
Item.registerUseFunctionForID(ItemID.rocket_item1, function(coords, item, block) { 
	coords = coords.relative; 
	Entity.spawnCustom("rocket-t1", coords.x + .5, coords.y, coords.z + .5); 
});




// file: entity/mobSpider.js

var spider_texture = new Texture("spider.png"); // создадим объект текстуры
var spider_model = new EntityModel(); // создаем модель нашему паучку
spider_model.setTexture(spider_texture);// устанавливаем паучку текстуру // создаем анимацию модели: она будет содержать 16 кадров, каждый из которых будет занимать 0.5 тика (1 цикл = 1 взмах крыльев = 8 тиков) 
var entitySpider = MobRegistry.registerEntity("spiderEvolved"); // создаем моба - паучка
entitySpider.customizeVisual({ // задаем нашу модель как основную (будет установлена при старте) 
    getModels: function() {
        return {
            "main": spider_model
        };
    }
});
Item.registerUseFunctionForID(280, function(coords, item, block) {
    coords = coords.relative;
    Entity.spawnCustom("spiderEvolved", coords.x + .5, coords.y + .5, coords.z + .5);
});




// file: items/armour.js

IDRegistry.genItemID("basicFrecuencemodule"); 
Item.createItem("basicFrecuencemodule", "Basic frequency module", {name: "basicFrecuencemodule", meta: 1}, {});
IDRegistry.genItemID("oxygenbigTank"); 
Item.createItem("oxygenbigTank", "Big oxygen tank", {name: "oxygenbigTank", meta: 1}, {});
IDRegistry.genItemID("oxygenmedTank"); 
Item.createItem("oxygenmedTank", "Medium oxygen tank", {name: "oxygenmedTank", meta: 1}, {});
IDRegistry.genItemID("oxygensmallTank"); 
Item.createItem("oxygensmallTank", "Small oxygen tank", {name: "oxygensmallTank", meta: 1}, {});
IDRegistry.genItemID("maskOxygen"); 
Item.createItem("maskOxygen", "Oxygen mask", {name: "maskOxygen", meta: 1}, {});
IDRegistry.genItemID("gearOxygen"); 
Item.createItem("gearOxygen", "Oxygen gear", {name: "gearOxygen", meta: 1}, {});
parachuteRegistry();





// file: blocks/machine.js

IDRegistry.genBlockID("fabricatorCircuit");
Block.createBlockWithRotation("fabricatorCircuit", [{name: "Circuit fabricator", texture: [["machine", 1], ["machine", 1], ["machine", 1], ["fabricatorCircuit", 1], ["machine", 1], ["machine", 1]], inCreative: true}]);
IDRegistry.genBlockID("decompressorOxygen");
Block.createBlockWithRotation("decompressorOxygen", [{name: "Oxygen decompressor", texture: [["machine", 1], ["machine", 1], ["backcompressorOxygen", 1], ["decompressorOxygen", 1], ["machine", 1], ["machine", 1]], inCreative: true}]);
IDRegistry.genItemID("workbenchRocketItem"); 
Item.createItem("workbenchRocketItem", "NASA workbench", {name: "workbenchRocket", meta: 1}, {});
IDRegistry.genBlockID("workbenchRocket");
Block.createBlockWithRotation("workbenchRocket", [{name: "NASA workbench", texture: [["machine", 1]],inCreative: true}]);
IDRegistry.genBlockID("collectorOxygen");
Block.createBlockWithRotation("collectorOxygen", [{name: "Oxygen collector", texture: [["machine", 1], ["collector", 1], ["machine", 1], ["collector", 1], ["machine", 1], ["machine", 1]], inCreative: true}]);
var mesh = new RenderMesh();
mesh.setBlockTexture("quartz_block_side", 0);
mesh.importFromFile(__dir__ + "images/models/workbench.obj", "obj", null); 
var blockModel = new BlockRenderer.Model(mesh);
var cube = new BlockRenderer.Model([["workbenchSide", 1], ["workbenchTop", 1], ["workbenchSide", 1]]);
var icRenderModel = new ICRender.Model();
icRenderModel.addEntry(blockModel);
icRenderModel.addEntry(cube);
BlockRenderer.setStaticICRender(BlockID.workbenchRocket, -1, icRenderModel);
Item.registerUseFunctionForID(ItemID.workbenchRocketItem, function(coords, item, block) { 
	coords = coords.relative; 
	World.setBlock(coords.x - 1, coords.y, coords.z - 1, BlockID.workbenchRocket, 0);
});
ModAPI.addAPICallback("ICore", function(api){
});




// file: blocks/ore/OreGenerator.js

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
	for(var i = 0; i < 14; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 11, 101);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreAluminium, 0, random(5, 16));
	}
	for(var i = 0; i < 6; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 11, 101);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSilicon, 0, random(2, 7));
	}
});




// file: items/wires.js






// file: blocks/refinery.js

IDRegistry.genBlockID("refinery");
Block.createBlockWithRotation("refinery", [{name: "Refinery", texture: [["machine", 1], ["topRefinery", 1], ["sideRefinery", 1], ["frontRefinery", 1], ["sideRefinery", 1], ["sideRefinery", 1]], inCreative: true}]);
Block.registerDropFunction("refinery", function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel >= 2){
		Debug.warning("if block destroy without wrench, drop machine block(basic)");
		return [[BlockID.machineBlockBasic, 1, 0]];
	}
});
var guiRefinery = new UI.StandartWindow({
    standart: {
       	header: {
			text: {
				text: "Refinery"
			}
		},
       	inventory: {
			standart: true
	    },
       	background: {
			standart: true
		}
   	},
    drawing: [
	{
		type: "bitmap", 
		x: 530, 
		y: 171, 
		bitmap: "furnace_bar_background", 
		scale: GUI_BAR_STANDART_SCALE
	},
	{
		type: "bitmap", 
		x: 450, 
		y: 306, 
		bitmap: "energy_small_background", 
		scale: GUI_BAR_STANDART_SCALE
	},
	{
		type: "bitmap", 
		x: 441, 
		y: 105, 
		bitmap: "liquid_background", 
		scale: 3.2
	},
	{
		type: "bitmap", 
		x: 641, 
		y: 105, 
		bitmap: "liquid_background", 
		scale: 3.2
	}],
    elements: {
        "progressScale": {
			type: "scale", 
			x: 530, 
			y: 171, 
			direction: 0, 
			value: 0, 
			bitmap: "furnace_bar_scale", 
			scale: GUI_BAR_STANDART_SCALE
		},
		"liquidScale": {
            type: "scale",
            x: 441,
            y: 105,
            direction: 1,
            value: 0,
            bitmap: "liquid_background_2",
            scale: 3.2
        },
		"liquidScale1": {
            type: "scale",
            x: 641,
            y: 105,
            direction: 1,
            value: 0,
            bitmap: "liquid_background_2",
            scale: 3.2
        },
		"energyScale": {
			type: "scale", 
			x: 450, 
			y: 306, 
			direction: 1, 
			value: 0, 
			bitmap: "energy_small_scale", 
			scale: GUI_BAR_STANDART_SCALE
		},
		"slotEnergy": {
			type: "slot", 
			x: 441, 
			y: 355
		},
		"slotSource1": {
			type: "slot", 
			x: 441, 
			y: 43
		},
		"slotSource2": {
			type: "slot", 
			x: 641, 
			y: 43
		},
		"slotUpgrade1": {
			type: "slot", 
			x: 820, 
			y: 48
		},
		"slotUpgrade2": {
			type: "slot", 
			x: 820, 
			y: 112
		},
		"slotUpgrade3": {
			type: "slot", 
			x: 820, 
			y: 176
		},
		"slotUpgrade4": {
			type: "slot", 
			x: 820, 
			y: 240
		}
   	}
});
TileEntity.registerPrototype(BlockID.refinery, {
     defaultValues: {
          someValue: 0
     },

     tick: function(){
     },
     click: function(id, count, data, coords){
          this.data.someValue = 1;
     },
     getGuiScreen: function(){
          return guiRefinery; 
     }
});




// file: blocks/deconstructor.js

IDRegistry.genBlockID("deconstructor");
Block.createBlockWithRotation("deconstructor", [{name: "Deconstructor", texture: [["machine", 1], ["machine", 1], ["machine", 1], ["deconstructor", 1], ["machine", 1], ["machine", 1]], inCreative: true}]);
Block.registerDropFunction("deconstructor", function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel >= 2){
		Debug.warning("if block destroy without wrench, drop machine block(basic)");
		return [[BlockID.machineBlockBasic, 1, 0]];
	}
});
var guideconstructor = new UI.StandartWindow({
    standart: {
       	header: {
			text: {
				text: "Deconstructor"
			}
		},
       	inventory: {
			standart: true
	    },
       	background: {
			standart: true
		}
   	},
    drawing: [
		{
			type: "bitmap", 
			x: 530, 
			y: 146, 
			bitmap: "furnace_bar_background", 
			scale: GUI_BAR_STANDART_SCALE},
		{
			type: "bitmap", 
			x: 450, 
			y: 210, 
			bitmap: "energy_small_background", 
			scale: GUI_BAR_STANDART_SCALE
		}],
    elements: {
		"progressScale": {
			type: "scale", 
			x: 530, 
			y: 146, 
			direction: 0, 
			value: 0, 
			bitmap: "furnace_bar_scale", 
			scale: GUI_BAR_STANDART_SCALE
		},
		"energyScale": {
			type: "scale", 
			x: 450, 
			y: 210, 
			direction: 1, 
			value: 0, 
			bitmap: "energy_small_scale", 
			scale: GUI_BAR_STANDART_SCALE
		},
		"slotSource": {
			type: "slot", 
			x: 441, 
			y: 142
		},
		"slotEnergy": {
			type: "slot", 
			x: 441, 
			y: 280
		},
		"slotResult1": {
			type: "slot", 
			x: 625, 
			y: /*142*/ 118
		},
		"slotResult2": {
			type: "slot", 
			x: 625, 
			y: /*142*/ 175
		},
		"slotResult3": {
			type: "slot", 
			x: 684, 
			y: /*142*/ 118
		},
		"slotResult4": {
			type: "slot", 
			x: 743, 
			y: /*142*/ 175
		},
		"slotResult5": {
			type: "slot", 
			x: 743, 
			y: /*142*/ 118
		},
		"slotResult6": {
			type: "slot", 
			x: 684, 
			y: /*142*/ 175
		},
		"slotUpgrade1": {
			type: "slot", 
			x: 820, 
			y: 48
		},
		"slotUpgrade2": {
			type: "slot", 
			x: 820, 
			y: 112
		},
		"slotUpgrade3": {
			type: "slot", 
			x: 820, 
			y: 176
		},
		"slotUpgrade4": {
			type: "slot", 
			x: 820, 
			y: 240
		}
   	}
});
TileEntity.registerPrototype(BlockID.deconstructor, {
     defaultValues: {
          someValue: 0
     },

     tick: function(){
     },
     click: function(id, count, data, coords){
          this.data.someValue = 1;
     },
     getGuiScreen: function(){
          return guideconstructor; 
     }
});




// file: blocks/compressorOxygen.js

IDRegistry.genBlockID("compressorOxygen");
Block.createBlockWithRotation("compressorOxygen", [{name: "Oxygen comressor", texture: [["machine", 1], ["machine", 1], ["machine", 1], ["compressorOxygen", 1], ["machine", 1], ["machine", 1]], inCreative: true}]);
Block.registerDropFunction("compressorOxygen", function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel >= 2){
		Debug.warning("if block destroy without wrench, drop machine block(basic)");
		return [[BlockID.machineBlockBasic, 1, 0]];
	}
});
var guicompressorOxygen = new UI.StandartWindow({
    standart: {
       	header: {
			text: {
				text: "Oxygen compressor"
			}
		},
       	inventory: {
			standart: true
	    },
       	background: {
			standart: true
		}
   	},
    drawing: [
		{
			type: "bitmap", 
			x: 450, 
			y: 210, 
			bitmap: "energy_small_background", 
			scale: GUI_BAR_STANDART_SCALE
		},
		{
			type: "bitmap", 
			x: 441, 
			y: 105, 
			bitmap: "liquid_background", 
			scale: 3.2
    	}],
    elements: {
		"energyScale": {
			type: "scale", 
			x: 510, 
			y: 210, 
			direction: 1, 
			value: 0, 
			bitmap: "energy_small_scale", 
			scale: GUI_BAR_STANDART_SCALE
		},
		"slotEnergy": {
			type: "slot", 
			x: 441, 
			y: 280
		},
		"slotUpgrade1": {
			type: "slot", 
			x: 820, 
			y: 48
		},
		"slotUpgrade2": {
			type: "slot", 
			x: 820, 
			y: 112
		},
		"slotUpgrade3": {
			type: "slot", 
			x: 820, 
			y: 176
		},
		"slotUpgrade4": {
			type: "slot", 
			x: 820, 
			y: 240
		}
   	}
});
TileEntity.registerPrototype(BlockID.compressorOxygen, {
     defaultValues: {
          someValue: 0
     },

     tick: function(){
     },
     click: function(id, count, data, coords){
          this.data.someValue = 1;
     },
     getGuiScreen: function(){
          return guicompressorOxygen; 
     }
});




// file: blocks/collectorOxygen.js

IDRegistry.genBlockID("collectorOxygen");
Block.createBlockWithRotation("collectorOxygen", [{name: "Oxygen collector", texture: [["machine", 1], ["collector", 1], ["machine", 1], ["collector", 1], ["machine", 1], ["machine", 1]], inCreative: true}]);
Block.registerDropFunction("collectorOxygen", function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel >= 2){
		Game.dialogMessage("if block destroy without wrench, drop machine block(basic)");
		return [[BlockID.machineBlockBasic, 1, 0]];
	}
});
var oxygenCollectorGUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Oxygen collector"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        {
			type: "bitmap", 
			x: 441, 
			y: 135, 
			bitmap: "liquid_background", 
			scale: 3.2
		},
		{
			type: "bitmap", 
			x: 530, 
			y: 171, 
			bitmap: "furnace_bar_background", 
			scale: GUI_BAR_STANDART_SCALE
		},
		{
			type: "bitmap", 
			x: 450, 
			y: 210, 
			bitmap: "energy_small_background", 
			scale: GUI_BAR_STANDART_SCALE
	}],
    elements: {
       "liquidScale": {
            type: "scale",
            x: 441,
            y: 105,
            direction: 1,
            value: 0,
            bitmap: "liquid_background_2",
            scale: 3.2
        },
		"energyScale": {
			type: "scale", 
			x: 450, 
			y: 306, 
			direction: 1, 
			value: 0, 
			bitmap: "energy_small_scale", 
			scale: GUI_BAR_STANDART_SCALE
		},
		"slotSource1": {
			type: "slot", 
			x: 441, 
			y: 360
		},
		"slotUpgrade1": {
			type: "slot", 
			x: 820, 
			y: 48
		},
		"slotUpgrade2": {
			type: "slot", 
			x: 820, 
			y: 112
		},
		"slotUpgrade3": {
			type: "slot", 
			x: 820, 
			y: 176
		},
		"slotUpgrade4": {
			type: "slot", 
			x: 820, 
			y: 240
		},
		  "progressScale": {
			type: "scale", 
			x: 530, 
			y: 171, 
			direction: 0, 
			value: 0, 
			bitmap: "furnace_bar_scale", 
			scale: GUI_BAR_STANDART_SCALE
		},
    }
});
TileEntity.registerPrototype(BlockID.collectorOxygen, {
     defaultValues: {
          someValue: 0
     },

     tick: function(){
     },
     click: function(id, count, data, coords){
          this.data.someValue = 1;
     },
     getGuiScreen: function(){
          return oxygenCollectorGUI; 
     }
});




// file: core/recipes.js

Recipes.addShaped({id: ItemID.pipeOxygen, count: 1, data: 0}, [ "xxx", "   ", "xxx" ], ['x', 102, -1]);
Recipes.addShaped({id: ItemID.storageBattery, count: 1, data: 0}, [ " a ", "bcb", "bdb" ], ['a', ItemID.cableTin1, -1, 'b', ItemID.plateBatteryAlloy, -1, 'c', ItemID.dustLead, -1, 'd', 331, -1]);
Recipes.addShaped({id: ItemID.storageBattery, count: 1, data: 0}, [ " a ", "bcb", "bdb" ], ['a', ItemID.cableTin1, -1, 'b', ItemID.plateBatteryAlloy, -1, 'c', 331, -1 ,'d', ItemID.dustLead, -1]);
Recipes.addShaped({id: BlockID.fabricatorCircuit, count: 1, data: 0}, [ "cac", "aba", "aca"], ['a', ItemID.plateCopper, -1, 'b', BlockID.machineBlockBasic, -1, 'c', ItemID.circuitBasic, -1]);
Recipes.addShaped({id: BlockID.refinery, count: 1, data: 0}, [ "aaa", "dbd", "xcx"], ['a', 325, -1, 'b', BlockID.machineBlockBasic, -1, 'c', ItemID.circuitBasic, -1, 'd', ItemID.cableTin1, -1, 'x', ItemID.plateCopper, -1]);
Recipes.addShaped({id: BlockID.deconstructor, count: 1, data: 0}, [ " c ", "bab", "ddd"], ['c', 58, -1, 'a', BlockID.machineBlockBasic, -1, 'b', ItemID.circuitBasic, -1, 'd', ItemID.plateBronze, -1]);
Recipes.addShaped({id: ItemID.ventAir, count: 1, data: 0}, [ "xx", "xy"], ['x', ItemID.plateTin, -1, 'y', ItemID.plateSteel, -1]);
Recipes.addShaped({id: ItemID.fanAir, count: 1, data: 0}, [ "x x", " y ", "xzx"], ['x', ItemID.plateSteel, -1, 'y', ItemID.circuitBasic, -1, 'z', 331, -1]);
Recipes.addShaped({id: ItemID.oxygen_concentrator, count: 1, data: 0}, [ "xzx", "zyz", "xax"], ['x', ItemID.plateSteel, -1, 'y', ItemID.copperCanister, -1, 'z', ItemID.plateTin, -1, 'a', ItemID.ventAir, -1]);
Recipes.addShaped({id: ItemID.canvas, count: 1, data: 0}, [ " xy", "xxx", "yx "], ['x', 287, -1, 'y', 280, -1]);
Recipes.addShaped({id: ItemID.gearOxygen, count: 1, data: 0}, [ " x ", "xyx", "x x"], ['x', ItemID.pipeOxygen, -1, 'y', ItemID.oxygen_concentrator, -1]);
Recipes.addShaped({id: ItemID.maskOxygen, count: 1, data: 0}, [ "xyx", "x x", "x x"], ['x', 20, -1, 'y', 306, -1]);
Recipes.addShaped({id: ItemID.basicFrecuencemodule, count: 1, data: 0}, [ "zzz", "zyz", "xyx"], ['x', 331, -1, 'y', ItemID.circuitBasic, -1, 'z', ItemID.plateAluminium, -1]);
Recipes.addShaped({id: ItemID.oxygenbigTank, count: 1, data: 0}, [ "xxx", "yyy", "zzz"], ['x', 35, 14, 'y', ItemID.tinCanister, -1, 'z', ItemID.plateCopper, -1]);
Recipes.addShaped({id: ItemID.oxygenmedTank, count: 1, data: 0}, [ "xx ", "yy ", "zz "], ['x', 35, 1, 'y', ItemID.tinCanister, -1, 'z', ItemID.plateCopper, -1]);
Recipes.addShaped({id: ItemID.oxygensmallTank, count: 1, data: 0}, [ "x  ", "y  ", "z  "], ['x', 35, 4, 'y', ItemID.tinCanister, -1, 'z', ItemID.plateCopper, -1]);
Recipes.addShaped({id: ItemID.oxygenmedTank, count: 1, data: 0}, [ " xx", " yy", " zz"], ['x', 35, 1, 'y', ItemID.tinCanister, -1, 'z', ItemID.plateCopper, -1]);
Recipes.addShaped({id: ItemID.oxygensmallTank, count: 1, data: 0}, [ " x ", " y ", " z "], ['x', 35, 4, 'y', ItemID.tinCanister, -1, 'z', ItemID.plateCopper, -1]);
Recipes.addShaped({id: ItemID.oxygensmallTank, count: 1, data: 0}, [ "  x", "  y", "  z"], ['x', 35, 4, 'y', ItemID.tinCanister, -1, 'z', ItemID.plateCopper, -1]);
Recipes.addShaped({id: ItemID.engine, count: 1, data: 0}, [ " a ", "xyx", "xzx"], ['x', ItemID.dutyHeavy1, 4, 'y', ItemID.circuitBasic, -1, 'z', ItemID.ventAir, -1, 'a', 259, -1]);
Recipes.addShaped({id: ItemID.noseCone, count: 1, data: 0}, [ " y ", " x ", "x x"], ['x', ItemID.dutyHeavy1, 4, 'y', ItemID.circuitBasic, -1]);
Recipes.addShaped({id: ItemID.finsRocket, count: 1, data: 0}, [ " y ", "xyx", "x x"], ['x', ItemID.dutyHeavy1, 4, 'y', ItemID.plateSteel, -1]);
Recipes.addShaped({id: ItemID.plainParachute, count: 1, data: 0}, [ "yyy", "x x", " x "], ['x', 287, 4, 'y', ItemID.canvas, -1]);
Recipes.addShaped({id: ItemID.blueParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 12, 'y', ItemID.plainParachute, -1]);
Recipes.addShaped({id: ItemID.darkblueParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 4, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.limeParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 10, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.blackParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 0, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.magentaParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 13, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.orangeParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 14, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.redParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 1, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.yelowParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 11, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.grayParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 7, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.tealParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 12, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.brownParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 3, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.darkgreenParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 2, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.pinkParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 9, 'y', ItemID.plainParachute, -1]);
//Recipes.addShaped({id: ItemID.purpleParachute, count: 1, data: 0}, [ "x", "y"], ['x', 351, 5, 'y', ItemID.plainParachute, -1]);
Recipes.addShaped({id: BlockID.collectorOxygen, count: 1, data: 0}, [ "cyc", "axb", "fzf"], ['x', BlockID.machineBlockBasic, -1, 'y', ItemID.circuitBasic, -1, 'z', ItemID.oxygen_concentrator, -1, 'a', ItemID.ventAir, -1, 'b', ItemID.fanAir, -1, 'c', ItemID.plateAluminium, -1, 'f', ItemID.plateTin, -1]);
Recipes.addShaped({id: BlockID.compressorOxygen, count: 1, data: 0}, [ "yyy", "zxz", "aaa"], ['x', BlockID.machineBlockBasic, -1, 'y', ItemID.circuitBasic, -1, 'z', ItemID.oxygen_concentrator, -1, 'a', ItemID.plateBatteryAlloy, -1,]);
Recipes.addShaped({id: BlockID.decompressorOxygen, count: 1, data: 0}, ["yyy", "axa", "yyy"], ['x', BlockID.machineBlockBasic, -1, 'y', ItemID.circuitBasic, -1, 'a', ItemID.ventAir, -1]);





