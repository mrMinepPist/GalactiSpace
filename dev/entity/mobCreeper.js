var creeper_texture = new Texture("creeper.png");
creeper_texture.setResolution(128, 64); 
creeper_texture.setPixelScale(2);
var creeper_render = new Render();
creeper_render.setPart("head",[
	{
		type: "box",
		coords: {
			x: 0, 
			y: 0, 
			z: 0
		},
		size: {
			x: 8, 
			y: 8, 
			z: 8
		},
		uv: {
			x: 0, 
			y: 0
		}
	}
], {});
var creeper_model = new EntityModel(); // создаем модель нашему паучку
creeper_model.setTexture(creeper_texture);
creeper_model.setRender(creeper_render);
var entityCreeper = MobRegistry.registerEntity("creeperEvolved"); // создаем моба - паучка
entityCreeper.customizeVisual({
    getModels: function() {
        return {
            "main": creeper_model
        };
    }
});
Item.registerUseFunctionForID(331, function(coords, item, block) {
    coords = coords.relative;
    Entity.spawnCustom("creeperEvolved", coords.x + .5, coords.y + .5, coords.z + .5);
});
