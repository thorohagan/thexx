// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

$("a[scroll]").click(function(e) {
	e.preventDefault()

console.log (e)
	$('html, body').animate({
        scrollTop: $(new URL(e.currentTarget.href).hash).offset().top
    }, 1200);
})
