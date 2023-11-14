class ToDoListComponent{
	/*
		tasks: {
			title: text;
			list: Array(name: text;);
		}
	*/
	constructor({id, tasks}){
		if(!id){
			throw new Error('Id must be included.');
		}
		if(!tasks){
			throw new Error('Tasks must be included.');
		}
		this.id = id;
		this.tasks = tasks;
	}

	clickTask(){

	}

	createTask(){

	}

	createLiElementsFromList(){
		let ul = document.createElement('ul');

		for(let i = 0; i < this.tasks.list.length; i++){
			let span = document.createElement('span');
			span.classList.add('material-symbols-outlined');
			span.append(document.createTextNode('check_box_outline_blank'));

			let li = document.createElement('li');
			li.setAttribute('elementID', this.id);
			li.append(span);
			li.append(this.tasks.list[i]);
			ul.append(li)
		}

		return ul;
	}

	create(){
		let divToDo = document.createElement('div');
		divToDo.classList.add('box', 'toDoList');
		divToDo.setAttribute('grid-height', '2');
		divToDo.setAttribute('grid-width', '2');
		divToDo.setAttribute('elementID', this.id);

		let divInnerToDO = document.createElement('div');
		divInnerToDO.classList.add('toDoListInner');

		let title = document.createElement('div');
		title.classList.add('title');
		let p = document.createElement('p');
		p.append(this.tasks.title);
		title.append(p);

		let list = document.createElement('div');
		list.classList.add('list');
		list.append(this.createLiElementsFromList());

		let divAddInput = document.createElement('div');
		divAddInput.classList.add('addInput');
		let input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('placeholder', 'Add task');
		divAddInput.append(input);
		let span = document.createElement('span');
		span.classList.add('material-symbols-outlined');
		span.append(document.createTextNode('add'));
		divAddInput.append(span);

		divInnerToDO.append(title);
		divInnerToDO.append(list);
		divInnerToDO.append(divAddInput);
		divToDo.append(divInnerToDO);

		return divToDo;
	}
}