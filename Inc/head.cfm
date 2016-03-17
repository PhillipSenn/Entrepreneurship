<!DOCTYPE html>
<html>
<head>
<cfscript>
if (NOT IsDefined('url.css')) {
	echo('<meta name="viewport" content="width=device-width, initial-scale=1">' & request.LF)
	echo('<link rel="stylesheet" href="/cdn/bootstrap-4.0.0-alpha.2/dist/css/bootstrap.css">' & request.LF)
	echo('<link rel="stylesheet" href="/Entrepreneurship/Inc/Entrepreneurship.css">' & request.LF)
	echo('<link rel="shortcut icon" href="/Entrepreneurship/Inc/ico/light_bulb_on.ico">' & request.LF)
	if (FileExists(request.dirName & request.cgiName & '.css')) {
		echo('<link rel="stylesheet" href="' & request.cgiName & '.css">' & request.LF)
	}
}
</cfscript>
<title>Entrepreneurship</title>
