class LinkComponent{
	constructor(favicon, link){
		if(!link || link.length < 6){
			throw new Error('Link must be included.');
		}

		this.favicon = favicon || null;
		this.link 	 = link;
	}

    getNameOfDomain(){
        let regex = /https?:\/\/([^/]+)\//;
        let match = this.link.match(regex);
        let name  = match[1].split('.');
        name.pop();
        if(name[0] == 'www'){
             name.shift();
        }
        name = name.join(' ');
        return name;
    }

	create(elementToAppend){
		let divBox 	   = document.createElement('div');
        divBox.classList.add('box', 'linkComponent');
		let a 	   	   = document.createElement('a');
		let divFavicon = document.createElement('div');
        divFavicon.classList.add('favicon');
        let divText    = document.createElement('div');
        divText.classList.add('text');
        let img        = document.createElement('img');
        let span       = document.createElement('span');
		divBox.setAttribute('grid-height', '1');
		divBox.setAttribute('grid-width', '1');
        a.setAttribute('href', this.link);
        img.setAttribute('src', this.favicon);
        span.append(this.getNameOfDomain());

        divFavicon.append(img);
        divText.append(span);
        a.append(divFavicon, divText);
        divBox.append(a);

        return divBox;
	}
}