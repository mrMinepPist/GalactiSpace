var skeleton_texture = new Texture("skeleton.png"); // создадим объект текстуры
var skeleton_model = new EntityModel(); // создаем модель нашему паучку
creeper_model.setTexture(skeleton_texture);// устанавливаем паучку текстуру // создаем анимацию модели: она будет содержать 16 кадров, каждый из которых будет занимать 0.5 тика (1 цикл = 1 взмах крыльев = 8 тиков) 
var entitySkeleton = MobRegistry.registerEntity("skeletonEvolved"); // создаем моба - паучка
entitySkeleton.customizeVisual({ // задаем нашу модель как основную (будет установлена при старте) 
    getModels: function() {
        return {
            "main": skeleton_model
        };
    }
});
Item.registerUseFunctionForID(264, function(coords, item, block) {
    coords = coords.relative;
    Entity.spawnCustom("skeletonEvolved", coords.x + .5, coords.y + .5, coords.z + .5);
});
