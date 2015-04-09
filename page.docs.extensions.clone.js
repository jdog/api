PAGE.add("Docs.Extensions.clone", {
	"jDog" : "version 1.0"
	, "Methods" : [
		{
			"Name" : "ext.clone"
			, "Usage" : [
					[ "sourceObj", "newObject"]
					, [ "any type", "same type"]
				]
			, "Tags" : [ "Constructor", "extend", "extensions" ]
			, "Source" : [ "page.extend.clone.js" ]
			, "Parent" : [ "Extensions" ]
			, "Examples" : [ 
				"var nested = {\n  lots : \"hello\"\n  , evenMore : new Date()\n}\n\nvar obj = {\n  myStuff : new Date()\n  , nested : nested\n  , more : []\n}\n\nvar copy = PAGE.ext.clone(obj, {})"
			]

			, "Description" : "Objects are passed by reference in javaScript instead of value. This can cause complexity when dealing with nested objects. The following code creates an easy way to clone an object recursively. There are many out there, this one works pretty well. Some neglect to clone RegExp objects, this one does not."
			, "Definitions" : {
				"sourceObj" : "The thing to clone"
				, "newObject" : "Where to clone it to"
			}
			, "Returns" : "undefined"
		}
	]
})
