<script src="/cdn/bootstrap-4.0.0-alpha.2/docs/assets/js/vendor/tether.min.js"></script>
<script src="/cdn/bootstrap-4.0.0-alpha.2/dist/js/bootstrap.js"></script>

<cfscript>
if (FileExists(request.dirName & request.cgiName & '.js')) {
	echo('<script src="' & GetFileFromPath(request.cgiName) & '.js"></script>' & request.LF) 
}
</cfscript>
<script src="/Entrepreneurship/Inc/End.js"></script>
</body>
</html>
