partnerID is the apigee uuid for a user with usertype='partner'
adminID is the apigee uuid for a user with usertype='admin'
beaconID is the apigee uuid for a beacon
beaconName is the uuid that's in the beacon itself.

users.addEntity
users.fetch
users.getNextEntity
users.hasNextEntity
request

response.getEntities()


local.client = apigee
local.data = {}
local.data.type = 'users'
local.data.uuid = getURL('uuid')
dom.msg.removeClass('label-danger')
var result = new Apigee.Entity(local)
result.destroy



local.endpoint = 'beacons'
local.qs = {}
local.qs.ql = "partnerID='" + getURL('partnerID') + "'"
apigee.request(local, ready)
