$( "#signup" ).submit(function( event ) {
  if($("#inputEmail").val() == '' || $("#inputPassword").val() == '' || $("#inputRePassword").val() == '' || $("#inputUsername").val() == '')
    event.preventDefault();
  else if($("#inputPassword").val() != $("#inputRePassword").val()){
    $("#alert_message").html("<h1>The password and retyped password do not match</h1>");
    event.preventDefault();
  }
});
