window.fadeIn = true
window.dom = {} // Document Object Model
dom.msg = $('#msg')
dom.main = $('main')
dom.save = $('#save')
dom.cancel = $('#cancel')

window.log = function(arg) {
	if (this.console) {
		console.log(arg)
	}
}

window.apigee = {} 
window_apigee()
function window_apigee() {
	var local = {}
	local.orgName = 'walkby'
	local.appName = 'sandbox'
	window.apigee = new Apigee.Client(local) // client:apigee
}

window.users = {}
window_users()
function window_users() {
	var local = {}
	local.client = apigee
	local.type = 'users' 
	window.users = new Apigee.Collection(local)
}

window.beacons = {}
window_beacons()
function window_beacons() {
	var local = {}
	local.client = apigee
	local.type = 'beacons' 
	window.beacons = new Apigee.Collection(local)
}

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
			if (typeof result === 'undefined') {
				result = true
			}
		}
	}
	return result
}

if (getURL('logout')) {
	localStorage.removeItem('username')
	localStorage.removeItem('usertype')
}

if (localStorage.usertype === 'admin') {
	$('nav').append(
			' / <a class="nav-item nav-link" href="/Entrepreneurship/Super/Super.cfm">Admin</a>'
	)
	$('nav').append('<a class="nav-item nav-link pull-xs-right" href="/Entrepreneurship?logout">' + localStorage.username + '</a>')
} else if (localStorage.usertype === 'partner') {
	$('nav').append(' / <a class="nav-item nav-link" href="/Entrepreneurship/Partner/Partner.cfm">Partner Admin</a>')
	$('nav').append('<a class="nav-item nav-link pull-xs-right" href="/Entrepreneurship?logout">' + localStorage.username + '</a>')
} else {
	$('nav').append('<a class="nav-item nav-link pull-xs-right" href="/Entrepreneurship/Login.cfm">Login</a>')
	log('localStorage.usertype: ' + localStorage.usertype)
}

$('table').addClass('table table-hover table-striped table-bordered table-condensed')

// $(document).on('click','#destroy',confirmDestroy)

function confirmDestroy() {
	return window.confirm(this.title || 'Delete this record?')
}
$(document).on('mouseenter', '#destroy', mouseenterDestroy)
function mouseenterDestroy() {
	$(this).removeClass('btn-secondary').addClass('btn-danger')
}
$(document).on('mouseleave', '#destroy', mouseleaveDestroy)

function mouseleaveDestroy() {
	$(this).removeClass('btn-danger').addClass('btn-secondary')
}
$('#destroy').addClass('btn btn-secondary btn-lg')

$(document).on('mouseenter', '#cancel', mouseenterCancel)
function mouseenterCancel() {
	$(this).removeClass('btn-secondary').addClass('btn-primary')
	dom.save.removeClass('btn-primary')
}
$(document).on('mouseleave', '#cancel', mouseleaveCancel)

function mouseleaveCancel() {
	$(this).removeClass('btn-primary').addClass('btn-secondary')
	dom.save.addClass('btn-primary')
}
$('#cancel').addClass('btn btn-secondary btn-lg')
$('#save').addClass('btn btn-primary btn-lg')


// $(document).on('keydown',keydown)
function keydown(myEvent) {
	if (myEvent.which === 13) {
		$('.btn-primary').click()
	}
}

