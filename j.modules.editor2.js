J.load(
	"j.Constructors.dataBind.js"
	, "page.Constructors.APIMethod.js"
	, "page.ColorizeMap.javascript.js"
	, "page.ColorizeMap.jDog.js"
	, "page.ColorizeMap.generic.js"
	, "page.Constructors.ColorizeCode.js"
  , "page.clone.js"
)

J.addWait(
	"Modules.editor2"
	, [
		"Constructors.DataBind"
		, "DomContentLoaded"
		, "Constructors.ColorizeCode"
	]
	, function(ref) {

		var e = {
			TextArea : document.getElementById("TextArea")
			, Output : document.getElementById("Output")
			, Example : document.getElementById("Example")
		}

		var dog = {
			e : e
			, data : { 
				Text : "var dog = { }"
			}
			, db : null
		}

		var db

		function init() {

			db = dog.db = ref.DataBind(dog.data)
				.bind(e.TextArea, "Text")
				.bind(e.Output, "Output")
				.bind(e.Example, "Example")


			setValues(dog.data.Text)

			e.TextArea.onkeyup = change
			e.TextArea.onpaste = change

		}

		function setValues(value) {
			var source = ref.ColorizeCode(value).Source
			db.set("Output", toJSONFriendly( value ))
			db.set("Example", source)
		}

		function change(event) {
			var value = event.target.value
			setValues(value)
		}

		function toJSONFriendly(text) {
			// oh the cheese of it
			var firstPass = JSON.stringify(text)
			if (!firstPass) return
			return firstPass.replace(/</g, "&#x3c;").replace(/>/g, "&#x3e;").replace(/\\t/g, " ").replace(/&/g, "&amp;")
		}

		init()

		return dog

	})
