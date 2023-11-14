class Storage{
	constructor(data, dataName){
		this.data = new Map(data);
		this.dataName = dataName;
	}

	setDataInChrome(){
		let dataToPush = new Object;
		dataToPush[this.dataName] = Array.from(this.data.entries());
		chrome.storage.local.set(dataToPush);
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

	getAll(){
		return this.data;
	}
}