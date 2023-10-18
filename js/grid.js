function calculateProperHeightAndWidth(height, width){
	//calculate grid height and width
	let cssBoxVariables = getCssVariables(['--box-size', '--box-gap']);
	let boxSize         = trimStringAndReturnNumber(cssBoxVariables[0], 2);
	let boxGap          = trimStringAndReturnNumber(cssBoxVariables[1], 2);
	return [Math.floor(Math.floor(height / (boxSize + boxGap)) * (boxSize + boxGap)),
			Math.floor(Math.floor(width / (boxSize + boxGap)) * (boxSize + boxGap))];
}

function getMouseCoordinateTranslateToGrid(mouseX, mouseY){
    let widgetsDiv         = document.querySelector('#widgets');
    let cssBoxVariables    = getCssVariables(['--box-size', '--box-gap']);
    let boxSize            = trimStringAndReturnNumber(cssBoxVariables[0], 2);
    let boxGap             = trimStringAndReturnNumber(cssBoxVariables[1], 2);

    let calculateColumn = Math.ceil((mouseX - widgetsDiv.offsetLeft) / (boxSize + boxGap));
    let calculateRow    = Math.ceil((mouseY - widgetsDiv.offsetTop)  / (boxSize + boxGap));

    return [calculateColumn, calculateRow];
}

function dragElement(element){
	element.onmousedown    = mouseDown;
	element.style.position = 'absolute';
    let cssBoxVariables    = getCssVariables(['--box-size', '--box-gap']);
    let boxSize            = trimStringAndReturnNumber(cssBoxVariables[0], 2);
    let boxGap             = trimStringAndReturnNumber(cssBoxVariables[1], 2);
    let widgetsDiv         = document.querySelector('#widgets'); 
    let boxShadow          = null; 
    let attributes         = getAttributes(element, ['grid-height', 'grid-width']);

    let x,y;

    function createShadowBox([boxX, boxY]){
        let div = document.createElement('div');
        setStyle([{target: div, property: 'width', value: (boxSize + boxGap) * Number(attributes[1]) + 'px'},
                  {target: div, property: 'height', value: (boxSize + boxGap) * Number(attributes[0]) + 'px'},
                  {target: div, property: 'grid-column-start', value: boxX},
                  {target: div, property: 'grid-column-end', value: boxX + Number(attributes[1])},
                  {target: div, property: 'grid-row-start', value: boxY},
                  {target: div, property: 'grid-row-end', value: boxY + Number(attributes[0])}]);
        div.classList.add('boxShadow');
        return div;
    }

    function moveShadowBox(div, [boxX, boxY]){
        setStyle([{target: div, property: 'grid-column-start', value: boxX},
                  {target: div, property: 'grid-column-end', value: boxX + Number(attributes[1])},
                  {target: div, property: 'grid-row-start', value: boxY},
                  {target: div, property: 'grid-row-end', value: boxY + Number(attributes[0])}]);
    }

	function mouseDown(e){
		e = e || window.event;
    	e.preventDefault();

        x = element.offsetLeft
        y = element.offsetTop;

        boxShadow = createShadowBox(getMouseCoordinateTranslateToGrid(e.clientX, e.clientY));
        widgetsDiv.append(boxShadow);

    	document.onmousemove = mouseMove;
    	document.onmouseup 	 = mouseUp;
	}

	function mouseUp(e){
		e = e || window.event;
    	e.preventDefault();

        boxShadow.remove();

        moveShadowBox(element, getMouseCoordinateTranslateToGrid(e.clientX, e.clientY))

    	element.style.position = 'relative';
        element.style.top      = '0';
        element.style.left     = '0';
    	document.onmousemove   = null;
    	document.onmouseup     = null;
	}

	function mouseMove(e){
		e = e || window.event;
    	e.preventDefault();

        moveShadowBox(boxShadow, getMouseCoordinateTranslateToGrid(e.clientX, e.clientY))

    	element.style.top  = (e.clientY - y) + 'px';
        element.style.left = (e.clientX - x) + 'px';
	}
}
