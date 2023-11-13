class Storage{
	constructor(data){
		this.data = new Map(data);
	}

	generateId(){
		let firstPart = (Math.random() * 46656) | 0;
	    let secondPart = (Math.random() * 46656) | 0;
	    firstPart = ("000" + firstPart.toString(36)).slice(-3);
	    secondPart = ("000" + secondPart.toString(36)).slice(-3);
	    return 'STO' + firstPart + secondPart;
	}

	setDataInChrome(){
		chrome.storage.local.set({ storage: Array.from(this.data.entries()) });
	}

	setData(id, value){
		this.data.set(id, value);
		this.setDataInChrome();
	}

	getData(id){
		return this.data.get(id);
	}

	deleteData(id){
		this.data.delete(id);
		this.setDataInChrome();
	}
}