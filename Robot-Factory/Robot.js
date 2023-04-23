// let robots = [];

//       function addRobot() {
//         let type = document.getElementById("robot-type").value;
//         let jobs = document.getElementById("robot-function").value;
//         let equipment = document.getElementById("robot-equipment").value;

//         let robot = {type: type, function: jobs, equipment: equipment};

//         robots.push(robot);

//         document.getElementById("robot-form").reset();

//         updateRobotList();
//       }

//       function updateRobotList() {
//         let robotList = document.getElementById("robot-list");
//         robotList.innerHTML = "";

//         for (let i = 0; i < robots.length; i++) {
//           let robot = robots[i];
//           let listItem = document.createElement("li");
//           listItem.innerHTML = `${robot.type} - ${robot.function} - ${robot.equipment}`;
//           robotList.appendChild(listItem);
//         }
//       }

let robots = [];

function addRobot() {
  let type = document.getElementById("robot-type").value;
  let jobs = document.getElementById("robot-function").value;
  let equipment = document.getElementById("robot-equipment").value;
  let image = document.getElementById("robot-image").value;

  let robot = {type: type, function: jobs, equipment: equipment, image: image};

  robots.push(robot);

  document.getElementById("robot-form").reset();

  saveRobots();
  updateRobotList();
}

function saveRobots() {
  localStorage.setItem("robots", JSON.stringify(robots));
}

function loadRobots() {
  let storedRobots = localStorage.getItem("robots");

  if (storedRobots) {
    robots = JSON.parse(storedRobots);
  }

  updateRobotList();
}

function updateRobotList() {
  let robotList = document.getElementById("robot-list");
  robotList.innerHTML = "";

  robots.forEach(function(robot, index) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${robot.type} - ${robot.function} - ${robot.equipment} - <img src="${robot.image}" alt="${robot.type} Image" width="50">`;
    robotList.appendChild(listItem);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function() {
      deleteRobot(index);
    });
    listItem.appendChild(deleteButton);
  });
}

function deleteRobot(index) {
  robots.splice(index, 1);
  saveRobots();
  updateRobotList();
}

loadRobots();
