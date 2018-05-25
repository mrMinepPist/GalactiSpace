var tpaWind = new UI.Window({
	location: {
    	x: 0,
        y: 0,
        width: 1000,
        height: 1000
    },
    drawing: [
	{
		type: "bitmap", 
		x: 0, 
		y: 0, 
		bitmap: "default_dimension_loading_screen", 
		scale: 8
	},
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
	}],
    elements: {
		"earthButt": {
			type: "button", 
			x: 541, 
			y: 101, 
			bitmap: "button",
			scale: 1.8, 
			clicker: {
				onClick: function(container, tileEntity){
					if(Player.getDimension() != 0){
						if(moon.isInDimension()) moon.transferOut();
						if(stationEarth1.isInDimension()) stationEarth1.transferOut();
						Entity.clearEffects(Player.get());
						Player.setFlying(false);
						container.close();
						containerButt.close();
						containerButt2.close();
					}
				}
			}
		},
		"moonButt": {
			type: "button", 
			x: 541, 
			y: 210, 
			bitmap: "button",
			scale: 1.8, 
			clicker: {
				onClick: function(container, tileEntity){
					if(Player.getDimension() != moon.getId()) moon.transferIn();
					Entity.clearEffects(Player.get());
					Player.setFlying(false);
					container.close();
					containerButt.close();
					containerButt2.close();
				}
			}
		},
		"spaceButt": {
			type: "button", 
			x: 541, 
			y: 319, 
			bitmap: "button",
			scale: 1.8, 
			clicker: {
				onClick: function(container, tileEntity){
					if(Player.getDimension() != stationEarth1.getId()) stationEarth1.transferIn();
					Entity.clearEffects(Player.get());
					Player.setFlying(false);
					Entity.addEffect(Player.get(), 11, 500, 500);
					container.close();
					containerButt.close();
					containerButt2.close();
				}
			}
		}
	}
});
