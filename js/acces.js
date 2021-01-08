
$(function(){
                                             //lier l'événement de changement à la sélection
    $('#dynamic_select').on('change', function () {
        var url = $(this).val();                     // obtenir la valeur sélectionnée
        if (url) {                                   // nécessite une URL
            window.location = url; // redirige
        }
        return false;
    });
  });