var alien_render = new Render();
alien_render.setPart("head",[
	{
		type: "box",
		coords: {
			x: 0, 
			y: 0, 
			z: 0
		},
		size: {
			x: 8, 
			y: 10, 
			z: 8
		},
		uv: {
			x: 0, 
			y: 0
		}
	}
], {});
var alien_texture = new Texture("villager.png");
alien_texture.setResolution(64, 64); 
alien_texture.setPixelScale(2);
var alien_model = new EntityModel();
alien_model.setRender(alien_render);
alien_model.setTexture(alien_texture);
var entityAlien = MobRegistry.registerEntity("villagerAlien"); 
entityAlien.customizeVisual({ 
    getModels: function() {
        return {
            "main": alien_model
        };
    }
});
Item.registerUseFunctionForID(264, function(coords, item, block) {
    coords = coords.relative;
    Entity.spawnCustom("villagerAlien", coords.x + .5, coords.y + .5, coords.z + .5);
});
