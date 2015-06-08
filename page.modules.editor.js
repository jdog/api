J.load(
	"page.extend.events.js"
	, "page.constructors.TextAreaSubmitter.js"
	, "page.Constructors.TextConverter.js"
	, "j.Constructors.dataBind.js"
)

J.addWait(
	"Modules.editor"
	, [
		"ext.events"
		, "Constructors.TextAreaSubmitter"
		, "Constructors.TextConverter"
		, "Constructors.DataBind"
	]
	, function(ref) {

		var data = {
			textArea : ""
			, output : ""
		}

		var e_root = document.querySelector("#Editor")

		var dog = {
			e_root : e_root
			, e_output : document.createElement("textarea")
			, textArea : ref.TextAreaSubmitter(e_root, {})
			, converter : ref.TextConverter()
		}

		var db = ref.DataBind()
		.bind(dog.textArea, "textArea")
		.bind(dog.e_output, "output")

		// style it a bit
		dog.e_output.className = "Output"

		// adds the output to the page
		e_root.appendChild(dog.e_output)

		dog.textArea.addEvent("Submit", function(value, textarea) {
			var newValue = dog.converter.toJSONFriendly(value)
			dog.e_output.innerHTML = newValue
		})

		dog.textArea.addEvent("Reset", function(value, textarea) {
			textarea.value = ""
		})

		return dog

	})
