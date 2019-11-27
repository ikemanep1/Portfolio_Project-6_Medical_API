export class DoctorResult {
  async doctorFind(doctorName, ailment) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${ailment}&name=${doctorName}&location=or-portland&user_location=45.505%2C-122.675&skip=0&website&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
