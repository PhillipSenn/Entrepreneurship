function getURL(argument) {
	var result = ''
	var hash
	var hashes = location.href.slice(
		location.href.indexOf('?') + 1
	).split('&')
	for(var i = 0; i < hashes.length; i++)	{
		hash = hashes[i].split('=')
		if (hash[0].toUpperCase() === argument.toUpperCase()) {
			result = hash[1]
		}
	}
	return result
}