$( "#signup" ).submit(function( event ) {
  if($("#inputEmail").val() == '' || $("#inputPassword").val() == '' || $("#inputRePassword").val() == '' || $("#inputUsername").val() == '')
    event.preventDefault();
  else if($("#inputPassword").val() != $("#inputRePassword").val()){
    $("#alert_message").html("<h3>The password and retyped password do not match</h3>");
    event.preventDefault();
  }
});
