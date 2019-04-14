/*
 big red button script
 by Oran C
 oranbusiness@gmail.com
 github.com/wisehackermonkey
 20190413
*/
let hostname = window.location.href;
$(document).ready(() => {
    function init_button_counter() {
        $.ajax({
            type: 'GET',
            url: `${hostname}load`,
            contentType: 'text/plain',
            xhrFields: {
                withCredentials: false
            },
            success: function (data) {
                console.log(data)
                $("#counter").text(parseInt(data))
            },
            error: function () {
                console.error("Ajax call failed")
                console.log(data)
            }
        })
    }

    function update_button_counter() {
        $.ajax({
            type: 'GET',
            // The URL to make the request to.
            url: `${hostname}status`,
            contentType: 'text/plain',
            xhrFields: {
                // 'Access-Control-Allow-Credentials: true'.
                withCredentials: false
            },
            success: function (data) {
                console.log(data)
                $("#counter").text(parseInt(data))
            },
            error: function (err) {
                console.error("Ajax call failed")
                console.log(err)
            }
        })
    }

    init_button_counter()

    $(".red-button").click(() => {
        update_button_counter()
        $('.btn-bg').attr('src', 'img/btn_pushed.png')
        console.log("button pressed")

    })

})
