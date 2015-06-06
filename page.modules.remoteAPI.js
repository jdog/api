// PAGE.loadStyle(
// 	"//jdog.github.io/api/style.css"
// 	, "//jdog.github.io/api/sidePanel.css"
// )

PAGE.loadScript(
	"//jdog.github.io/api/page.extend.batchCallback.js"
	, "//jdog.github.io/api/page.ajax.js"
	, "//jdog.github.io/api/page.Constructors.APIMethod.js"
	, "//jdog.github.io/api/page.Constructors.APIIndex.js"
	, "//jdog.github.io/api/page.functions.createLegend.js"
	, "//jdog.github.io/api/page.ColorizeMap.javascript.js"
	, "//jdog.github.io/api/page.ColorizeMap.jDog.js"
	, "//jdog.github.io/api/page.ColorizeMap.generic.js"
	, "//jdog.github.io/api/page.Constructors.ColorizeCode.js"
	, "//jdog.github.io/api/page.clone.js"
	, "//jdog.github.io/api/page.modules.dom.js"
	, "//jdog.github.io/api/page.Modules.navigation.js"
	, true)

PAGE.addWait(
	"Modules.remoteAPI"
	, [
		"ajax"
		, "Constructors.APIMethod" 
		, "ext.BatchCallback" 
		, "Modules.dom"
		// , "ready" // dom is loaded
	]
	, function(ref) {

	var f = new Function()
	var dog = {
		data : {}
		, methods : []
		, sections : []
		, e_root : document.querySelector("#API")
		, e_legend : document.querySelector("#APILegend")
		, legend : { }
		, batch : undefined
		, apiIndex : undefined

		, build : f
		, createSection : f
		, legend : f
		, clickCurrent : f
		, buildAllSections : f
		, ref : ref
	}
	, J = jDog


	// builds out by the an array
	var build = dog.build = function build(e_root, methods) {

		for (var x in methods) {
			// adds it to the methods in whatever order it comes in careful
			dog.methods.push(
				ref.APIMethod(e_root, methods[x])
			)
		}

	}

	var createSection = dog.createSection = function createSection(path) {

		var e_section = document.createElement("div")
			, section = []

		// adds it in the order it comes
		dog.sections.push(section)

		dog.e_root.appendChild(e_section)

		PAGE.wait(path, function(data) {

			for (var x in data.Methods) section.push( data.Methods[x] )
			build(e_section, data.Methods)
			dog.batch.tryFinish()
		})
	}

	var legend = dog.legend = function legend(callback) {
		PAGE.wait(
			"Functions.createLegend"
			, "Constructors.APIIndex"
			, ref
			, function() {

				ref.createLegend(ref.dom, dog)
				dog.apiIndex = ref.APIIndex(dog.e_legend, dog.methods, dog.e_root)

				;(callback || f)()

			})
	}

	// ensures that the element exists before clicking
	var clickCurrent = dog.clickCurrent = function clickCurrent(hash) {
		var e_currentLink = dog.e_legend.querySelector("a[href='" + hash + "']")
		, e_currentMethod = document.getElementById(hash.substr(1))

		if (e_currentLink && e_currentMethod)
			e_currentLink.dispatchEvent(new Event("click"))
		else
			setTimeout(function() {
				clickCurrent(hash)
			}, 500)
	}

	var buildAllSections = dog.buildAllSections = function buildAllSections(arr) {
		dog.batch = new ref.BatchCallback(arr.length, function() {

			legend(function() {

				if (location.hash)
					clickCurrent(location.hash)
				else
					dog.e_legend.querySelector("a").dispatchEvent(new Event("fakeClick"))

			})

		})

		// page should now load progressively
		// built this way to improve perceived speed
		for (var x in arr) createSection( arr[x] )
	}

	return dog

})
