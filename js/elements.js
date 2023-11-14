const componentClasses = {
	ToDoListComponent,
	LinkComponent
}

class Elements{
	constructor(idToAppend){
		this.classes  = componentClasses;
		this.div = document.querySelector(idToAppend);
		this.create(Array.from(window.elementsData.getAll().keys()));
	}

	add({id, componentClassName, gridX, gridY, width, height}){
		window.elementsData.setData(id, {componentClassName, gridX, gridY, width, height});
		this.create([id]);
	}

	create(arrayOfIds){
		for(let id of arrayOfIds){
			let element    = window.elementsData.getData(id);
			let domElement = new this.classes[element.componentClassName](window.storage.getData(id)).create();
			setStyle([{target: domElement, property: 'gridColumnStart', value: element.gridX},
					  {target: domElement, property: 'gridColumnEnd', value: (element.gridX + element.width)},
					  {target: domElement, property: 'gridRowStart', value: element.gridY},
					  {target: domElement, property: 'gridRowEnd', value: element.gridX + element.height}]);
			domElement.id = id;
			this.div.append(domElement);
		}
	}

	delete(arrayOfIds){
		for(let id of arrayOfIds){
			this.elements.delete(id);
		}
	}
}