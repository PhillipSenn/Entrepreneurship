init()

function init() {
	var local = {}
	local.type = 'beacons'
	local.uuid = getURL('beaconID')
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
		$('#beaconName').val(response.getEntities()[0].beaconName)
		$('#beaconDesc').val(response.getEntities()[0].beaconDesc)
		$('#latitude').val(response.getEntities()[0].latitude)
		$('#longitude').val(response.getEntities()[0].longitude)
		window.partnerID = response.getEntities()[0].partnerID
		var x = dom.cancel.attr('href')
		dom.cancel.attr('href',x + window.partnerID)
	} 
}

$(dom.save).on('click',save)
function save() {
	var local = {}

	dom.msg.removeClass('label-danger')
	local.client = apigee
	local.data = {}
	local.data.type = 'beacons'
	local.data.uuid = getURL('beaconID')
	local.data.beaconName = $('#beaconName').val()
	local.data.beaconDesc = $('#beaconDesc').val()
	local.data.latitude = $('#latitude').val()
	local.data.longitude = $('#longitude').val()
	var beacon = new Apigee.Entity(local)
	beacon.save(saved)
}

function saved(error,response,msg) {
	if (error) { 
		dom.msg.text(error.message).addClass('label-danger')
		log(error)
		log(response)
		log(msg)
		debugger
	} else { 
		location.replace('Beacons.cfm?partnerID=' + window.partnerID) // partnerID is just a whim in case I want to indicate which parter was just edited using css or something.
	}
}

$(document).on('click','#destroy', destroy)
function destroy() {
	var local = {}
	
	dom.msg.removeClass('label-danger')
	if (confirm('Destroy this beacon?')) {
		local.client = apigee
		local.data = {}
		local.data.type = 'beacons'
		local.data.uuid = getURL('beaconID')
		var beacon = new Apigee.Entity(local)
		beacon.destroy(destroyed)
	}
}

function destroyed(error,response) {
	if (error) {
		dom.msg.text(error.message).addClass('label-danger')
	} else {
		location = 'Beacons.cfm?partnerID=' + window.partnerID
	}
}
