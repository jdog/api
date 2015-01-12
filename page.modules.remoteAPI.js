PAGE.add("Modules.remoteAPI", (function() {

	PAGE.loadStyle(
		"//jdog.github.io/api/style.css"
		, "//jdog.github.io/api/sidePanel.css"
	)

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

	return true

}()))
