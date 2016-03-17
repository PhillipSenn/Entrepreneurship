
init()
function init() {
	var local = {}

	window.fadeIn = false
	local.endpoint = 'users'
	local.qs = {}
	local.qs.ql = "select uuid,username where usertype='partner'" // http://docs.apigee.com/app-services/content/querying-your-data
	apigee.request(local, ready)
}

function ready(error, response) {
	var listItems = ''

	for (var i=0; i<response.count; i++) {
		listItems += '<li><a href="PartnerEdit.cfm?partnerID='
			+ response.list[i][0]
			+ '">'
			+ response.list[i][1]
			+ '</a>'
			+ '</li>'
	}
	$('#users').empty().append(listItems)
	$('main').fadeTo('slow',1)
}
/*
	if you do a select * instead of select uuid,username, you would get entities instead of a list.
	for (var i=0; i<response.entities.length; i++) {
		var user = response.getEntities()[i]
		listItems += '<li><a href="PartnerEdit.cfm?partnerID='
			+ user.uuid
			+ '">'
			+ user.username
			+ '</a>'
			+ '</li>'
	}
*/
