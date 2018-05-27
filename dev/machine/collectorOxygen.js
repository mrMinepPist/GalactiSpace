IDRegistry.genBlockID("collectorOxygen");
Block.createBlockWithRotation("collectorOxygen", [{name: Translation.translate("Oxygen collector"), texture: [["machine", 1], ["collector", 1], ["machine", 1], ["collector", 1], ["machine", 1], ["machine", 1]], inCreative: true, destroytime: 21, explosionres: 25}]);
Block.registerDropFunction("collectorOxygen", function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel > 1){
		return [[BlockID.machineBlockBasic, 1, 0]];
	}
});
var oxygenCollectorGUI = new UI.StandartWindow({
    standart: {
       	header: {
			text: {
				text: Translation.translate("Oxygen collector")
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
		"slotResult": {
            type: "slot",
            x: 641,
            y: 171
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
TileEntity.registerPrototype(BlockID.collectorOxygen, {
     defaultValues: {
     },

     tick: function(){
	     this.container.setScale("liquidScale", 0.1);
     },
     click: function(id, count, data, coords){
     },
     getGuiScreen: function(){
          return oxygenCollectorGUI; 
     }
});
