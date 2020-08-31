   function clock() {
        var date = new Date();
        var hours = data.getHours();
        var minutes = data.getMinutes();
        var seconds = data.getSeconds();

        if (hours < 10) {
            hours = "0"+hours;
        }
        if (minutes < 10) {
            minutes = "0"+minutes
        }
        if (seconds < 10) {
            seconds = "0"+seconds
        }
        document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
    }
    window.setInterval("clock()", 1000);
