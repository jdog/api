PAGE.add("Docs.Constructors.LocalStorage", {
	"jDog" : "version 1.0"
	, "Methods" : [
		{
			"Name" : "LocalStorage"
			, "Usage" : [
					[ false, "var ls = PAGE.Constructors.LocalStorage (string parentName, object options)" ]
				]
			, "Tags" : [ "Constructor", "extend", "extensions", "LocalStorage" ]
			, "Source" : [ "page.Constructors.LocalStorage.js" ]
			, "Parent" : [ "Constructors" ]
			, "Examples" : [
				"PAGE.addWait(\n \"Modules.demo\"\n , [\n  \"Constructors.LocalStorage\"\n ]\n , function(ref) {\n\n var dog = {\n  $html : $(\"#upsell\")\n  , sitePreferences : ref.LocalStorage(\"SitePreferences\")\n }\n\n function events() {\n  dog.$html.find(\".kill\").click(function() {\n   dog.sitePreferences.addSaveProperty(\"HideQBLUpsell\", true)\n   dog.$html.fadeOut()\n  })\n }\n\n function init() {\n\n  if (!PAGE.exists(\"data.HideQBLUpsell\", dog.sitePreferences)) {\n   events()\n   dog.$html.show()\n  } else {\n   dog.$html.hide()\n  }\n }\n\n init()\n\n return dog\n\n})\n"
			]

			, "Description" : "A normalized way of dealing with localStorage or cookie data as JSON formatted text. Each new instance represents a single property of the window.localStorage object. There are fallbacks in place for browsers that do not support local storage due to privacy restrictions such as Safari."
			, "Definitions" : {
				"parentName" : "The name of the window.localStorage property"
				, "options" : "Key value for options"
				, "options.useCookie" : "Boolean value, forces system to use cookies instead of localStorage"
				, "ls" : "Instantiated LocalStorage Object"
				, "ls.data" : "Object. Data store of localStorage"
				, "ls.addSaveProperty" : "Function (string name, string || object || boolean value, function callback); returns ls"
				, "ls.deleteProperty" : "Function (string name, function callback); return ls"
				, "ls.loadAll" : "Function (function callback); returns ls"
				, "ls.reloadFromLocalStorage" : "Function (); returns ls"
				, "ls.replaceAll" : "Function (object replaceWith); returns ls"
				, "ls.saveAll" : "Function (function callback); returns ls"
			}
			, "Returns" : "Object [LocalStorage]"
		}
		, {
			"Name" : "ls.data"
			, "Usage" : [
					[ false, "var ls = PAGE.Constructors.LocalStorage (string parentName, object options)" ]
					, [ false, "var data = ls.data" ]
				]
			, "Tags" : [ "Method", "Constructors", "LocalStorage" ]
			, "Source" : [ "page.Constructors.LocalStorage.js" ]
			, "Parent" : [ "Constructors" ]
			, "Description" : "Returns the key value pairs of all properties stored in the object. This is one level deeper than the window.localStorage object."
			, "Examples" : [
				"// console\nvar ls = PAGE.Constructors.LocalStorage(\"Example\")\nundefined\n\nls.addSaveProperty(\"Save1\", { hello : \"world\" })\ne {data: Object, name: \"Example\", cookie: undefined, saveAll: function, replaceAll: function…}\n\nls.data\nObject {Save1: Object, LastUpdate: \"Thu Jan 01 2015 18:50:05 GMT-0800 (PST)\"}LastUpdate: \"Thu Jan 01 2015 18:50:05 GMT-\n0800 (PST)\"Save1: Objecthello: \"world\"__proto__: Object__proto__: Object\n\nls.data.Save1\nObject {hello: \"world\"}\n\nwindow.localStorage.Example\n\"{\"Save1\":{\"hello\":\"world\"},\"LastUpdate\":\"Thu Jan 01 2015 18:50:05 GMT-0800 (PST)\"}\""
			]
			, "Returns" : "Object [key / value]"
		}
		, {
			"Name" : "ls.addSaveProperty"
			, "Usage" : [
					[ false, "var ls = PAGE.Constructors.LocalStorage (string parentName, object options)" ]
					, [ false, "ls.addSaveProperty(name, value, callback)"]
					, [ false, "ls.addSaveProperty('Save1', { hello : 'world' })" ]
				]
			, "Tags" : [ "Method", "Constructors", "LocalStorage" ]
			, "Source" : [ "page.Constructors.LocalStorage.js" ]
			, "Parent" : [ "Constructors" ]
			, "Description" : "Immediately adds the named property"
			, "Examples" : [
				"var ls = PAGE.Constructors.LocalStorage(\"MySample\")\nundefined\n\nls.addSaveProperty(\"Demo123\", \"hello world\")\nobject\n\nls.data.Demo123\n\"hello world\""
			]
			, "Returns" : "Object [key / value]; ls"
		}
		, {
			"Name" : "ls.deleteProperty"
			, "Usage" : [
					[ false, "var ls = PAGE.Constructors.LocalStorage (string parentName, object options)" ]
					, [ false, "ls.deleteProperty('Save1')" ]
				]
			, "Tags" : [ "Method", "Constructors", "LocalStorage" ]
			, "Source" : [ "page.Constructors.LocalStorage.js" ]
			, "Parent" : [ "Constructors" ]
			, "Description" : "Deletes the property."
			, "Examples" : [
				"ls.deleteProperty(\"Save1\")\ne {data: Object, name: \"Example\", cookie: undefined, saveAll: function, replaceAll: function…}\n\nls.data.Save1\nundefined"
			]
			, "Returns" : "Object [LocalStorage]"
		}
		, {
			"Name" : "ls.loadAll"
			, "Usage" : [
					[ false, "var ls = PAGE.Constructors.LocalStorage (string parentName, object options)" ]
					, [ false, "ls.loadAll(callback)"]
				]
			, "Tags" : [ "Method", "Constructors", "LocalStorage" ]
			, "Source" : [ "page.Constructors.LocalStorage.js" ]
			, "Parent" : [ "Constructors" ]
			, "Description" : "Loads data from window.localStorage if there, or from cookie if fallback."
			, "Examples" : [
				"var ls = PAGE.Constructors.LocalStorage(\"MySample\")\nundefined\n\nls.data\nObject {Demo123: \"hello world\", LastUpdate: \"Fri Jan 02 2015 09:15:07 GMT-0800 (PST)\"}\n\n// this was added by a previous example\nlocalStorage.MySample\n\"{\"Demo123\":\"hello world\",\"LastUpdate\":\"Fri Jan 02 2015 09:15:07 GMT-0800 (PST)\"}\"\n\n// see, this is the how the the object gets translated (JSON.stringify)\nlocalStorage.MySample = '{\"Demo123\":\"hello world 1234\",\"LastUpdate\":\"Fri Jan 02 2015 09:15:07 GMT-0800 (PST)\"}'\n\"{\"Demo123\":\"hello world 1234\",\"LastUpdate\":\"Fri Jan 02 2015 09:15:07 GMT-0800 (PST)\"}\"\n\n// the point of loadAll is to be able to read changes to the localStorage object\n// made outside of the LocalStorage constructor... usually you wont need it\n// but watch this, notice how the ls.data.Demo123 does not reflect it\n\nls.data.Demo123\n\"hello world\"\n\nls.loadAll()\ne {data: Object, name: \"MySample\", cookie: undefined, saveAll: function, replaceAll: function…}\n\nls.data.Demo123\n\"hello world 1234\""
			]
			, "Returns" : "Object [key / value]; ls"
		}
		, {
			"Name" : "ls.reloadFromLocalStorage"
			, "Usage" : [
					[ false, "depricated" ]
				]
			, "Tags" : [ "Method", "Constructors", "LocalStorage" ]
			, "Source" : [ "page.Constructors.LocalStorage.js" ]
			, "Parent" : [ "Constructors" ]
			, "Description" : "Loads data from window.localStorage."
		}
		, {
			"Name" : "ls.replaceAll"
			, "Usage" : [
					[ false, "var ls = PAGE.Constructors.LocalStorage (string parentName, object options)" ]
					, [ false, "ls.replaceAll(object)"]
				]
			, "Tags" : [ "Method", "Constructors", "LocalStorage" ]
			, "Source" : [ "page.Constructors.LocalStorage.js" ]
			, "Parent" : [ "Constructors" ]
			, "Description" : "Replaces everything in the object with the new properties"
			, "Examples" : [
				"var ls = PAGE.Constructors.LocalStorage(\"MySample\")\nundefined\n\n// this data was here from a previous example\nls.data\nObject {Demo123: \"hello world 1234\", LastUpdate: \"Fri Jan 02 2015 09:15:07 GMT-0800 (PST)\"}\n\n// this will replace it with the new values\nls.replaceAll({ Demo456 : true, Demo567 : false })\ne {data: Object, name: \"MySample\", cookie: undefined, saveAll: function, replaceAll: function…}\n\nls.data\nObject {Demo456: true, Demo567: false, LastUpdate: \"Fri Jan 02 2015 10:01:44 GMT-0800 (PST)\"}\n\n// keep in mind it only affects the MySample property of window.localStorage\nwindow.localStorage.MySample\n\"{\"Demo456\":true,\"Demo567\":false,\"LastUpdate\":\"Fri Jan 02 2015 10:01:44 GMT-0800 (PST)\"}\""
			]
		}
		, {
			"Name" : "ls.saveAll"
			, "Usage" : [
					[ false, "var ls = PAGE.Constructors.LocalStorage (string parentName, object options)" ]
					, [ false, "ls.replaceAll(object)"]
				]
			, "Tags" : [ "Method", "Constructors", "LocalStorage" ]
			, "Source" : [ "page.Constructors.LocalStorage.js" ]
			, "Parent" : [ "Constructors" ]
			, "Description" : "Updates the window.localStorage object based on the values in the ls.data objects."
			, "Examples" : [
				"var ls = PAGE.Constructors.LocalStorage(\"MySample\")\nundefined\n\nls.data\nObject {Demo456: true, Demo567: false, LastUpdate: \"Fri Jan 02 2015 10:01:44 GMT-0800 (PST)\"}\n// ls.saveAll is used when you want to modify the ls.data object directly without saving each time\n// the data object can be deep rooted into your app, kept as the State machine for your app. \n// in such a circumstance you might want to hold off saving out to the window.localStorage object\n\nls.data.FriedEggs = \"yummy\"\n\"yummy\"\n\nls.data[\"Sam I am\"] = false\nfalse\n\nls.data\nObject {Demo456: true, Demo567: false, LastUpdate: \"Fri Jan 02 2015 10:01:44 GMT-0800 (PST)\", FriedEggs: \"yummy\", Sam I am: false}\n\nwindow.localStorage.MySample\n\"{\"Demo456\":true,\"Demo567\":false,\"LastUpdate\":\"Fri Jan 02 2015 10:01:44 GMT-0800 (PST)\"}\"\n// see the new stuff isn't there yet, because it hasn't been saved yet\n\nls.saveAll()\ne {data: Object, name: \"MySample\", cookie: undefined, saveAll: function, replaceAll: function…}\n\nwindow.localStorage.MySample\n\"{\"Demo456\":true,\"Demo567\":false,\"LastUpdate\":\"Fri Jan 02 2015 10:01:44 GMT-0800 (PST)\",\"FriedEggs\":\"yummy\",\"Sam I am\":false}\"\n// and now it is "
			]
		}
	]
})
