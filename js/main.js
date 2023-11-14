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
    let data = result.storage;
    if(!result.storage){
        data = new Array();
    }
    window.storage = new Storage(data, 'storage');
});

chrome.storage.local.get(['elements']).then((result) => {
    let data = result.elements;
    if(!result.elements){
        data = new Array();
    }
    window.elementsData = new Storage(data, 'elements');
    window.element      = new Elements('#widgets');
});
