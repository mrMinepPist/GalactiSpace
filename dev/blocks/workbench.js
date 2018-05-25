IDRegistry.genItemID("workbenchRocketItem"); 
Item.createItem("workbenchRocketItem", "NASA workbench", {name: "workbenchRocket", meta: 1}, {});
IDRegistry.genBlockID("workbenchRocket");
Block.createBlockWithRotation("workbenchRocket", [{name: "NASA workbench", texture: [["machine", 1]],inCreative: false, destroytime: 21, explosionres: 25}]);
var mesh = new RenderMesh();
mesh.setBlockTexture("machine", 0);
mesh.importFromFile(__dir__ + "images/models/workbench.obj", "obj", null); 
var blockModel = new BlockRenderer.Model(mesh);
var icRenderModel = new ICRender.Model();
icRenderModel.addEntry(blockModel);
BlockRenderer.setStaticICRender(BlockID.workbenchRocket, -1, icRenderModel);
Item.registerUseFunctionForID(ItemID.workbenchRocketItem, function(coords, item, block) { 
	coords = coords.relative; 
	World.setBlock(coords.x, coords.y, coords.z, BlockID.workbenchRocket, 0);
});
var guiworkbench = new UI.StandartWindow({
    standart: {
       	header: {
			text: {
				text: "Workbench"
			}
		},
       	inventory: {
			standart: true
	    },
       	background: {
			standart: true
		}
   	},
    drawing: [],
    elements: {
		"slotSource1": {
			type: "slot", 
			x: 441, 
			y: 450
		},
		"slotSource2": {
			type: "slot", 
			x: 441, 
			y: 386
		},
		"slotSource3": {
			type: "slot", 
			x: 505, 
			y: 386
		},
		"slotSource4": {
			type: "slot", 
			x: 569, 
			y: 386
		},
		"slotSource5": {
			type: "slot", 
			x: 633, 
			y: 386
		},
		"slotSource6": {
			type: "slot", 
			x: 633, 
			y: 450
		},
		"slotSource7": {
			type: "slot", 
			x: 537, 
			y: 450
		},
		"slotSource8": {
			type: "slot", 
			x: 505, 
			y: 322
		},
		"slotSource9": {
			type: "slot", 
			x: 569, 
			y: 322
		},
		"slotSource10": {
			type: "slot", 
			x: 505, 
			y: 258
		},
		"slotSource11": {
			type: "slot", 
			x: 569, 
			y: 258
		},
		"slotSource12": {
			type: "slot", 
			x: 505, 
			y: 194
		},
		"slotSource13": {
			type: "slot", 
			x: 569, 
			y: 194
		},
		"slotSource14": {
			type: "slot", 
			x: 537, 
			y: 130
		},
		"slotResult": {
			type: "slot", 
			x: 685, 
			y: 130
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
TileEntity.registerPrototype(BlockID.workbenchRocket, {
     defaultValues: {
     },
     tick: function(){
		 if(this.container.getSlot("slotSource3").id == ItemID.dutyHeavy1 && 
		 	this.container.getSlot("slotSource4").id == ItemID.dutyHeavy1 && 
			this.container.getSlot("slotSource8").id == ItemID.dutyHeavy1 &&
			this.container.getSlot("slotSource9").id == ItemID.dutyHeavy1 &&
			this.container.getSlot("slotSource10").id == ItemID.dutyHeavy1 &&
			this.container.getSlot("slotSource11").id == ItemID.dutyHeavy1 &&
			this.container.getSlot("slotSource12").id == ItemID.dutyHeavy1 &&
			this.container.getSlot("slotSource13").id == ItemID.dutyHeavy1 &&
			this.container.getSlot("slotSource14").id == ItemID.noseCone &&
			this.container.getSlot("slotSource1").id == ItemID.finsRocket &&
			this.container.getSlot("slotSource2").id == ItemID.finsRocket &&
			this.container.getSlot("slotSource5").id == ItemID.finsRocket &&
			this.container.getSlot("slotSource6").id == ItemID.finsRocket &&
			this.container.getSlot("slotSource7").id == ItemID.engine
		 ){
			this.container.clearSlot("slotSource3");
			this.container.clearSlot("slotSource4");
			this.container.clearSlot("slotSource8");
			this.container.clearSlot("slotSource9");
			this.container.clearSlot("slotSource10");
			this.container.clearSlot("slotSource11");
			this.container.clearSlot("slotSource12");
			this.container.clearSlot("slotSource13");
			this.container.clearSlot("slotSource14");
			this.container.clearSlot("slotSource1");
			this.container.clearSlot("slotSource2");
			this.container.clearSlot("slotSource5");
			this.container.clearSlot("slotSource7");
			this.container.clearSlot("slotSource6");
			this.container.setSlot("slotResult", ItemID.rocket_item1, 1, 0);
		 }
     },
     click: function(id, count, data, coords){
     },
     getGuiScreen: function(){
          return guiworkbench; 
     }
});
