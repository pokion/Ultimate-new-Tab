let resolution     = calculateProperHeightAndWidth(window.innerHeight, window.innerWidth);
let styleVariables = getCssVariables(['--box-size', '--box-gap']);
let boxSize    	   = trimStringAndReturnNumber(styleVariables[0], 2) + 
				     trimStringAndReturnNumber(styleVariables[1], 2);
                     
const cssVariables = ['--grid-height', resolution[0] + 'px',
					  '--grid-width', resolution[1] + 'px',
					  '--grid-width-count', (resolution[1] / boxSize),
					  '--grid-height-count', (resolution[0] / boxSize)]
setVariableCss(cssVariables)

chrome.storage.local.get(['storage']).then((result) => {
    window.storage = new Storage(result.storage);
});

document.querySelector('#widgets').append(new ToDoListComponent('asd', {title: 'toDoListEssa', list: ['name1', 'name2', 'name3']}).create())