//variables parameter is an Array that N index is a variable name and N+1 is a variable content to change
// For Example: [variableName, variableContent, VariableName, VariableContent, ...]
function setVariableCss(variables){
	//set N amout of css variable 
	let root = document.querySelector(':root');
	for(let variable = 0; variable < variables.length; variable += 2){
		root.style.setProperty(variables[variable], variables[variable + 1]);
	}
}

function getCssVariables(variables){
	let style 		 = getComputedStyle(document.body);
	let cssVariables = [];

	for(let variable of variables){
		cssVariables.push(style.getPropertyValue(variable));
	}

	return cssVariables;
}

//styles property is an Arraty that contain object
/*
	object must contain {target: (pointer to dom element), 
						 property: (property of css, only js notation),
						 value: (value of property)}
*/
function setStyle(styles){
	for(let style of styles){
		style.target.style[style.property] = style.value;
	}
}

function getAttributes(element, attributes){
	let arrayOfAttributesValue = [];

	for(let attribute of attributes){
		arrayOfAttributesValue.push(element.getAttribute(attribute)); 
	}

	return arrayOfAttributesValue;
}