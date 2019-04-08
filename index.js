var axios = require("axios");
var inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      message: "Hello, where are you traveling from?",
      name: "origin"
    },
    {
      type: "input",
      message: "Okay, great! Where is your destination?",
      name: "destination"
    },
    {
      type: "list",
      message: "What mode of transportation will you be using?",
      name: "mode",
      choices: ["driving", "walking", "bicycling", "transit"]
    }
  ])
  .then(async answers => {
    let { origin, destination, mode } = answers;
    let url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&departure_time=now&mode=${mode}&key=AIzaSyD5OD1DOxGV78Gjdrt7X_A6-QUREZFfeqA`;
    axios
      .get(url)
      .then(res =>
        console.log(
          `It will take you ${
            res.data.rows[0].elements[0].duration.text
          } to reach your destination.`
        )
      );
  });
