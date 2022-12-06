// Crear una clase Alumno con los atributos: código, nombre, nota1, nota2, nota3 y nota4; 
// y las operaciones: promedio (), condicion () y obsequio (). Para calcular el promedio 
// considere la siguiente fórmula:
// PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
// Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).
// Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.
cod=+prompt("Ingrese codigo");
nombre=prompt("Ingrese su nombre");
n1=+prompt("Ingrese nota 1");
n2=+prompt("Ingrese nota 2");
n3=+prompt("Ingrese nota 3");
n4=+prompt("Ingrese nota 4");


class Alumno{
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }

    promedio(){
        let prom = (this.nota1*0.15)+(this.nota2*0.20)+(this.nota3*0.25)+(this.nota4*0.40);
        return prom.toFixed(2);
    }

    condicion(){
        let prom=this.promedio();
        let condicion="";
        if (prom>=12) {
            condicion="Aprobado";
        } else {
            condicion="Desaprobado";
        }
        return condicion;
    }

    obsequio(){
        let prom=this.promedio();
        let condi=this.condicion();
        let obs="";
        if (condi = "Aprobado") {
            if (prom>17) {
                obs="Por haber aprobado con un promedio mayor a 17 se le obsequiará una MOCHILA";
            } else {
                obs="Aprobó, con un promedio menor a 17 por ello no se le obsequiará su MOCHILA";
            } 
        } else {
            obs="Usted Desaprobó no tiene ni un obsequio";
        }
        return obs;
    }
}

let alumno1 = new Alumno(cod, nombre, n1, n2, n3, n4)
console.log(alumno1);
console.log(alumno1.promedio());
console.log(alumno1.condicion());
console.log(alumno1.obsequio());


