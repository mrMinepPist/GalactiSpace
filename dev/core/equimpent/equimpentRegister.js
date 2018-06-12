//регистрация
var equimpentRegistry = {
	//регистрация типа
	registerType: function(idType, typeObject){
		//если равно null (тоже самое, что "", '', undefined)
		if(typeObject.name == null){
			throw new Error("typeObject.name can't == null");
		}
		if(typeObject.slot == null){
			throw new Error("typeObject.slot can't == null");
		}
		if(typeObject.slot.x == null){
			throw new Error("typeObject.slot.x can't == null");
		}
		if(typeObject.slot.y == null){
			throw new Error("typeObject.slot.x can't == null");
		}
		equimpentGalactiSpace.types[idType] = {
			name: typeObject.name,
			slot: typeObject.slot,
		};
	},
	//регистрация снаряжения
	registerEquimpent: function(idEquimpent, equimpentObject){
		//если равно null (тоже самое, что "", '', undefined)
		if(equimpentObject.idItem == null){
			throw new Error("equimpentObject.idItem can't == null");
		}
		if(equimpentObject.nameType == null){
			throw new Error("equimpentObject.nameType can't == null");
		}
		if(equimpentObject.dataItem == null){
			throw new Error("equimpentObject.nameType can't == null");
		}
		equimpentGalactiSpace.equimpents[idEquimpent] = {
			id: equimpentObject.idItem, 
			type: equimpentObject.nameType,
			data: equimpentObject.dataItem
		};
	},
};
