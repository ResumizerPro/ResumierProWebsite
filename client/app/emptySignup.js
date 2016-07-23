$( "#signup" ).submit(function( event ) {
  if($("#inputEmail").val() == '' || $("#inputPassword").val() == '' || $("#inputRePassword").val() == '' || $("#inputUsername").val() == '')
    event.preventDefault();
  else if($("#inputPassword").val() != $("#inputRePassword").val())
    event.preventDefault();
});
