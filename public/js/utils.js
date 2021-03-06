function getJSON(url, cb) {
    var request = new XMLHttpRequest()

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if(request.status === 200) {
                var data = JSON.parse(request.responseText)

                if (cb) cb(data)
            }
        }
    }

    request.open('GET', url)

    request.send()
}

// async function getJSON(url) {
//     return fetch(url).then(function(data) {
//         return data.json()
//     }).then(function(json) {
//         console.log(url,':',json)
//         return json
//     }).catch(function(error) {
//         console.log('Error:', error)
//         return error.message
//     })
// }
