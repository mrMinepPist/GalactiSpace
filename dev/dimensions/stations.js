//станция
var stationEarth1 = new Dimension({
    name: "stationEarth1",
	//не используется
    generation: {
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
        },
		//лоад
        loaded: function() {
			var pos = Player.getPosition();
			var loadRand = random(100, 125);
			World.setBlock(pos.x, loadRand, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-1, loadRand, pos.z-1, BlockID.decoTin, 0);
			World.setBlock(pos.x+1, loadRand, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x+1, loadRand, pos.z-1, BlockID.decoTin, 0);
			World.setBlock(pos.x-1, loadRand, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-1, loadRand, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x+1, loadRand, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x, loadRand, pos.z-1, BlockID.decoTin, 0);
			World.setBlock(pos.x, loadRand, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x, loadRand+1, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x+1, loadRand+1, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x+2, loadRand+1, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-1, loadRand+1, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x+2, loadRand+1, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-2, loadRand+1, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x+2, loadRand+1, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x+2, loadRand+1, pos.z-1, BlockID.decoTin, 0);
			World.setBlock(pos.x+2, loadRand+1, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x+1, loadRand+1, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x, loadRand+1, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-1, loadRand+1, pos.z-2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-2, loadRand+1, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-2, loadRand+1, pos.z-1, BlockID.decoTin, 0);
			World.setBlock(pos.x-2, loadRand+1, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-2, loadRand+1, pos.z+1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-3, loadRand+1, pos.z-1, BlockID.decoTin, 0);
			World.setBlock(pos.x-3, loadRand+1, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-3, loadRand+1, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-3, loadRand+1, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-3, loadRand+1, pos.z-2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-4, loadRand+1, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+1, pos.z-1, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+1, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+1, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+1, pos.z+2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-5, loadRand+1, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-5, loadRand+1, pos.z-1, BlockID.decoTin, 0);
			World.setBlock(pos.x-5, loadRand+1, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-5, loadRand+1, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-5, loadRand+1, pos.z+2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-6, loadRand+1, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+1, pos.z-1, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+1, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+1, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+1, pos.z+2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-5, loadRand+2, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-5, loadRand+2, pos.z+2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-4, loadRand+2, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+2, pos.z+2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-6, loadRand+2, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+2, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+4, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+4, pos.z+2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-4, loadRand+2, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+2, pos.z+2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-4, loadRand+3, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+3, pos.z+2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-4, loadRand+4, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+4, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+4, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+4, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-4, loadRand+4, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-5, loadRand+4, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-5, loadRand+4, pos.z+2, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-5, loadRand+5, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-5, loadRand+5, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-5, loadRand+5, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-5, loadRand+5, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-5, loadRand+5, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-6, loadRand+5, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+5, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+5, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+5, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-6, loadRand+5, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-7, loadRand+5, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-7, loadRand+5, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-7, loadRand+5, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-7, loadRand+5, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-7, loadRand+5, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-8, loadRand+5, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-8, loadRand+5, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-8, loadRand+5, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-8, loadRand+5, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-8, loadRand+5, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-9, loadRand+5, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-9, loadRand+5, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-9, loadRand+5, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-9, loadRand+5, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-9, loadRand+5, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-10, loadRand+5, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+5, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+5, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+5, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+5, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-10, loadRand+4, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+4, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+4, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+4, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+4, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-10, loadRand+3, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+3, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+3, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+3, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+3, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-10, loadRand+2, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+2, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+2, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+2, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-10, loadRand+2, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-9, loadRand+2, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-9, loadRand+2, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-9, loadRand+2, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-9, loadRand+2, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-9, loadRand+2, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-8, loadRand+2, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-8, loadRand+2, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-8, loadRand+2, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-8, loadRand+2, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-8, loadRand+2, pos.z-1, BlockID.decoTin, 0);
			
			World.setBlock(pos.x-7, loadRand+2, pos.z-2, BlockID.decoTin, 0);
			World.setBlock(pos.x-7, loadRand+2, pos.z+2, BlockID.decoTin, 0);
			World.setBlock(pos.x-7, loadRand+2, pos.z+1, BlockID.decoTin, 0);
			World.setBlock(pos.x-7, loadRand+2, pos.z, BlockID.decoTin, 0);
			World.setBlock(pos.x-7, loadRand+2, pos.z-1, BlockID.decoTin, 0);
        },
        unloaded: function() {
        }
	}
});
var StationEarth1TransferSequence = new TransferSequence(moon);
StationEarth1TransferSequence.setPortalTimeout(21);
StationEarth1TransferSequence.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});
