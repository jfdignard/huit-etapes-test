// Ceci est le main JS de mon web app

    $(document).ready(function() {
        $("div").addClass("hide").fadeIn(2000).removeClass("hide");
        
    });

// Ajout d'une nouvelle fonction et correction de concaténation (jfdignard)

function hidingClass() {
    $("div").addClass("hide").fadeIn(2000).removeClass("hide");
};