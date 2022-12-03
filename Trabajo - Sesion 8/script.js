// Cargar JS cuando el DOM se haya terminado de cargar
$( document ).ready(function() {
	let form = $('#form');
	let username = $('#username');
	let nombre = $('#nombre');
	let pass = $('#pass');
	let repeatPass = $('#repeatPass');
	let mail = $('#mail');
	let phone = $('#phone');
	let fechaNacimiento = $('#fechaNacimiento');

	let validarForm = function () {
		let b = false;
		let _username = username.val();
		if (!expresiones.usuario.test(_username)) {
			alert("El usuario debe contener solo letras, numeros, guión y/o guión bajo");
			return;
		} else {
			let _name = nombre.val();
			if (!expresiones.nombre.test(_name)) {
				alert("Los nombres debeb contener solo letras y espacios, pueden llevar acentos");
				return;
			} else {
				let _pass = pass.val();
				let _repeatPass = repeatPass.val();
				if (_pass != _repeatPass) {
					alert("Las contraseñas no coindiden");
					return;
				} else {
					if (!expresiones.password.test(_pass)) {
						alert("La contraseña debe contener de 4 a 12 digitos");
						return;
					} else {
						let _mail = mail.val();
						if (!expresiones.correo.test(_mail)) {
							alert("El correo ingresado no tiene un formato correcto");
							return;
						} else {
							let _phone = phone.val();
							if (!expresiones.telefono.test(_phone)) {
								alert("El celular debe empezar con el dígito 9 y tener 9 dígitos");
								return;
							} else {
								let _genero = $('input:radio[name=genero]:checked', '#form').val();
								let _fechaNacimiento = fechaNacimiento.val();
								let message = 'Los datos del cliente son:\nUsuario: ' + _username + '\nNombre: ' + _name + '\nCorreo: ' + _mail + '\nCelular: ' + _phone + '\nGénero: ' + _genero + '\nFecha de nacimiento: ' + _fechaNacimiento;
								alert(message)
							}
						}
					}
				}
			}
		}
		return b;
	}

	form.on('submit', function(event) {
		event.preventDefault();
		if (!form[0].checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
		} else {
			validarForm();
		}
		form[0].classList.add('was-validated')
	});
});

const expresiones = {
	// patterns
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^9+[0-9]{8}$/ // 9 numeros.
}

