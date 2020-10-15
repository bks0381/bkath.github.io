const Timer = {
    setTimer: function() {
        var deadline = new Date("Oct 23, 2020 15:37:25").getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var t = deadline - now;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("h1").innerHTML = days + "d     " +
                hours + "h     " + minutes + "m     " + seconds + "s     ";
            if (t < 0) {
                clearInterval(x);
                document.getElementById("h1").innerHTML = "EXPIRED";
            }
        }, 1000);

    }
}



Timer.setTimer();