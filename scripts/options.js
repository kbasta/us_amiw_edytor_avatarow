window.onload = function() {
    var optHair = document.getElementById("hair");
    optHair.onclick = function() {
        var avatarHair = document.getElementById("avatar-hair");
        var span = optHair.getElementsByTagName("span")[0];

        if (avatarHair.style.display !== "none") {
            avatarHair.style.display = "none";
            span.innerHTML = "usun";
        } else {
            avatarHair.style.display = "block";
            span.innerHTML = "dodaj";
        }
    }
}   