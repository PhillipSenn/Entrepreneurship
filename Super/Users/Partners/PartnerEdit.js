var beacons = $('#beacons').attr('href')
$('#beacons').attr('href',beacons + getURL('partnerID'))

init()
function init() {
	var local = {}
	local.type = 'users'
	local.uuid = getURL('partnerID')
	apigee.getEntity(local, ready)
}

function ready(error, response, msg) { 
	if (error) { 
		dom.msg.text(error.message)
		log(error)
		log(response)
		log(msg)
		debugger
	} else { 
		$('#username').val(response.getEntities()[0].username)
		$('#email').val(response.getEntities()[0].email)
		$('#password').val(response.getEntities()[0].usrPassword)
		$('#address').val(response.getEntities()[0].address)
		$('#latitude').val(response.getEntities()[0].latitude)
		$('#longitude').val(response.getEntities()[0].longitude)
	} 
}

$(document).on('click','#save',save)
function save() {
	var local = {}

	dom.msg.removeClass('label-danger')
	local.client = apigee
	local.data = {}
	local.data.type = 'users'
	local.data.usertype = 'partner'
	local.data.uuid = getURL('partnerID')
	local.data.username = $('#username').val()
	local.data.email = $('#email').val()
	local.data.usrPassword = $('#password').val()
	local.data.address = $('#address').val()
	local.data.latitude = $('#latitude').val()
	local.data.longitude = $('#longitude').val()
	var user = new Apigee.Entity(local)
	user.save(saved)
}

function saved(error,response,msg) {
	if (error) { 
		dom.msg.text(error.message).addClass('label-danger')
		log(error)
		log(response)
		log(msg)
		debugger
	} else { 
		location.replace('Partners.cfm?partnerID=' + getURL('partnerID')) // partnerID is just a whim in case I want to indicate which parter was just edited using css or something.
	}
}

$(document).on('click','#destroy', destroy)
function destroy() {
	var local = {}
	
	dom.msg.removeClass('label-danger')
	if (confirm('Destroy this partner?')) {
		local.client = apigee
		local.data = {}
		local.data.type = 'users'
		local.data.uuid = getURL('partnerID')
		var user = new Apigee.Entity(local)
		user.destroy(destroyed)
	}
}

function destroyed(error,response) {
	if (error) {
		dom.msg.text(error.message).addClass('label-danger')
	} else {
		location = 'Partners.cfm'
	}
}
