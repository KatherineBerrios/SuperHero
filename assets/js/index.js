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
        })

        $('.boton').on('click',function(){
              $.ajax({
                type: "GET",
                url: "https://superheroapi.com/api.php/4905856019427443",
                dataType: "json",
                success: function (datosApi) {
                  $(".text").text(JSON.stringify(datosApi));
                  datosApi.forEach((element) => {
                    $(".resultado").append(`<p>${element.id}-
                ${element.name}-${element.username}-${element.email}-
                ${element.phone}</p>`);
                  });
                },
                error: function (error) {
                  console.log(error);
                },
              });
});

          $.ajax({
            type:"GET",
            url:"https://superheroapi.com/api.php/4905856019427443",
            success: function(data) {
            $('.text').text(JSON.stringify(data));
            },
            dataType: 'json',
          });
      });