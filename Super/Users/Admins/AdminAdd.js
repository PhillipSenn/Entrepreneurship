$(dom.save).on('click', save)
function save() {
	local = {}
	local.username = $('#username').val()
	local.email = $('#email').val()
	local.usrpassword = $('#usrpassword').val()
	local.usertype = 'admin'
	users.addEntity(local, saved)
}

function saved(error, response) {
	if (error) {
		alert(response.error_description)
	} else {
		location.replace('Admins.cfm')
	}
}
