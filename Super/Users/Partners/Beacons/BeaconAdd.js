dom.cancel.attr('href',dom.cancel.attr('href') + getURL('partnerID'))

$(dom.save).on('click', save)
function save() {
	local = {}

	local.beaconName = $('#beaconName').val()
	local.beaconDesc = $('#beaconDesc').val() 
	local.latitude = $('#latitude').val()
	local.longitude = $('#longitude').val()
	local.partnerID = getURL('partnerID')
	beacons.addEntity(local, saved)
}

function saved(error, response) {
	if (error) {
		dom.msg.text(response.error_description)
	} else {
		location.replace('Beacons.cfm?partnerID=' + getURL('partnerID'))
	}
}
