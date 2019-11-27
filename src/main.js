import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorResult } from './backEnd.js';


$(document).ready(function(){
  $("#doctorForm").submit(function(event){
    event.preventDefault();
    let doctorName = $("#doctorInput").val();
    let ailment = $("#keywordInput").val();
    $(".reset").show
    (async () => {
      let informationGrab = new DoctorResult();
      const response = await informationGrab.doctorFind(doctorName, ailment);
      infoDisplay(response);
    })();
    function infoDisplay(response) {
      if (response.data.length === 0) {
        $('#resultBlock').text("We're sorry, no doctors meet the criteria.");
      } else {
        for (let i = 0; i < response.data.length; i++) {
          $('#resultBlock').append(`Doctor's Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}`);
          $('#resultBlock').append("<br>");
          $('#resultBlock').append(`Doctor's Address: ${response.data[i].practices[0].visit_address.street}
          ${response.data[i].practices[0].visit_address.city}
          ${response.data[i].practices[0].visit_address.state}
          ${response.data[i].practices[0].visit_address.zip}`);
          $('#resultBlock').append("<br>");
          $('#resultBlock').append(`Doctor's phone number: ${response.data[i].practices[0].phones[0].number}`);
          $('#resultBlock').append("<br>");
          if (response.data[i].practices[0].website === undefined) {
            $('#resultBlock').append(`The Doctor's website is not available.`);
            $('#resultBlock').append("<br>");
          } else {
            $('.results').append(`Website: ${response.data[i].practices[0].website}`);
            $('#resultBlock').append("<br>");
          }
          if (response.data[i].practices[0].accepts_new_patients === true) {
            $('#resultBlock').append(`The Doctor is currently accepting new patients.`);
            $('#resultBlock').append("<br>");
            $('#resultBlock').append("<br>");
          } else {
            $("#resultBlock").append(`The Doctor is not accepting new patients!`);
          }
        }
      }
    }
  });
});
