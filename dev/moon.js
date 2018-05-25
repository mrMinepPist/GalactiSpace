//блоки для измерения
IDRegistry.genBlockID("turfMoon");
Block.createBlock("turfMoon", [{name: "Moon tutf", texture: [["turfMoon", 1]], inCreative: true}]);
IDRegistry.genBlockID("stoneMoon");
Block.createBlock("stoneMoon", [{name: "Moon stone", texture: [["stoneMoon", 1]], inCreative: true}]);
IDRegistry.genBlockID("dirtMoon");
Block.createBlock("dirtMoon", [{name: "Moon dirt", texture: [["dirtMoon", 1]], inCreative: true}]);
//измерение - Луна
var moon = new Dimension({
    name: "moon",
    //генерация
    generation: {
		//слои
        layers: [{
			 range: [0, 64], 
			 //шум
			 noise: { 
			 //октавы
			 	octaves: { 
					count: 4, 
					weight: 0.6, 
					scale: [1, 0.4, 1] 
				} 
			}, 
			gradient: [[0, 0], [-0, 0], [-0, 0], [0, 0], [0, 0], [0, 0]], 
			//повнрхность - земля и трава
			terrain: { 
				base: BlockID.stoneMoon,
				cover: { 
					height: 4, 
					top: BlockID.turfMoon,
					block: BlockID.dirtMoon
				},
			},
		}],
        decoration: {
        }
    },
	//небо и туман
    environment: {
		sky: [0, 0, 0.1],
		fog: [0, 0, 0.1]
    },
	//коллбеки
    callbacks: {
		//такт
        tick: function() { 
        },
		//генерация чанка
        generateChunk: function(chunkX, chunkZ) { 
			for(var i = 0; i < 1; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 11, 101);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCheese, 0, random(2, 16));
			}
			for(var i = 0; i < 1; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 11, 23);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSapphire, 0, random(1, 15));
			}
			for(var i = 0; i < 4; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 11, 85);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreTinm, 0, random(4, 11));
			}
			for(var i = 0; i < 5; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 11, 45);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCopperm, 0, random(9, 125));
			}
        },
		//лоад
        loaded: function() {
        },
        unloaded: function() {
        }
	}
});
var MoonTransferSequence = new TransferSequence(moon);
MoonTransferSequence.setPortalTimeout(40);
MoonTransferSequence.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});

