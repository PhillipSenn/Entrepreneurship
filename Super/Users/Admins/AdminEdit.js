init()
function init() {
	var local = {}
	local.type = 'users'
	local.uuid = getURL('adminID')
	apigee.getEntity(local, ready)
}

function ready(error, response, msg) { 
	if (error) { 
		dom.msg.text(error.message).addClass('label-danger')
//		dom.main.text(JSON.stringify(msg))
		log(error)
		log(response)
		log(msg)
		debugger
	} else {
		$('#username').val(response.getEntities()[0].username)
		$('#email').val(response.getEntities()[0].email)
		$('#usrpassword').val(response.getEntities()[0].usrpassword)
	} 
}

$(document).on('click','#save',save)
function save() {
	var local = {}
	local.client = apigee
	local.data = {}
	local.data.type = 'users'
	local.data.uuid = getURL('adminID')
	local.data.username = $('#username').val()
	local.data.email = $('#email').val()
	local.data.usrpassword = $('#usrpassword').val()
	
	var user = new Apigee.Entity(local)
	user.save(saved)
}

function saved(error,response,msg) {
	if (error) {
		dom.msg.text(error.message)
		log(error)
		log(response)
		log(msg) // JSON.stringify(msg) // msg.replace(/,/g,/, /)
		debugger
	} else { 
		location.replace('Admins.cfm?adminID=' + getURL('adminID')) // The adminID part is just a whim in case I want to indicate which parter was just edited using css or something.
	}
}

$(document).on('click','#destroy', destroy)
function destroy() {
	var local = {}
	
	dom.msg.removeClass('label-danger')
	if (confirm('Destroy this admin?')) {
		local.client = apigee
		local.data = {}
		local.data.type = 'users'
		local.data.uuid = getURL('adminID')
		var user = new Apigee.Entity(local)
		user.destroy(destroyed)
	}
}

function destroyed(error,response) {
	if (error) {
		dom.msg.text(error.message).addClass('label-danger')
	} else {
		location = 'Admins.cfm'
	}
}
