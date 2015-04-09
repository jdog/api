PAGE.add("Docs.Modules.urlParams", {
	"jDog" : "version 1.0"
	, "Methods" : [
		{
			"Name" : "urlParams"
			, "Usage" : [
				[ false, "var params = PAGE.Modules.urlParams" ]
				, [ false, "var params = PAGE.exists('Modules.urlParams')" ]
			]
			, "Tags" : [ "Module", "urlParams" ]
			, "Source" : [ "page.Modules.urlParams.js" ]
			, "Parent" : [ "Modules" ]
			, "Examples" : [
				"// http://localhost:8080/index.html#fard=true\nPAGE.Modules.urlParams.hashParams\nObject {fard: \"true\"}\n\nlocation.hash = \"#duke=true\"\n\"#duke=true\"\n\n// notice that changing the hash does not recheck the hashParams\nPAGE.Modules.urlParams.hashParams\nObject {fard: \"true\"}\n\n// that must be done manually like so\nPAGE.Modules.urlParams.getHashProperties()\nObject {duke: \"true\"}\n\nPAGE.Modules.urlParams.hashParams\nObject {duke: \"true\"}\n\nPAGE.Modules.urlParams.hashParamsCount\n1"
			]
			, "Description" : "Module to read in all location hash and query parameters."
			, "Definitions" : {
				"hashParams" : "Object. Key value pairs of hashtag parameters in the URL."
				, "hashPramsCount" : "Number. Count of hashtag parameters in the URL."
				, "searchParams" : "Object. Key value pairs of the query parameters in the URL."
				, "searchParamsCount" : "Number. Count of the query parameters in the URL."
				, "getHashProperties" : "Function. Returns hashParams."
				, "getSearchProperties" : "Function. Returns searchParams."
			}
		}
	]
})
