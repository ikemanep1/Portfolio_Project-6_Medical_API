import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function(){
  $("#doctorform").submit(function(event){
    event.preventDefault();
    let doctorName = $("#doctorInput").val();

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
      $("#doctorFirstName").text("entry1");
      $("#doctorLastName").text("entry2");
      $("#doctorAcceptingPatients").text("entry3");
      $("#doctorPhone").text("entry4");
      $("#doctorStreet").text("entry5");
      $("#doctorCity").text("entry6");
      $("#doctorCountry").text("entry7");
      $("#doctorZip").text("entry8");

    }, function(error) {
      console.log(`There was an error processing your request: ${error.message}`);
    });

  });
});



$(document).ready(function(){
  $("#keywordform").submit(function(event){
    event.preventDefault();
    let keywordName = $("#keywordInput").val();

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
      $("#doctorFirstName").text("entry1");
      $("#doctorLastName").text("entry2");
      $("#doctorAcceptingPatients").text("entry3");
      $("#doctorPhone").text("entry4");
      $("#doctorStreet").text("entry5");
      $("#doctorCity").text("entry6");
      $("#doctorCountry").text("entry7");
      $("#doctorZip").text("entry8");

    }, function(error) {
      console.log(`There was an error processing your request: ${error.message}`);
    });

  });
});
