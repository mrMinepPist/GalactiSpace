//регистрация материалов
//лунные руды ванильных и индастриал материалов
IDRegistry.genBlockID("oreTinm");
Block.createBlock("oreTinm", [{name: Translation.translate("Moon Tin ore"), texture: [["oreTinm", 1]], inCreative: true}]);
IDRegistry.genBlockID("oreCopperm");
Block.createBlock("oreCopperm", [{name: Translation.translate("Moon Copper ore"), texture: [["oreCopperm", 1]], inCreative: true}]);
//Сапфир лунный
IDRegistry.genItemID("Sapphire");
Item.createItem("Sapphire", Translation.translate("Sapphire"), {name: "Sapphire", meta: 1}, {});
IDRegistry.genItemID("dustSapphire");
Item.createItem("dustSapphire", Translation.translate("Sapphire dust"), {name: "dustSapphire", meta: 1}, {});
IDRegistry.genItemID("plateSapphire");
Item.createItem("plateSapphire", Translation.translate("Sapphire plate"), {name: "plateSapphire", meta: 1}, {});
IDRegistry.genBlockID("oreSapphire");
Block.createBlock("oreSapphire", [{name: Translation.translate("Moon sapphire ore"), texture: [["oreSapphire", 1]], inCreative: true}]);
IDRegistry.genBlockID("blockSapphire");
Block.createBlock("blockSapphire", [{name: Translation.translate("Sapphire block"), texture: [["blockSapphire", 1]], inCreative: true}]);
//сыр(да, есть такое на луне, ну что поделаешь)
IDRegistry.genBlockID("oreCheese");
Block.createBlock("oreCheese", [{name: Translation.translate("Cheese ore"), texture: [["oreCheese", 1]], inCreative: true}]);
//кремний
IDRegistry.genItemID("ingotSilicon");
Item.createItem("ingotSilicon", Translation.translate("Silicon ingot"), {name: "ingotSilicon", meta: 1}, {});
IDRegistry.genItemID("dustSilicon");
Item.createItem("dustSilicon", Translation.translate("Silicon dust"), {name: "dustSilicon", meta: 1}, {});
IDRegistry.genItemID("plateSilicon");
Item.createItem("plateSilicon", Translation.translate("Silicon plate"), {name: "plateSilicon", meta: 1}, {});
IDRegistry.genBlockID("oreSilicon");
Block.createBlock("oreSilicon", [{name: Translation.translate("Silicon ore"), texture: [["oreSilicon", 1]], inCreative: true}]);
IDRegistry.genBlockID("blockSilicon");
Block.createBlock("blockSilicon", [{name: Translation.translate("Silicon block"), texture: [["blockSilicon", 1]], inCreative: true}]);
//жидкости
IDRegistry.genItemID("oilBucket"); 
Item.createItem("oilBucket", "Oil bucket", {name: "bucketOil", meta: 1}, {stack: 1});
IDRegistry.genItemID("fuelBucket"); 
Item.createItem("fuelBucket", "Fuel bucket", {name: "bucketFuel", meta: 1}, {stack: 1});
LiquidRegistry.registerLiquid("oil", "Oil", ["Oil"]);
LiquidRegistry.registerItem("oil", {id: 325, data: 0}, {id: BlockID.oilBucket, data: 0});
LiquidRegistry.registerLiquid("fuel", "Fuel", ["Fuel"]);
LiquidRegistry.registerItem("fuel", {id: 325, data: 0}, {id: BlockID.fuelBucket, data: 0});
LiquidRegistry.registerLiquid("oxygen", "Oxygen", ["Oxygen"]);
