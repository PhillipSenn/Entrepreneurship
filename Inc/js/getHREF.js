function getHref(argHref,argVar) {
	var result = ''
	var hash
	var hashes = argHref.slice(
		argHref.indexOf('?') + 1
	).split('&')
	for(var i = 0; i < hashes.length; i++)	{
		hash = hashes[i].split('=')
		if (hash[0].toUpperCase() === argVar.toUpperCase()) {
			result = hash[1]
		}
	}
	return result
}

