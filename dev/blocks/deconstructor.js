IDRegistry.genBlockID("deconstructor");
Block.createBlockWithRotation("deconstructor", [{name: "Deconstructor", texture: [["machine", 1], ["machine", 1], ["machine", 1], ["deconstructor", 1], ["machine", 1], ["machine", 1]], inCreative: true, destroytime: 21, explosionres: 25}]);
Block.registerDropFunction("deconstructor", function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel > 1){
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
     },

     tick: function(){
		 tickMath = Math.random();
		 if(this.container.getSlot("slotSource").id == ItemID.rocket_item1){
		 	this.container.clearSlot("slotSource");
			this.container.setSlot("slotResult1", ItemID.dutyHeavy1, 2, 0);
			if(tickMath < 0.6) this.container.setSlot("slotResult1", ItemID.dutyHeavy1, 5, 0);
			if(tickMath  > 0.71) this.container.setSlot("slotResult1", ItemID.dutyHeavy1, 4, 0);
			if(tickMath  > 0.9) this.container.setSlot("slotResult1", ItemID.dutyHeavy1, 7, 0);
			if(tickMath  > 0.9991) this.container.setSlot("slotResult1", ItemID.dutyHeavy1, 8, 0);
			if(tickMath  < 0.71) this.container.setSlot("slotResult2", ItemID.engine, 1, 0);
			if(tickMath  > 0.2) this.container.setSlot("slotResult3", ItemID.plateIron, 2, 0);
			if(tickMath  < 0.11) this.container.setSlot("slotResult3", ItemID.plateBronze, 3, 0);
			if(tickMath  < 0.14) this.container.setSlot("slotResult4", ItemID.dutyHeavy1, 2, 0);
	     }
     },
     click: function(id, count, data, coords){
     },
     getGuiScreen: function(){
          return guideconstructor; 
     }
});
