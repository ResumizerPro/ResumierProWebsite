$( "#login" ).submit(function( event ) {
  if($("#inputEmail").val() == '' || $("#inputPassword").val() == '')
    event.preventDefault();
});
