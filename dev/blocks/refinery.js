IDRegistry.genBlockID("refinery");
Block.createBlockWithRotation("refinery", [{name: "Refinery", texture: [["machine", 1], ["topRefinery", 1], ["sideRefinery", 1], ["frontRefinery", 1], ["sideRefinery", 1], ["sideRefinery", 1]], inCreative: true, destroytime: 21, explosionres: 25}]);
Block.registerDropFunction("refinery", function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel > 1){
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
		"liquidScale1": {
            type: "scale",
            x: 441,
            y: 105,
            direction: 1,
            value: 0,
            bitmap: "gui_liquid_storage_overlay",
            scale: 3.2
        },
		"liquidScale2": {
            type: "scale",
            x: 641,
            y: 105,
            direction: 1,
            value: 0,
            bitmap: "gui_liquid_storage_overlay",
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
     },

     tick: function(){
		if(this.container.getSlot("slotSource1").id == ItemID.oilBucket){
			this.liquidStorage.addLiquid("oil", 1);
			this.container.clearSlot("slotSource1");
			this.container.setSlot("slotSource1", 325, 1, 0);
			this.container.setScale("liquidScale1", 1);
			this.liquidStorage.updateUiScale("liquidScale1", "oil", this.container);
		}
		if(this.liquidStorage.getAmount("oil") == 1){
			this.liquidStorage.getLiquid("oil", 1);
			this.liquidStorage.addLiquid("fuel", 1);
			this.container.setScale("liquidScale1", 0);
			this.container.setScale("liquidScale2", 1);
			this.liquidStorage.updateUiScale("liquidScale2", "fuel", this.container);
		}
		if(this.container.getSlot("slotSource2").id == 325){
			this.container.setScale("liquidScale2", 0);
			this.container.clearSlot("slotSource2");
			this.container.setSlot("slotSource2", ItemID.fuelBucket, 1, 0);
		}
     },
     click: function(id, count, data, coords){
     },
     getGuiScreen: function(){
          return guiRefinery; 
     }
});//frrggg122f
