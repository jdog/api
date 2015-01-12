PAGE.add("Modules.navigation", (function() {

		var e_root = document.getElementById("sidePanel")
		, f = new Function()
		, dog = {
			e_root : e_root
			, e_icon : e_root.querySelector("span.icon")
			, e_guts : e_root.querySelector("div.guts")
			, e_body : document.querySelector("body")
			, e_links : document.links
			, e_relativeLinks : []
			, isOpen : false
			, alwaysOpen : false
			, getRelativePath : f
		}
		, ref = dog.ref = { }

		function events() {
			if (dog.alwaysOpen) {
				return
			}

			dog.e_body.addEventListener("click", function(e) {

				if (dog.isOpen) {
					dog.e_root.className = "Closed"
					dog.isOpen = false
				}

			})

			dog.e_icon.addEventListener("click", function(e) {

				e.cancelBubble = true
				e.stopPropagation()

				if (dog.isOpen) {
					dog.e_root.className = "Closed"
				} else {
					dog.e_root.className = "Open"
				}

				dog.isOpen = !dog.isOpen
			}, true)

		}

		var getRelativePath = dog.getRelativePath = function () {
			var split = location.pathname.split("/")
			, pathname = split > 2 ?  pathname = split.slice(0, split.length - 1).join("/") : ""
			return location.origin + pathname
		}

		function buildRelativeLinks() {
			var loc = getRelativePath()
			for (var x in dog.e_links)
			(function(index, item, arr) {
				if (item.href && item.getAttribute("data-relative")) {
					item.href = loc + item.pathname
					dog.e_relativeLinks.push(item)
				}

			}(x, dog.e_links[x]))
		}

		function init() {
			dog.alwaysOpen = (dog.e_body && dog.e_body.className && dog.e_body.className.search("AlwaysOpen") > -1)
			events()
			buildRelativeLinks()
		}

		init()

		return dog

	}()))
