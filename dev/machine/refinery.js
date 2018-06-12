//коллбек ICore
ModAPI.addAPICallback("ICore", function(api){
	//регистрируем ид блока
	IDRegistry.genBlockID("refinery");
	//сам блок
	Block.createBlockWithRotation("refinery", [{name: Translation.translate("Refinery"), texture: [["machine", 1], ["topRefinery", 1], ["sideRefinery", 1], ["frontRefinery", 1], ["sideRefinery", 1], ["sideRefinery", 1]], inCreative: true, destroytime: 21, explosionres: 25}]);
	//ставим модели
	api.Render.setStandartModel(BlockID.refinery, [["machine", 1], ["topRefinery", 1], ["sideRefinery", 1], ["frontRefinery", 1], ["sideRefinery", 1], ["sideRefinery", 1]], true);
	api.Render.registerRenderModel(BlockID.refinery,  [["machine", 1], ["topRefinery", 1], ["sideRefinery", 1], ["frontRefinery", 1], ["sideRefinery", 1], ["sideRefinery", 1]], true);
	//регаем дроп
	Block.registerDropFunction("refinery", function(coords, blockID, blockData, level){
		return api.Machine.getMachineDrop(coords, blockID, level, BlockID.refinery);
	});
	//GUI центрифуги
	var guiRefinery = new UI.StandartWindow({
    	standart: {
       		header: {
				text: {
					text: Translation.translate("Refinery")
				}
			},
       		inventory: {
				standart: true
	  	    },
       		background: {
				standart: true
			}
   		},
   	    drawing: [{
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
	var progress = 0;
	//прототип деконструктора
	api.Machine.registerPrototype(BlockID.refinery, {
		//обычные значения
		defaultValues: {
			energy_storage: 6100,
			energy_consumption: 91,
			work_time: 20,
			isActive: false,
			progress: 0
  	  	},
		//GUI
		getGuiScreen: function(){
			return guiRefinery;
		},
		//Слоты для транспорта
		getTransportSlots: function(){
			return {
				input: ["slotSource1"], 
				output: ["slotSource2"]
			};
		},
		setDefaultValues: function(){
			this.data.energy_storage = this.defaultValues.energy_storage;
			this.data.energy_consumption = this.defaultValues.energy_consumption;
			this.data.work_time = this.defaultValues.work_time;
		},
		tick: function(){
			//лимит для всех жидкостей
			this.liquidStorage.setLimit("oil", 8);
			this.liquidStorage.setLimit("fuel", 8);
			this.setDefaultValues();
			//UpgradeAPI.executeUpgades("tick", this);
			if(this.liquidStorage.getAmount("oil") <= 7 && 
			   this.container.getSlot("slotSource1").id == ItemID.oilBucket){
				this.liquidStorage.addLiquid("oil", 1);
				this.container.setScale("liquidScale1", this.liquidStorage.getRelativeAmount("oil"));
				this.liquidStorage.updateUiScale("liquidScale1", "oil", this.container);
				this.container.setSlot("slotSource1", 325, 1, 0);
				this.container.validateAll();
			}
        	if(this.liquidStorage.getAmount("oil") >= 1 && this.liquidStorage.getAmount("fuel") <= 7){
				if(this.data.energy >= this.data.energy_consumption && progress <= 150){
					this.data.energy -= this.data.energy_consumption;
					progress += 1;
					this.container.setScale("progressScale", progress / 150);
					this.activate();
				}
				else {
					this.deactivate();
				}
			//рецепт
			}
			if(this.liquidStorage.getAmount("oil") >= 1 && this.liquidStorage.getAmount("fuel") <= 7 && progress > 149){
				this.liquidStorage.addLiquid("fuel", this.liquidStorage.getLiquid("oil", 1));
				this.container.setScale("liquidScale1", this.liquidStorage.getRelativeAmount("oil"));
				this.liquidStorage.updateUiScale("liquidScale1", "oil", this.container);
				this.container.setScale("liquidScale2", this.liquidStorage.getRelativeAmount("fuel"));
				this.liquidStorage.updateUiScale("liquidScale2", "fuel", this.container);
				this.container.validateAll();
				progress = 0;
				this.container.setScale("progressScale", 0);
			}
        	else {
            	this.data.progress = 0;
            	this.deactivate();
        	}
			if(this.liquidStorage.getAmount("fuel") >= 1){
				if(this.container.getSlot("slotSource2").id == 325){
					this.liquidStorage.getLiquid("fuel", 1);
					this.container.setScale("liquidScale2", this.liquidStorage.getRelativeAmount("fuel"));
					this.liquidStorage.updateUiScale("liquidScale2", "fuel", this.container);
					this.container.clearSlot("slotSource2");
					this.container.setSlot("slotSource2", ItemID.fuelBucket, 1, 0);
					this.container.validateAll();
				}
			}
  	        else {
   		    	this.deactivate();
        	}
			this.data.energy = Math.min(this.data.energy, this.getEnergyStorage());
        	this.data.energy += api.ChargeRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(130, this.getEnergyStorage() - this.data.energy), 0);
        	this.container.setScale("progressScale", this.data.progress);
			this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    	},
    	getEnergyStorage: function(){
        	return this.data.energy_storage;
 	    },
		activate: api.Machine.activateMachine,
		deactivate: api.Machine.deactivateMachine,
		destroy: this.deactivate,
    	energyTick: api.Machine.basicEnergyReceiveFunc,
		click: function(){
			//Game.message(Game.getEngineVersion());
			//Game.message(ModAPI.isModLoaded("IndustrialCraft PE"));
			//for(var key in ModAPI.getModByName("IndustrialCraft PE")){
				//Game.message(key);
			//}
		}
	});
});//frrggg122f
