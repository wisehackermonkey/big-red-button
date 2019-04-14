/*
 big red button script
 by Oran C
 oranbusiness@gmail.com
 github.com/wisehackermonkey
 20190413
*/

$(document).ready(() => {
    function init_button_counter() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/load',
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
            // The 'type' property sets the HTTP method.
            // A value of 'PUT' or 'DELETE' will trigger a preflight request.
            type: 'GET',

            // The URL to make the request to.
            url: 'http://localhost:3000/status',

            // The 'contentType' property sets the 'Content-Type' header.
            // The JQuery default for this property is
            // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
            // a preflight. If you set this value to anything other than
            // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
            // you will trigger a preflight request.
            contentType: 'text/plain',

            xhrFields: {
                // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
                // This can be used to set the 'withCredentials' property.
                // Set the value to 'true' if you'd like to pass cookies to the server.
                // If this is enabled, your server must respond with the header
                // 'Access-Control-Allow-Credentials: true'.
                withCredentials: false
            },

            headers: {
                // Set any custom headers here.
                // If you set any non-simple headers, your server must include these
                // headers in the 'Access-Control-Allow-Headers' response header.
            },

            success: function (data) {
                console.log(data)
                $("#counter").text(parseInt(data))
            },

            error: function () {
                // Here's where you handle an error response.
                // Note that if the error was due to a CORS issue,
                // this function will still fire, but there won't be any additional
                // information about the error.
                console.error("Ajax call failed")
                console.log(data)
            }
        })
    }

    init_button_counter()
        $(".red-button").click(() => {
            update_button_counter()
            $('.btn-bg').attr('src', 'img/btn_pushed.png')
            console.log("button pressed")

        })
    // $("form").submit((e)=>{
    //     update_button_counter()
    //     $('.btn-image-bg').attr('src', 'img/btn_pushed.png')
    //     return false;
    // });
    // $("#btn-bg").click(() => {
    //
    // })

    // $(".red-button").click({
    //     mouseup: function(){
    //         $(this).css("background-color", "lightgray");
    //     },
    //     click: function(){
    //         $(this).css("background-color", "yellow");
    //     }
    // })
})
