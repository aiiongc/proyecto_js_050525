// Se necesita capturar, pasar el dato del formulario y guardarlo en un array
const students=[];

const tableBody=document.querySelector("#studentsTable tbody");
// Se coloca ID del formulario
// addEventListener escucha cuando alguien hace click en el boton submit
document.getElementById("studentForm").addEventListener("submit",function(e){
    e.preventDefault();

    //trim elimina los espacios
    const name=document.getElementById("name").value.trim();
    const lastName=document.getElementById("lastName").value.trim();
    const grade=document.getElementById("grade").value.trim();

    //Se debe validar cuando haya algún dato que no corresponda. Como una nota menor que 1 y mayor que 7. Entonces se debe programar una alerta de error.
    if(grade <1 || grade >7 || !name || !lastName || isNaN(grade)){
        alert("Error Datos Incorrectos")
        return
    }

    //Guardar datos en el Array

    const student={name,lastName,grade};
    students.push(student);
    addStudentToTable(student)
    //console.log(students)
    this.reset();

});
// Se deben guardar los estudiantes en la tabla. Se le pasan los student a la función
function addStudentToTable(student){
    const row=document.createElement("tr");
    row.innerHTML=
    `<td>${student.name}</td>
    <td>${student.lastName}</td>
    <td>${student.grade}</td>`;
    tableBody.appendChild(row);
}

