$(dom.save).on('click', save)
function save() {
	local = {}

	local.username = $('#username').val()
	local.email = $('#email').val()
	local.usrPassword = $('#password').val()
	local.address = $('#address').val() 
	local.latitude = $('#latitude').val()
	local.longitude = $('#longitude').val()
	local.usertype = 'partner'
	users.addEntity(local, saved)
}

function saved(error, response) {
	if (error) {
		alert(response.error_description) // error description?
	} else {
		location.replace('Partners.cfm')
	}
}
