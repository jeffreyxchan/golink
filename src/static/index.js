$(() => {
	$("form").submit(e => {
		// Prevents form from performing default form submission logic so that
		// we can run the below custom logic.
		e.preventDefault()

		let link = {
			slug: $('input[name="slug"]').val(),
			destination: $('input[name="destination"]').val()
		}

		$.ajax({
			url: "/go-link/link",
			type: "POST",
			data: JSON.stringify(link),
			contentType: "application/json"
		}).done(res => {
			window.location.href = res.destination
		})
	})
})
