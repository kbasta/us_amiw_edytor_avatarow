$(function() {
    $("#options ul").on("click", "li", function(event) {
        var avatarId = "#avatar-" + event.currentTarget.id;
        $(avatarId).toggle();
        var span = $(event.currentTarget).find("span");
        if ($(avatarId).is(":visible")) {
            span.text("usun");
        } else {
            span.text("dodaj");
        }
    });
});
