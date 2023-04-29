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
    listItem.classList.add("new-item"); 
    listItem.innerHTML = `Type: ${robot.type} <br></br> Function: ${robot.function} <br></br> Equipment: ${robot.equipment} <br></br> <img src="${robot.image}" alt="${robot.type} Image" >`;
    robotList.appendChild(listItem);
  });
}

function deleteRobot() {
  let searchTerm = document.getElementById("robot-delete").value.trim().toLowerCase();

  if (searchTerm) {
    robots = robots.filter(function(robot) {
      return !Object.values(robot).some(function(value) {
        return value.toLowerCase().includes(searchTerm);
      });
    });

    saveRobots();
    updateRobotList();
  }
}

loadRobots();
localStorage.clear()