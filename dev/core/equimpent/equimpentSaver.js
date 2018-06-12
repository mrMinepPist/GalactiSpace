//Saver, чтобы снаряжение не проподало при выходе из мира
Saver.addSavesScope("SavedEquimpent",
	function read(scope){
		if(scope && scope.equimpentSaver) equimpentSaver = scope.equimpentSaver;
	},
	
	function save(){
		return equimpentSaver;
	}
);
//обьект сохраненённого снаряжения
var equimpentSaver = {
	//модуль
	module: {
		id: null,
		data: null
	},
	//маска
	mask: {
		id: null,
		data: null
	},
	//парашют
	parachute: {
		id: null,
		data: null
	},
	//труба
	gear: {
		id: null,
		data: null
	},
	//баллоны
	tank1: {
		id: null,
		data: null
	},
	tank2: {
		id: null,
		data: null
	},
};
