function clickIngresar () {
    getJSON('rotativo/url', function (data) {
        location.replace(data.url)
    })
}
