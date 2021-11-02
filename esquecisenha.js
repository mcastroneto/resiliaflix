document.querySelector('#email').addEventListener('blur', validateEmail);

const reSpaces = /^\S*$/;

function validateEmail(e) {
  const email = document.querySelector('#email');
  const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
  const ree = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}\.([a-zA-Z]){2,5}$/;

  if (reSpaces.test(email.value) && (re.test(email.value) || ree.test(email.value))) {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
      return true;
      
  } else {
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');

    return false;
  }
}

(function () {
  const forms = document.querySelectorAll('.needs-validation');
  for (let form of forms) {
    form.addEventListener(
      'submit',
      function (event) {
        if (
          !form.checkValidity() ||
          !validateEmail()
        ) {
          event.preventDefault();
          event.stopPropagation();
          alert("E-mail de recuperação enviado")
          
        } else {
          form.classList.add('was-validated');
        }
      },
      false
    );
  }
})();

window.onload = function () { var images = ['bk/01.jpg', 'bk/02.jpg', 'bk/03.jpg', 'bk/04.jpg', 'bk/05.jpg', 'bk/06.jpg', 'bk/07.jpg', 'bk/08.jpg', 'bk/09.jpg', 'bk/10.jpg', 'bk/11.jpg', 'bk/12.jpg', 'bk/13.jpg', 'bk/14.jpg'];
var image = images[Math.floor(Math.random() * images.length)];
document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + image + "')";
document.getElementsByTagName('body')[0].style.backgroundRepeat = "no-repeat";
document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
}