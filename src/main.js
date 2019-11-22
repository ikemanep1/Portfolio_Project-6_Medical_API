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

  });
});
