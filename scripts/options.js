window.onload = function() {
    var optHair = document.getElementById("hair");
    var optGlasses = document.getElementById("glasses");
    var optShirt = document.getElementById("shirt");
    var optTrousers = document.getElementById("trousers");
    
    optHair.onclick = function() {
        var avatarHair = document.getElementById("avatar-hair");
        var span = optHair.getElementsByTagName("span")[0];

        if (avatarHair.style.display !== "none") {
            avatarHair.style.display = "none";
            span.innerHTML = "dodaj";
        } else {
            avatarHair.style.display = "block";
            span.innerHTML = "usun";
        }
    }

    optGlasses.onclick = function() {
        var avatarGlasses = document.getElementById("avatar-glasses");
        var span = optGlasses.getElementsByTagName("span")[0];

        if (avatarGlasses.style.display !== "none") {
            avatarGlasses.style.display = "none";
            span.innerHTML = "dodaj";
        } else {
            avatarGlasses.style.display = "block";
            span.innerHTML = "usun";
        }
    }

    optShirt.onclick = function() {
        var avatarShirt = document.getElementById("avatar-shirt");
        var span = optShirt.getElementsByTagName("span")[0];

        if (avatarShirt.style.display !== "none") {
            avatarShirt.style.display = "none";
            span.innerHTML = "dodaj";
        } else {
            avatarShirt.style.display = "block";
            span.innerHTML = "usun";
        }
    }

    optTrousers.onclick = function() {
        var avatarTrousers = document.getElementById("avatar-trousers");
        var span = optTrousers.getElementsByTagName("span")[0];

        if (avatarTrousers.style.display !== "none") {
            avatarTrousers.style.display = "none";
            span.innerHTML = "dodaj";
        } else {
            avatarTrousers.style.display = "block";
            span.innerHTML = "usun";
        }
    }
}   