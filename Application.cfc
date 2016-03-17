component {
this.name = 'Entrepreneurship'
this.ScriptProtect = 'all'
this.currentTemplatePath = GetCurrentTemplatePath()
this.currentTemplateDir  = GetDirectoryFromPath(this.currentTemplatePath)
this.mappings['/Inc'] = this.currentTemplateDir & 'Inc'
this.datasource = 'Entrepreneurship'

function onRequestStart() {
	setting showDebugOutput=false;
	request.LF = Chr(10)
	request.servletPath = getPageContext().getRequest().getServletPath()
	request.dirName = GetDirectoryFromPath(request.servletPath)
	request.cgiName = Left(request.servletPath,Len(request.servletPath)-4) // remove .cfm
	request.cgiName = ListLast(request.cgiName,'/') // get the pgm name only
}
}