// Esta prueba no esta completa
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const searchTerm = $("#superhero").val().trim();
    if (!searchTerm.match(/^\d+$/)) {
      alert("Por favor, ingresa solo números.");
      return;
    }

    // const apiKey = "4905856019427443";
    const apiUrl = `https://superheroapi.com/api.php/4905856019427443/${searchTerm}`;

    $.ajax({
      type: "GET",
      url: apiUrl,
      dataType: "json",
      success: function (datosApi) {
        datosApi.forEach((element) => {
          $(".resultado").text(JSON.stringify(datosApi));
          $(".resultado").append(
            `<p>ID: ${element.id} - Nombre: ${element.name}</p>`
          );
        });
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
