dom.email = $('#email')
dom.password = $('#password')

function login() {
	var local = {}
	local.endpoint = 'users'
	local.qs = {}
	local.qs.ql = "select username,usertype where email='" + dom.email.val() + "' AND usrpassword='" + dom.password.val() + "'"
	apigee.request(local, ready)
}

function ready(error, response) {
	if (error) {
		dom.msg.text(error.message) 
	} else if (response.count) {
		localStorage.username = response.list[0][0]
		localStorage.usertype = response.list[0][1]
		if (localStorage.usertype === 'admin') {
			location = '/Entrepreneurship/Super/Super.cfm'
		} else if (localStorage.usertype === 'partner') {
			window.location = '/Entrepreneurship/Partner/Partner.cfm'
		} else {
			alert('logic error')
			debugger
		}
	} else {
		dom.msg.text('Invalid email address or password.').addClass('label-danger')
	}
}

$(document).on('click','#login',login)
/*
dom.uuid = $('#email')
function login() {
	if (dom.uuid.val()) { // Sending it an empty uuid returned the first row.
		var usersOptions = { 
			 type:'users'
			,uuid:dom.uuid.val()
		};
		apigeeClient.getEntity(usersOptions, done)
	}
}
function done(error, response, msg) { 
	if (error) { 
		$('#msg').text('Can\' login.').addClass('label-danger')
		log(msg)
	} else { 
		localStorage.username = response.getEntities()[0].username
		localStorage.usertype = response.getEntities()[0].usertype
		if (localStorage.usertype === 'admin') {
			location = '/Entrepreneurship/Super/Super.cfm'
		} else if (localStorage.usertype === 'partner') {
			window.location = '/Entrepreneurship/Partner/Partner.cfm'
		} else {
			alert('logic error')
			debugger
		}
//		window.location = '/Entrepreneurship/Index.cfm'
	} 
}


//		localStorage.username = response.getEntities()[0].username
//		localStorage.usertype = response.getEntities()[0].usertype
*/

