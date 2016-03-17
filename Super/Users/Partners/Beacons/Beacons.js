dom.save.attr('href',dom.save.attr('href') + getURL('partnerID'))
dom.cancel.attr('href',dom.cancel.attr('href') + getURL('partnerID'))

init()
function init() {
	var local = {}

	window.fadeIn = false
	local.endpoint = 'beacons'
	local.qs = {}
	local.qs.ql = "select uuid,beaconName,beaconDesc,partnerID" // where partnerID='" + getURL('partnerID') + "'"
	apigee.request(local, ready)
}

function ready(error, response) {
	var tr = ''

	for (var i=0; i<response.count; i++) {
		a  = '<a href="BeaconEdit.cfm?beaconID=' + response.list[i][0] + '">' // This is apigee's uuid. The beaconID is the uuid that's on the beacon itself.
		a += response.list[i][1]
		a += '</a>'
		td  = '<td>' + a + '</td>'
		td += '<td>' + response.list[i][2] + '</td>'
		td += '<td>' + response.list[i][3] + '</td>'
		tr += '<tr>' + td + '</tr>'
	}
	$('#beacons').append(tr)
	$('main').fadeTo('slow',1)
}


	
legend()
function legend() {
	local = {}
	local.type = 'users'
	local.partnerID = getURL('partnerID')
	apigee.getEntity(local, partnerReady)
}

function partnerReady(error, response, msg) {
	if (error) { 
		dom.msg.text(error.message)
		log(error)
		log(response)
		log(msg)
		debugger
	} else { 
		$('legend').append(response.getEntities()[0].username)
	} 
}
