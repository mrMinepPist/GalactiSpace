var spider_texture = new Texture("spider.png"); // создадим объект текстуры
var spider_model = new EntityModel(); // создаем модель нашему паучку
spider_model.setTexture(spider_texture);// устанавливаем паучку текстуру
var entitySpider = MobRegistry.registerEntity("spiderEvolved"); // создаем моба - паучка
entitySpider.customizeVisual({ // задаем нашу модель как основную (будет установлена при старте) 
    getModels: function() {
        return {
            "main": spider_model
        };
    }
});
Item.registerUseFunctionForID(280, function(coords, item, block) {
    coords = coords.relative;
    Entity.spawnCustom("spiderEvolved", coords.x + .5, coords.y + .5, coords.z + .5);
});
