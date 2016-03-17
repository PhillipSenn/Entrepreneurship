<cfinclude template="/Inc/header.cfm">
<label for = "username">Partner Name:</label>
<textarea id="username" class="form-control" autofocus></textarea>
<label for="email">Email:</label>
<input class="form-control" id ="email" type="email">
<label for="password">Password:</label>
<input class="form-control" id="password">
<label for = "address">Address</label>
<textarea class="form-control" id="address"></textarea>
<label for="latitude">Latitude</label>
<input class="form-control" id ="latitude">
<label for="longitude">Longitude</label>
<input class="form-control" id ="longitude">
<p>
	<a id="cancel" href="Partners.cfm">Cancel</a>
	<a id="save">Update</a>
	<a id="destroy">Destroy</a>
</p>
<p>
	<a id="beacons" href="Beacons/Beacons.cfm?partnerID=">Beacons</a>
</p>
<cfinclude template="/Inc/footer.cfm">
