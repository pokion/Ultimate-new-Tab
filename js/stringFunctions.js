function trimStringAndReturnNumber(string, numberOfCharacters){
	return Number(string.substring(0, string.length - numberOfCharacters))
}