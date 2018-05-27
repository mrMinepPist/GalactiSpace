IDRegistry.genItemID("RocketItem"); 
Item.createItem("RocketItem", Translation.translate("Rocket(tier 1)"), {name: "rocket_t1", meta: 1}, {});
IDRegistry.genBlockID("Rocket");
Block.createBlockWithRotation("Rocket", [{name: Translation.translate("Rocket(tier 1)"), texture: [["machine", 1]],inCreative: false, destroytime: 21, explosionres: 25}]);
var mesh = new RenderMesh();
mesh.setBlockTexture("rocket_t1", 1);
mesh.importFromFile(__dir__ + "images/models/rocket_t1.obj", "obj", null); 
var blockModel = new BlockRenderer.Model(mesh);
var icRenderModel = new ICRender.Model();
icRenderModel.addEntry(blockModel);
BlockRenderer.setStaticICRender(BlockID.Rocket, -1, icRenderModel);
Item.registerUseFunctionForID(ItemID.RocketItem, function(coords, item, block) { 
	coords = coords.relative; 
	World.setBlock(coords.x, coords.y, coords.z, BlockID.Rocket, 0);
});
var containerRocket = new UI.Container();
var containerCelestial = new UI.Container();
var storageRocket = new LiquidRegistry.Storage();
var containerButt = new UI.Container();
var containerButt1 = new UI.Container();
var containerButt2 = new UI.Container();
var guiRocket = new UI.StandartWindow({
    standart: {
       	header: {
			text: {
				text: Translation.translate("Rocket(tier 1)")
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
            x: 641,
            y: 105,
            direction: 1,
            value: 0,
            bitmap: "gui_liquid_storage_overlay",
            scale: 3.2
        },
		"slotSource": {
            type: "slot",
            x: 441,
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
var tWind = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 300,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "btn": {
        	type: "button",
			text: "Меню",
			x: 0, 
			y: 0, 
			bitmap: "button", 
			scale: 60, 
			clicker: {
            	onClick: function () {
					containerRocket.openAs(guiRocket);
                }
            }
		}
	}
});
var decreasePlayer = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 400,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "btn": {
        	type: "button", 
			text: "Спешиться",
			x: 0, 
			y: 0, 
			bitmap: "button", 
			scale: 60, 
			clicker: {
            	onClick: function () {
					containerButt.close();
					containerButt1.close();
					containerButt2.close();
					Player.setFlying(false);
					Player.setPosition(Player.getPosition().x + 2, Player.getPosition().y, Player.getPosition().z);
					Entity.clearEffects(Player.get());
                }
            }
		},
	}
});
var polet = new UI.Window({
	location: {
    	x: 1000 / 2 - 80,
        y: 350,
        width: 48,
        height: 24
    },
    drawing: [],
    elements: {
        "btn": {
        	type: "button",
			x: 0, 
			y: 0,
			bitmap: "button",
			text: "полёт",
			scale: 80, 
			clicker: {
            	onClick: function () {
					containerButt1.close();
					for(var i = 0; i < 256 - Player.getPosition().y; i++){
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.Rocket){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.Rocket){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.Rocket){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
						}
						if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.Rocket){
							World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
						}
						Player.setPosition(Player.getPosition().x, Player.getPosition().y + 1, Player.getPosition().z);
						World.setBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, BlockID.Rocket, 0);
						java.lang.Thread.sleep(120);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false).id == BlockID.Rocket){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 2, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false).id == BlockID.Rocket){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 1, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false).id == BlockID.Rocket){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 3, Player.getPosition().z, false);
					}
					if(World.getBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false).id == BlockID.Rocket){
						World.destroyBlock(Player.getPosition().x, Player.getPosition().y - 4, Player.getPosition().z, false);
					}
					containerCelestial.openAs(tpaWind);
                }
            }
		},
	}
});
TileEntity.registerPrototype(BlockID.Rocket, {
     defaultValues: {
     },
     tick: function(){},
     click: function(id, count, data, coords){
		 return false;
     },
     getGuiScreen: function(){
	 }
});
Callback.addCallback("tick", function(){
	if(storageRocket.getAmount("fuel") == 0 && containerRocket.getSlot("slotSource").id == ItemID.fuelBucket){
		this.liquidStorage.addLiquid("fuel", 1000);
		containerRocket.clearSlot("slotSource");
		containerRocket.setSlot("slotSource", 325, 1, 0);
		containerRocket.setScale("liquidScale1", 1);
		storageRocket.updateUiScale("liquidScale1", "oil", containerRocket);
	}
});
Callback.addCallback("ItemUse", function (coords, item, block) { 
	if(block.id === BlockID.Rocket){
		Player.setPosition(coords.x, coords.y + 2, coords.z);
		containerButt.openAs(polet);
		containerButt1.openAs(decreasePlayer);
		containerButt2.openAs(tWind);
		Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 100000, 100000);
		Player.setFlyingEnabled(true);
		Player.setFlying(true);
	}
 });
