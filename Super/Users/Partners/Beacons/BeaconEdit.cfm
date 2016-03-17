<cfinclude template="/Inc/header.cfm">
<fieldset>
	<legend>Edit a beacon</legend>
	<label for="beaconName">Name:</label>
	<input class="form-control" id="beaconName">
	<label for="beaconDesc">Description:</label>
	<textarea class="form-control" id="beaconDesc"></textarea>
	<label for="latitude">Latitude:</label>
	<input class="form-control" id="latitude">
	<label for="longitude">Longitude:</label>
	<input class="form-control" id="longitude">
</fieldset>
<p>
	<a id="cancel" href="Beacons.cfm?partnerID=">Cancel</a>
	<a id="save">Update</a>
	<a id="destroy">Destroy</a>
</p>
<cfinclude template="/Inc/footer.cfm">
