//API коллбек для IndustrialCraft PE
ModAPI.addAPICallback("ICore", function(api){
	//создаём блок деконструктора
	IDRegistry.genBlockID("deconstructor");
	Block.createBlockWithRotation("deconstructor", [{name: Translation.translate("Deconstructor"), texture: [["machine", 1], ["machine", 1], ["machine", 1], ["deconstructor", 1], ["machine", 1], ["machine", 1]], inCreative: true, destroytime: 21, explosionres: 25}]);
	api.Render.setStandartModel(BlockID.deconstructor,  [["machine", 1], ["machine", 1], ["machine", 1], ["deconstructor", 1], ["machine", 1], ["machine", 1]], true);
	api.Render.registerRenderModel(BlockID.deconstructor,  [["machine", 1], ["machine", 1], ["machine", 1], ["deconstructor", 1], ["machine", 1], ["machine", 1]], true);
	//регаем функцию дропа
	Block.registerDropFunction("deconstructor", function(coords, blockID, blockData, level){
		return api.Machine.getMachineDrop(coords, blockID, level, BlockID.deconstructor);
	});
	//GUI деконструктора
	var guideconstructor = new UI.StandartWindow({
   		standart: {
       		header: {
				text: {
					text: Translation.translate("Deconstructor")
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
	//прототип деконструктора
	api.Machine.registerPrototype(BlockID.deconstructor, {
		//обычные значения
     	defaultValues: {
			energy_storage: 20000,
			energy_consumption: 1550,
			work_time: 130,
			progress: 0,
			isActive: false
   	  },
	 //экран GUI
     getGuiScreen: function(){
          return guideconstructor; 
     },
	 //слоты для транспорта
	 getTransportSlots: function(){
		return {
			//исходный продукт
			input: ["slotSource"],
			//результат
			output: ["slotResult1", "slotResult2", "slotResult3", "slotResult4", "slotResult5", "slotResult6"]
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
			var tickMath = Math.random();
			//UpgradeAPI.executeUpgades("tick", this);
			if(this.container.getSlot("slotResult1").count < 64 || this.container.getSlot("slotResult1").id == 0){
				if(this.container.getSlot("slotResult2").count < 64 || this.container.getSlot("slotResult2").id == 0){
		    		if(this.container.getSlot("slotResult3").count < 64 || this.container.getSlot("slotResult3").id == 0){
		    			if(this.container.getSlot("slotResult4").count < 64 || this.container.getSlot("slotResult4").id == 0){
		   					if(this.container.getSlot("slotResult5").count < 64 || this.container.getSlot("slotResult5").id == 0){
		   						if(this.container.getSlot("slotResult6").count < 64 || this.container.getSlot("slotResult6").id == 0){
									if(this.data.energy >= this.data.energy_consumption){
										this.data.energy -= this.data.energy_consumption;
										if(this.container.getSlot("slotSource").id == ItemID.RocketItem){
											this.data.progress += 1/this.data.work_time;
										}
										this.activate();
									}
								}
							}
						}
					}
				}
				else{
					this.deactivate();
				}
				//рецепт
				if(this.data.progress >= 1 && 
			   	   this.container.getSlot("slotSource").id == ItemID.RocketItem &&
			       this.container.getSlot("slotSource").count != 0){
			       this.container.getSlot("slotSource").count--;
					if(tickMath < 0.6) {
						this.container.getSlot("slotResult1").id = ItemID.dutyHeavy1;
						this.container.getSlot("slotResult1").data = 0;
						this.container.getSlot("slotResult1").count += 5;
					}
					if(tickMath  > 0.71) {
						this.container.getSlot("slotResult1").id = ItemID.dutyHeavy1;
						this.container.getSlot("slotResult1").data = 0;
						this.container.getSlot("slotResult1").count -= 5;
						this.container.getSlot("slotResult1").count += 4;
					}
					if(tickMath  > 0.9) {
						this.container.getSlot("slotResult1").id = ItemID.dutyHeavy1;
						this.container.getSlot("slotResult1").data = 0;
						this.container.getSlot("slotResult1").count -= 4;
						this.container.getSlot("slotResult1").count += 7;
					}
					if(tickMath  > 0.9976) {
						this.container.getSlot("slotResult1").id = ItemID.dutyHeavy1;
						this.container.getSlot("slotResult1").data = 0;
						this.container.getSlot("slotResult1").count -= 6;
						this.container.getSlot("slotResult1").count += 9;
					}
					if(tickMath  < 0.73) {
						this.container.getSlot("slotResult2").id = ItemID.engine;
						this.container.getSlot("slotResult2").data = 0;
						this.container.getSlot("slotResult2").count += 1;
					}
					if(tickMath  > 0.2) {
						this.container.getSlot("slotResult3").id = ItemID.plateIron;
						this.container.getSlot("slotResult3").data = 0;
						this.container.getSlot("slotResult3").count += 2;
					}
					if(tickMath  < 0.11) {
						this.container.getSlot("slotResult4").id = ItemID.plateBronze;
						this.container.getSlot("slotResult4").data = 0;
						this.container.getSlot("slotResult4").count += 3;
					}
					this.container.validateAll();
					this.data.progress = 0;
				}
			}
			else {
				this.data.progress = 0;
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
		init: api.Machine.initModel,
		activate: api.Machine.activateMachine,
		deactivate: api.Machine.deactivateMachine,
		destroy: this.deactivate,
		energyTick: api.Machine.basicEnergyReceiveFunc,
		click: function(id, count, data, coords){},
	});
});
