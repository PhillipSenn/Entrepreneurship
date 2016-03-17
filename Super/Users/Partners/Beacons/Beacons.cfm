<cfinclude template="/Inc/header.cfm">
<fieldset>
	<legend>Beacons for </legend>
	<table>
		<thead>
			<tr>
				<th>Beacon</th>
				<th>Description</th>
				<th>PartnerID (Debugging)</th>
			</tr>
		</thead>
		<tbody id="beacons">
		</tbody>
	</table>
</fieldset>
<p>
	<a id="cancel" href="../PartnerEdit.cfm?partnerID=">Cancel</a>
	<a id="save" href="BeaconAdd.cfm?partnerID=">Add</a>
</p>
todo: where partnerID = ? isn't working yet.
<cfinclude template="/Inc/footer.cfm">
