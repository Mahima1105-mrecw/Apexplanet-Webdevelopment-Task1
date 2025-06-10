document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("appointmentForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      var name = document.getElementById("name").value;
      var doctor = document.getElementById("doctor").value;
      var date = document.getElementById("date").value;
      var time = document.getElementById("time").value;
  
      var message = "Appointment booked!\n\n" +
                    "Name: " + name + "\n" +
                    "Doctor: " + doctor + "\n" +
                    "Date: " + date + "\n" +
                    "Time: " + time;
  
      alert(message);
    });
  });