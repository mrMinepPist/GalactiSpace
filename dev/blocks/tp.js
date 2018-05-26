//Телепортер для творческого режима
IDRegistry.genBlockID("dimTp");
Block.createBlock("dimTp", [{name: "Planet teleporter(Creative ONLY)", texture: [["machine", 1]], inCreative: true, lightlevel: 15, explosionres: 225, destroytime: 510}]);
var tpGui = new UI.StandartWindow({ 
	standart: { 
		header: { 
			text: { 
				text: "Tp creativ" 
			}, 
			color: android.graphics.Color.rgb(0x47, 0x26, 0x0c),
		}, 
		inventory: { 
			standart: true 
		}, 
		background: { 
			standart: true  
		}, 
	}, 
	drawing: [
	{
		type: "bitmap", 
		x: 441, 
		y: 101, 
		bitmap: "celestialbodies.earth", 
		scale: 1
	},
	{
		type: "bitmap", 
		x: 441, 
		y: 210, 
		bitmap: "celestialbodies.moon", 
		scale: 8
	},
	{
		type: "bitmap", 
		x: 441, 
		y: 319, 
		bitmap: "celestialbodies.space_station", 
		scale: 4
	},], 
	elements: {
		"earthButt": {
			type: "button", 
			x: 541, 
			y: 101, 
			bitmap: "energy_bar_background",
			scale: 1.8, 
			clicker: {
				onClick: function(container, tileEntity){
					if(Player.getDimension() != 0){
						if(moon.isInDimension()) moon.transferOut();
						if(stationEarth1.isInDimension()) stationEarth1.transferOut();
					}
				}
			}
		},
		"moonButt": {
			type: "button", 
			x: 541, 
			y: 210, 
			bitmap: "energy_bar_background",
			scale: 1.8, 
			clicker: {
				onClick: function(container, tileEntity){
					if(Player.getDimension() != moon.getId()) moon.transferIn();
				}
			}
		},
		"spaceButt": {
			type: "button", 
			x: 541, 
			y: 319, 
			bitmap: "energy_bar_background",
			scale: 1.8, 
			clicker: {
				onClick: function(container, tileEntity){
					if(Player.getDimension() != stationEarth1.getId()) stationEarth1.transferIn();
				}
			}
		}
	}
});
TileEntity.registerPrototype(BlockID.dimTp, { 
	defaultValues: {},
	tick: function(){
	}, 
	click: function(id, count, data, coords){
	},
	getGuiScreen: function(){
		return tpGui;
	}
});
