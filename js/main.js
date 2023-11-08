let resolution     = calculateProperHeightAndWidth(window.innerHeight, window.innerWidth);
let styleVariables = getCssVariables(['--box-size', '--box-gap']);
let boxSize    	   = trimStringAndReturnNumber(styleVariables[0], 2) + 
				     trimStringAndReturnNumber(styleVariables[1], 2);
                     
const cssVariables = ['--grid-height', resolution[0] + 'px',
					  '--grid-width', resolution[1] + 'px',
					  '--grid-width-count', (resolution[1] / boxSize),
					  '--grid-height-count', (resolution[0] / boxSize)]
setVariableCss(cssVariables)


