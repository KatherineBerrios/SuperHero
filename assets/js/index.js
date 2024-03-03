$(document).ready(function () {
        $("form").submit(function (event) {
          event.preventDefault();
          const searchTerm = $("#superhero").val().trim();
          if (!searchTerm.match(/^\d+$/)) {
            alert("Por favor, ingresa solo números.");
            return;
          }

          const apiKey = "4905856019427443";
          const apiUrl = `https://superheroapi.com/api.php/${apiKey}/${searchTerm}`;
        }

          $.ajax({
            type:"GET",
            url:"https://superheroapi.com/api.php/4905856019427443",
            success: function(data) {
            $('.text').text(JSON.stringify(data));
            },
            dataType: 'json',
          });
      });