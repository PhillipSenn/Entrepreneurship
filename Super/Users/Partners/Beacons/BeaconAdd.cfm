<cfinclude template="/Inc/header.cfm">
<fieldset>
	<legend>Add a beacon</legend>
	<label for="beaconName">UUID:</label>
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
	<a id="save">Add</a>
</p>
<cfinclude template="/Inc/footer.cfm">
