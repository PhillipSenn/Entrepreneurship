init()
function init() {
	var local = {}

	window.fadeIn = false
	local.endpoint = 'users'
	local.qs = {}
	local.qs.ql = "select uuid,username where usertype='admin'"
	apigee.request(local, ready)
}

function ready(error, response) {
	$('#users').empty()
	for (var i=0; i<response.count; i++) {
		var user = response.getEntities()[i]
		$('#users').append('<li><a href="AdminEdit.cfm?adminID='
			+ response.list[i][0]
			+ '">'
			+ response.list[i][1]
			+ '</a>'
			+ '</li>')
	}
	$('main').fadeTo('slow',1)
}
/*
	users.fetch(success,failure)
	while (users.hasNextEntity()) {
		var nextEntity = users.getNextEntity()
	}




	for (var i=0; i<response.entities.length; i++) {
		var user = response.getEntities()[i]
		$('#users').append('<li><a href="AdminEdit.cfm?adminID='
			+ user.uuid
			+ '">'
			+ user.username
			+ '</a>'
			+ '</li>')
	}

*/
