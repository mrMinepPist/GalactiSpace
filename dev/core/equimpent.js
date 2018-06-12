//нативный API для получениярежима интнрфейса
var NativeAPI = java.lang.Class.forName("zhekasmirnov.launcher.api.NativeAPI", true, UI.getContext().getClass().getClassLoader()).newInstance();
//центр высоты
var HEIGHT_CENTER = (UI.getScreenHeight() - 240) / 2 - 30;
//обьект снаряжений GalactiSpace
var equimpentGalactiSpace = {
	//типы
	types: {}, //обьект типа (обьекты с методами name и slot(x, y))
	equimpents: {}, //ОБЬЕКТ снаряжения (обьекты с методами type, id, count, data)
	//проверка на валидность
	isValid: function(equimpent){
		if(this.equimpents[equimpent] != null){
			return true;
		} else {
			return false;
		}
	},
	//контейнеры для кнопок
	mobile__button_cont: new UI.Container(),
	//контейнеры для окон
	windowMobile__container: new UI.Container(),
	//Кнопка для карманного интерфейса
	mobile__button: new UI.Window({
    	location: {
        	x: 13,
        	y: UI.getScreenHeight() - 382,
        	width: 52,
        	height: 58
    	},
    	drawing: [{
            	type: "frame",
           	    x: 0,
            	y: 5,
            	width: 1000,
            	height: 1100,
            	bitmap: "galact_btn_frame",
            	scale: 30
        }],
    	elements: {
        	"texture": {
            	type: "image", 
				x: 5, 
				y: 5, 
				bitmap: "galact_btn_d", 
				scale: 30, 
				clicker: {
                	onClick: function () {
						//открываем инвентарь снаряжения космонавта
						equimpentGalactiSpace.windowMobile__container.openAs(equimpentGalactiSpace.windowMobile);
					}
            	}
        	},
		}
	}),
	//окно карманного GUI
	windowMobile: new UI.Window({
		location: {
    		x: 0,
       	 	y: 0,
        	width: 930,
        	height: UI.getScreenHeight() - 70,
    	},
    	drawing: [],
    	elements: {
			//слоты
			"slot_0":{
				type: "invSlot", 
				x: 60, 
				y: 0, 
				size: 60, 
				index: 0, 
			},
			"slot_1":{
				type: "invSlot", 
				x: 120, 
				y: 0, 
				size: 60, 
				index: 1, 
			},
			"slot_2":{
				type: "invSlot", 
				x: 180, 
				y: 0, 
				size: 60, 
				index: 2, 
			},
			"slot_3":{
				type: "invSlot", 
				x: 240, 
				y: 0, 
				size: 60, 
				index: 3, 
			},
			"slot_4":{
				type: "invSlot", 
				x: 300, 
				y: 0, 
				size: 60, 
				index: 4, 
			},
			"slot_5":{
				type: "invSlot", 
				x: 360, 
				y: 0, 
				size: 60, 
				index: 5, 
			},
			"slot_6":{
				type: "invSlot", 
				x: 60, 
				y: 60, 
				size: 60, 
				index: 6, 
			},
			"slot_7":{
				type: "invSlot", 
				x: 120, 
				y: 60, 
				size: 60, 
				index: 7, 
			},
			"slot_8":{
				type: "invSlot", 
				x: 180, 
				y: 60, 
				size: 60, 
				index: 8, 
			},
			"slot_9":{
				type: "invSlot", 
				x: 240, 
				y: 60, 
				size: 60, 
				index: 9, 
			},
			"slot_10":{
				type: "invSlot", 
				x: 300, 
				y: 60, 
				size: 60, 
				index: 10, 
			},
			"slot_11":{
				type: "invSlot", 
				x: 360, 
				y: 60, 
				size: 60, 
				index: 11, 
			},
			"slot_12":{
				type: "invSlot", 
				x: 60, 
				y: 120, 
				size: 60, 
				index: 12, 
			},
			"slot_13":{
				type: "invSlot", 
				x: 120, 
				y: 120, 
				size: 60, 
				index: 13, 
			},
			"slot_14":{
				type: "invSlot", 
				x: 180, 
				y: 120, 
				size: 60, 
				index: 14, 
			},
			"slot_15":{
				type: "invSlot", 
				x: 240, 
				y: 120, 
				size: 60, 
				index: 15, 
			},
			"slot_16":{
				type: "invSlot", 
				x: 300, 
				y: 120, 
				size: 60, 
				index: 16, 
			},
	 		"slot_17":{
				type: "invSlot", 
				x: 360, 
				y: 120, 
				size: 60, 
				index: 17, 
			},
			"slot_18":{
				type: "invSlot", 
				x: 60, 
				y: 180, 
				size: 60, 
				index: 18, 
			},
			"slot_19":{
				type: "invSlot", 
				x: 120, 
				y: 180, 
				size: 60, 
				index: 19, 
			},
			"slot_20":{
				type: "invSlot", 
				x: 180, 
				y: 180, 
				size: 60, 
				index: 20, 
			},
			"slot_21":{
				type: "invSlot", 
				x: 240, 
				y: 180, 
				size: 60, 
				index: 21, 
			},
			"slot_22":{
				type: "invSlot", 
				x: 300, 
				y: 180, 
				size: 60, 
				index: 22, 
			},
			"slot_23":{
				type: "invSlot", 
				x: 360, 
				y: 180, 
				size: 60, 
				index: 23, 
			},
			"slot_24":{
				type: "invSlot", 
				x: 60, 
				y: 240, 
				size: 60, 
				index: 24, 
			},
			"slot_25":{
				type: "invSlot", 
				x: 120, 
				y: 240, 
				size: 60, 
				index: 25, 
			},
			"slot_26":{
				type: "invSlot", 
				x: 180, 
				y: 240, 
				size: 60, 
				index: 26, 
			},
			"slot_27":{
				type: "invSlot", 
				x: 240, 
				y: 240, 
				size: 60, 
				index: 27, 
			},
			"slot_28":{
				type: "invSlot", 
				x: 300, 
				y: 240, 
				size: 60, 
				index: 28, 
			},
			"slot_29":{
				type: "invSlot", 
				x: 360, 
				y: 240, 
				size: 60, 
				index: 29, 
			},
			"slot_30":{
				type: "invSlot", 
				x: 60, 
				y: 300, 
				size: 60, 
				index: 30, 
			},
			"slot_31":{
				type: "invSlot", 
				x: 120, 
				y: 300, 
				size: 60, 
				index: 31, 
			},
			"slot_32":{
				type: "invSlot", 
				x: 180, 
				y: 300, 
				size: 60, 
				index: 32, 
			},
			"slot_33":{
				type: "invSlot", 
				x: 240, 
				y: 300, 
				size: 60, 
				index: 33, 
			},
			"slot_34":{
				type: "invSlot", 
				x: 300, 
				y: 300, 
				size: 60, 
				index: 34, 
			},
			"slot_35":{
				type: "invSlot", 
				x: 360, 
				y: 300, 
				size: 60, 
				index: 35, 
			},
			"slot_36":{
				type: "invSlot", 
				x: 60, 
				y: 360, 
				size: 60, 
				index: 36, 
			},
			"slot_37":{
				type: "invSlot", 
				x: 120, 
				y: 360, 
				size: 60, 
				index: 37, 
			},
			"slot_38":{
				type: "invSlot", 
				x: 180, 
				y: 360, 
				size: 60, 
				index: 38, 
			},
			"slot_39":{
				type: "invSlot", 
				x: 240, 
				y: 360, 
				size: 60, 
				index: 39, 
			},
			"slot_40":{
				type: "invSlot", 
				x: 300, 
				y: 360, 
				size: 60, 
				index: 40, 
			},
			"slot_41":{
				type: "invSlot", 
				x: 360, 
				y: 360, 
				size: 60, 
				index: 41, 
			},
			"slot_42":{
				type: "invSlot", 
				x: 60, 
				y: 420, 
				size: 60, 
				index: 42, 
			},
			"slot_43":{
				type: "invSlot", 
				x: 120, 
				y: 420, 
				size: 60, 
				index: 43, 
			},
			"slot_44":{
				type: "invSlot", 
				x: 180, 
				y: 420, 
				size: 60, 
				index: 44, 
			},
			//кнопка закрытия
			"closeBT": {
            	type: "image", 
				x: 0, 
				y: 0, 
				bitmap: "thaum_close_button_up",
				bitmap2:"thaum_close_button_down",
				scale: 3,
				clicker: {
                	onClick: function () {
						equimpentGalactiSpace.windowMobile__container.close();
					}
            	}
        	},
			//слот для шлема теплоустойчивой брони
			"helmetSlot": {
            	type: "slot", 
				x: 580, 
				y: HEIGHT_CENTER - 10, 
				bitmap: "slot_paddingThermal_helmet",
    		},
			//слот для кирасы теплоустойчивой брони
			"chestplateSlot": {
            	type: "slot", 
				x: 580, 
				y: HEIGHT_CENTER + 50, 
				bitmap: "slot_paddingThermal_chestplate"
       	    },
			//слот для поножи теплоустойчивой брони
			"legginsSlot": {
            	type: "slot", 
				x: 580, 
				y: HEIGHT_CENTER + 110, 
				bitmap: "slot_paddingThermal_leggins",
        	},
			//слот для ботинок теплоустойчивой брони
			"bootsSlot": {
            	type: "slot", 
				x: 580, 
				y: HEIGHT_CENTER + 170, 
				bitmap: "slot_paddingThermal_boots",
        	},
			//слот для модулей
			"module": {
            	type: "slot", 
				x: 680,
				y: HEIGHT_CENTER + 20, 
				bitmap: "slot_module",
    		},
			//слот для маски
			"mask": {
            	type: "slot", 
				x: 740,
				y: HEIGHT_CENTER, 
				bitmap: "slot_mask",
    		},
			//слот для парашюта
			"parachute": {
            	type: "slot", 
				x: 800,
				y: HEIGHT_CENTER, 
				bitmap: "slot_parachute",
    		},
			//слот для трубки
			"gear": {
            	type: "slot", 
				x: 740,
				y: HEIGHT_CENTER + 60, 
				bitmap: "slot_gear",
    		},
			//слоты для баллонов
			"tank1": {
            	type: "slot", 
				x: 710,
				y: HEIGHT_CENTER + 120, 
				bitmap: "slot_tank",
    		},
			"tank2": {
            	type: "slot", 
				x: 770,
				y: HEIGHT_CENTER + 120, 
				bitmap: "slot_tank",
    		},
		}
	}),
	wimdowDekstop: new UI.Window({
		location: {
    		x: 0,
       	 	y: 0,
        	width: 900,
        	height: UI.getScreenHeight() - 100,
    	},
    	drawing: [],
    	elements: {
			//слот для шлема теплоустойчивой брони
			"helmetSlot": {
            	type: "slot", 
				x: 400, 
				y: HEIGHT_CENTER - 100, 
				bitmap: "baubles_slot_m.amulet",
    		},
			//слот для кирасы теплоустойчивой брони
			"chestplateSlot": {
            	type: "slot", 
				x: 400, 
				y: HEIGHT_CENTER - 40, 
				bitmap: "baubles_slot_m.ring"
       	    },
			//слот для поножи теплоустойчивой брони
			"legginsSlot": {
            	type: "slot", 
				x: 400, 
				y: HEIGHT_CENTER + 20, 
				bitmap: "baubles_slot_m.belt",
        	},
			//слот для ботинок теплоустойчивой брони
			"bootsSlot": {
            	type: "slot", 
				x: 400, 
				y: HEIGHT_CENTER + 80, 
				bitmap: "baubles_slot_m.belt",
        	},
		}
	}),
};
//коллбек изменения "нативного" GUI
Callback.addCallback("NativeGuiChanged", function (screenName){ 
	if(screenName === "survival_inventory_screen" || screenName === "creative_inventory_screen"){
		    if (NativeAPI.getUiProfile() === 1) {
				//открытие GUI кнопки
				equimpentGalactiSpace.mobile__button_cont.openAs(equimpentGalactiSpace.mobile__button);
			}
	} else {
		//закрытие GUI
		equimpentGalactiSpace.mobile__button_cont.close();
		equimpentGalactiSpace.windowMobile__container.close();
	}
});
Callback.addCallback("tick", function (){
	if(equimpentGalactiSpace.windowMobile__container.getSlot("gear").id != 0){
		equimpentSaver.gear.id = equimpentGalactiSpace.windowMobile__container.getSlot("gear").id;
		equimpentSaver.gear.data = equimpentGalactiSpace.windowMobile__container.getSlot("gear").data;
	}
	if(equimpentGalactiSpace.windowMobile__container.getSlot("mask").id != 0){
		equimpentSaver.gear.id = equimpentGalactiSpace.windowMobile__container.getSlot("mask").id;
		equimpentSaver.gear.data = equimpentGalactiSpace.windowMobile__container.getSlot("mask").data;
	}
	if(equimpentGalactiSpace.windowMobile__container.getSlot("module").id != 0){
		equimpentSaver.gear.id = equimpentGalactiSpace.windowMobile__container.getSlot("module").id;
		equimpentSaver.gear.data = equimpentGalactiSpace.windowMobile__container.getSlot("module").data;
	}
	if(equimpentGalactiSpace.windowMobile__container.getSlot("parachute").id != 0){
		equimpentSaver.gear.id = equimpentGalactiSpace.windowMobile__container.getSlot("parachute").id;
		equimpentSaver.gear.data = equimpentGalactiSpace.windowMobile__container.getSlot("parachute").data;
	}
	if(equimpentGalactiSpace.windowMobile__container.getSlot("tank1").id != 0){
		equimpentSaver.gear.id = equimpentGalactiSpace.windowMobile__container.getSlot("tank1").id;
		equimpentSaver.gear.data = equimpentGalactiSpace.windowMobile__container.getSlot("tank1").data;
	}
	if(equimpentGalactiSpace.windowMobile__container.getSlot("tank2").id != 0){
		equimpentSaver.gear.id = equimpentGalactiSpace.windowMobile__container.getSlot("tank2").id;
		equimpentSaver.gear.data = equimpentGalactiSpace.windowMobile__container.getSlot("tank2").data;
	}
});
//команда
Callback.addCallback("NativeCommand", function (str){ 
	if(str == "EquimpentData"){
		Game.message("EquimpentData:");
		Game.message("Mask id: " + equimpentSaver.mask.id);
		Game.message("Mask data: " + equimpentSaver.mask.data);
		Game.message("Oxygen gear id: " + equimpentSaver.gear.id);
		Game.message("Oxygen gear data: " + equimpentSaver.gear.data);
	}
});
