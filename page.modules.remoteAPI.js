PAGE.add("Modules.remoteAPI", (function() {

	var dog = {
	}

	PAGE.loadScript(
		"page.extend.batchCallback.js"
		, "page.Constructors.APIMethod.js"
		, "page.Constructors.APIIndex.js"
		, "page.functions.createLegend.js"
		, "page.ColorizeMap.javascript.js"
		, "page.ColorizeMap.jDog.js"
		, "page.ColorizeMap.generic.js"
		, "page.Constructors.ColorizeCode.js"
		, "page.clone.js"
		, "page.modules.dom.js"
		, true)

	return dog

}()))
