ModAPI.addAPICallback("ICore", function(api){
	IDRegistry.genBlockID("collectorOxygen");
	Block.createBlockWithRotation("collectorOxygen", [{name: Translation.translate("Oxygen collector"), texture: [["machine", 1], ["collector", 1], ["machine", 1], ["collector", 1], ["machine", 1], ["machine", 1]], inCreative: true, destroytime: 21, explosionres: 25}]);
	api.Render.setStandartModel(BlockID.refinery, [["machine", 1], ["topRefinery", 1], ["sideRefinery", 1], ["frontRefinery", 1], ["sideRefinery", 1], ["sideRefinery", 1]], true);
	api.Render.registerRenderModel(BlockID.refinery,  [["machine", 1], ["topRefinery", 1], ["sideRefinery", 1], ["frontRefinery", 1], ["sideRefinery", 1], ["sideRefinery", 1]], true);
	//регаем дроп
	Block.registerDropFunction("refinery", function(coords, blockID, blockData, level){
		return api.Machine.getMachineDrop(coords, blockID, level, BlockID.refinery);
	});
	//GUI сборщика кислорода
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
		drawing: [{
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
			"liquidScale1": {
				type: "scale",
				x: 441,
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
	//прототип деконструктора
	api.Machine.registerPrototype(BlockID.collectorOxygen, {
		//обычные значения
     	defaultValues: {
			energy_storage: 2000,
			energy_consumption: 3,
			work_time: 130,
			progress: 0,
			isActive: false
     	},
	 	//экран GUI
     	getGuiScreen: function(){
          	return oxygenCollectorGUI; 
     	},
	 	//слоты для транспорта
	 	getTransportSlots: function(){
			return {
			 //исходный продукт
			 input: [],
			 //результат
			 output: []
			 };
	 	 },
		 setDefaultValues: function(){
			this.data.energy_storage = this.defaultValues.energy_storage;
			this.data.energy_consumption = this.defaultValues.energy_consumption;
			this.data.work_time = this.defaultValues.work_time;
		 },
		 //такт
		 tick: function(){
			this.setDefaultValues();
			this.liquidStorage.setLimit("oxygen", 10);
			//UpgradeAPI.executeUpgades("tick", this);
			//рецепт
			this.liquidStorage.addLiquid("oxygen", 1);
			this.container.setScale("liquidScale1", this.liquidStorage.getRelativeAmount("oxygen"));
			this.liquidStorage.updateUiScale("liquidScale1", "oxygen", this.container);
			this.data.energy = Math.min(this.data.energy, this.getEnergyStorage());
			this.data.energy += api.ChargeRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(130, this.getEnergyStorage() - this.data.energy), 0);
			this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
		},
		getEnergyStorage: function(){
			return this.data.energy_storage;
		},
		init: api.Machine.initModel,
		activate: api.Machine.activateMachine,
		deactivate: api.Machine.deactivateMachine,
		destroy: this.deactivate,
		energyTick: api.Machine.basicEnergyReceiveFunc,
		click: function(id, count, data, coords){},
	});
});
