<cfinclude template="/Inc/header.cfm">
<label for="username">Partner Name:</label>
<input class="form-control" autofocus id="username">
<label for="email">Email:</label>
<input class="form-control" id ="email" type="email">
<label for="password">Password:</label>
<input class="form-control" id="password">
<label for="address">Street Address:</label>
<textarea class="form-control" id="address"></textarea>
<label for="latitude">Latitude:</label>
<input class="form-control" id="latitude">
<label for="longitude">Longitude:</label>
<input class="form-control" id="longitude">
<p>
	<a id="cancel" href="Partners.cfm">Cancel</a>
	<a id="save">Add</a>
</p>
<cfinclude template="/Inc/footer.cfm">
