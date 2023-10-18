document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("register-button");
    const consultButton = document.getElementById("consult-button");
    const attendanceList = document.getElementById("attendance-list");
    const attendanceRecords = document.getElementById("attendance-records");

    registerButton.addEventListener("click", function () {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const attendanceDate = document.getElementById("attendance-date").value;

        if (firstName && lastName && attendanceDate) {
            const record = document.createElement("li");
            record.textContent = `Nombre: ${firstName} ${lastName}, Fecha y Hora: ${attendanceDate}`;
            attendanceRecords.appendChild(record);

            document.getElementById("first-name").value = "";
            document.getElementById("last-name").value = "";
            document.getElementById("attendance-date").value = "";
        }
    });

    consultButton.addEventListener("click", function () {
        attendanceList.classList.toggle("hidden");
    });
});

document.getElementById("register-button").addEventListener("click", function() {
   
    var firstName = document.getElementById("first-name").value;
    var attendanceDate = document.getElementById("attendance-date").value;

  
    if (firstName && attendanceDate) {
       
        alert("Registro exitoso. Asistencia registrada para " + firstName + " el " + attendanceDate);
    } else {
        alert("Por favor, ingrese el nombre y la fecha de asistencia.");
    }
});