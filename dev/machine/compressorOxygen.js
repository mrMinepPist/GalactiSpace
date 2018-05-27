IDRegistry.genBlockID("compressorOxygen");
Block.createBlockWithRotation("compressorOxygen", [{name: Translation.translate("Oxygen comressor"), texture: [["machine", 1], ["machine", 1], ["machine", 1], ["compressorOxygen", 1], ["machine", 1], ["machine", 1]], inCreative: true, destroytime: 21, explosionres: 25}]);
Block.registerDropFunction("compressorOxygen", function(coords, id, data, diggingLevel, toolLevel){
	if(toolLevel > 1){
		return [[BlockID.machineBlockBasic, 1, 0]];
	}
});
var guicompressorOxygen = new UI.StandartWindow({
    standart: {
       	header: {
			text: {
				text: Translation.translate("Oxygen comressor")
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
		"liquidScale": {
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
            y: 160,
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
TileEntity.registerPrototype(BlockID.compressorOxygen, {
     defaultValues: {
     },

     tick: function(){
		 if(this.liquidStorage.getAmount("oxygen") < 5){
			 this.liquidStorage.addLiquid("oxygen", 1);
			 this.container.setScale("liquidScale", this.liquidStorage.getAmount("oxygen"));
			 this.liquidStorage.updateUiScale("liquidScale", "oxygen", this.container);
		 }
		 if(this.liquidStorage.getAmount("oxygen") >= 0.3){
			 if(this.container.getSlot("slotResult").id == ItemID.oxygenbigTank){
				 if(this.container.getSlot("slotResult").data <= 2575){
					for(var i = 0; i<5; i++){
			     		this.container.getSlot("slotResult").data = this.container.getSlot("slotResult").data + 25;
					}
				}
			}
			if(this.container.getSlot("slotResult").id == ItemID.oxygenmedTank){
				 if(this.container.getSlot("slotResult").data <= 1675){
					for(var i = 0; i<5; i++){
			     		this.container.getSlot("slotResult").data = this.container.getSlot("slotResult").data + 25;
					}
				}
			}
			if(this.container.getSlot("slotResult").id == ItemID.oxygensmallTank){
				 if(this.container.getSlot("slotResult").data <= 775){
					for(var i = 0; i<5; i++){
			     		this.container.getSlot("slotResult").data = this.container.getSlot("slotResult").data + 25;
					}
				}
			}
		 }
     },
     click: function(id, count, data, coords){
     },
     getGuiScreen: function(){
          return guicompressorOxygen; 
     }
});
