var zombie_texture = new Texture("zombie.png"); // создадим объект текстуры
var zombie_model = new EntityModel(); // создаем модель нашему паучку
zombie_model.setTexture(zombie_texture);// устанавливаем паучку текстуру 
var entityZombie = MobRegistry.registerEntity("zombieEvolved"); // создаем моба - паучка
entityZombie.customizeVisual({ // задаем нашу модель как основную (будет установлена при старте) 
    getModels: function() {
        return {
            "main": zombie_model
        };
    }
});
Item.registerUseFunctionForID(263, function(coords, item, block) {
    coords = coords.relative;
    Entity.spawnCustom("zombieEvolved", coords.x + .5, coords.y + .5, coords.z + .5);
});
