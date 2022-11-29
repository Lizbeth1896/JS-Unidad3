function calcularSueldo() {
    let bono = 0;
    let sueldobasico = 0;
    let nombre=document.getElementById("nombre").value
    let apellidos=document.getElementById("apellido").value
    let horas=document.getElementById("horas").value

    var categoria=document.getElementById("categoria").value
    // value
    let anios_servicio=document.getElementById("anios_servicio").value
    // text
    let anios_servicio_select=document.getElementById("anios_servicio")
    let anios_servicio_text = anios_servicio_select.options[anios_servicio_select.selectedIndex].text;

    switch (categoria) {
        case 'A':
            sueldobasico=horas*40
            break;
        case 'B':
            sueldobasico=horas*35
            break;
        case 'C':
            sueldobasico=horas*30
            break;
    }
    switch (anios_servicio) {
        case '1':
            bono=sueldobasico*0.15
            break;
        case '2':
            bono=sueldobasico*0.15
            break;
        case '3':
            bono=sueldobasico*0.20
            break;
        case '4':
            bono=sueldobasico*0.30
            break;
    }

    sueldobruto=sueldobasico+bono
    sueldoneto=sueldobruto*0.80

    Mensaje="RESULTADO\n"+nombre+ " "+apellidos+ " de Categoria " + categoria+
    " y con "+anios_servicio_text+" años de servicio recibirá:\nSueldo básico: s/."+sueldobasico+
    "\nBonificación por años de servicio: S/."+bono+
    "\nSueldo neto: S/."+sueldoneto

    document.getElementById("area").innerHTML=Mensaje
}
    
