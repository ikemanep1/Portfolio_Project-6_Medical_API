import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("#doctorform").submit(function(event){
    event.preventDefault();
    let doctorName = $("#doctorInput").val();
    $("#doctorFirstName").text("doctorName");
    $("#doctorLastName").text("doctorName");
    $("#doctorAcceptingPatients").text("doctorName");
    $("#doctorPhone").text("doctorName");
    $("#doctorStreet").text("doctorName");
    $("#doctorCity").text("doctorName");
    $("#doctorCountry").text("doctorName");
    $("#doctorZip").text("doctorName");
    $("#resultA").show();

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5051%2C-122.6750%2C10&user_location=45.5051%2C122.6750&sort=full-name-asc&limit=10&user_key=API_KEY`;
      request.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(response) {
      let doctorInformation = JSON.parse(response);

    }, function(error) {
      console.log(`There was an error processing your request: ${error.message}`);
    });

  });
});



$(document).ready(function(){
  $("#keywordform").submit(function(event){
    event.preventDefault();
    let keywordName = $("#keywordInput").val();
    $("#doctorFirstName").text("keywordName");
    $("#doctorLastName").text("keywordName");
    $("#doctorAcceptingPatients").text("keywordName");
    $("#doctorPhone").text("keywordName");
    $("#doctorStreet").text("keywordName");
    $("#doctorCity").text("keywordName");
    $("#doctorCountry").text("keywordName");
    $("#doctorZip").text("keywordName");
    $("#resultB").show();

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=45.5051%2C-122.6750%2C10&user_location=45.5051%2C122.6750&sort=full-name-asc&limit=10&user_key=API_KEY`;
      request.onload = function() {
        if (this.readyState === 4 && this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(response) {
      let doctorInformation = JSON.parse(response);

    }, function(error) {
      console.log(`There was an error processing your request: ${error.message}`);
    });

  });
});
