function clickIngresar() {
    getJSON('rotativo/url').then(function(data) {

//        console.log(data.url)
        location.replace(data.url)
    }).catch(function(error) {
        console.log(error)
    })
}
