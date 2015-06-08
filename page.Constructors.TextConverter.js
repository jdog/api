PAGE.add("Constructors.TextConverter", function() {
	return {
		toJSONFriendly : function(source) {
			// oh the cheese of it
			var firstPass = JSON.stringify(source)
			if (!firstPass) return
			return firstPass.replace(/</g, "&#x3c;").replace(/>/g, "&#x3e;").replace(/\\t/g, " ").replace(/&/g, "&amp;")
		}
	}

})
