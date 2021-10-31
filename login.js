$(document).ready(function() {
  
  $("#email").keyup(function() {
    const regx_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const email_inp = $(this).val();
    if (regx_email.test(email_inp)) {
      $("#email_status").text("válido");
      $("#email_status").removeClass("text-danger");
    }
    else {
      $("#email_status").addClass("text-danger");
      $("#email_status").text("inválido");
    }
  });

  $("#pass").keyup(function(){
    const regx_pass = /^(?=.*[a-z]?=.*[A-Z]?=.*[0-9]?=.*[^A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]?=.{ 8, })$/;
    const pass = $(this).val();
    if (regx_pass.test(pass)) {
      $("#pass_status").text("válido");
      $("#pass_status").removeClass("text-danger");
    }
    else {
      $("#pass_status").addClass("text-danger");
      $("#pass_status").text("inválido");
    }
  });

});