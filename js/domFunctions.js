class Element{
	constructor(element){
		this.element = element;
	}

	setClass(classText){
		this.element.className = classText;
		return this;
	}
}

class Div extends Element{
	constructor(){
		super(document.createElement('div'));
	}

	createNdivs()
}