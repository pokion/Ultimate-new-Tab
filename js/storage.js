class Storage{
	constructor(data, dataName){
		this.data = new Object;
		this.data[dataName] = new Map(data);
		this.dataName = dataName;
	}

	generateId(){
		let firstPart = (Math.random() * 46656) | 0;
	    let secondPart = (Math.random() * 46656) | 0;
	    firstPart = ("000" + firstPart.toString(36)).slice(-3);
	    secondPart = ("000" + secondPart.toString(36)).slice(-3);
	    return this.dataName + firstPart + secondPart;
	}

	setDataInChrome(){
		chrome.storage.local.set(this.data);
	}

	setData(id, value){
		this.data[this.dataName].set(id, value);
		this.setDataInChrome();
	}

	getData(id){
		return this.data[this.dataName].get(id);
	}

	deleteData(id){
		this.data[this.dataName].delete(id);
		this.setDataInChrome();
	}
}