<cfinclude template="/Inc/header.cfm">
<label  for ="username">Admin's Name:</label>
<textarea class="form-control" id="username"></textarea>
<label for="email">Email:</label>
<input class="form-control" id ="email">
<label for="usrpassword">Password:</label>
<input class="form-control" id ="usrpassword">
<p>
	<a id="cancel" href="Admins.cfm">Cancel</a>
	<a id="save">Update</a>
	<a id="destroy">Delete</a>
</p>
<cfinclude template="/Inc/footer.cfm">
