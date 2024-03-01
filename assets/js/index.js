let text = $("#texto");
text.click(function () {
  document.write("click sobre el texto");
});

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