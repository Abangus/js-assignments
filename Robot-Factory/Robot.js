let robots = [];

      function addRobot() {
        let type = document.getElementById("robot-type").value;
        let jobs = document.getElementById("robot-function").value;
        let equipment = document.getElementById("robot-equipment").value;

        let robot = {type: type, function: jobs, equipment: equipment};

        robots.push(robot);

        document.getElementById("robot-form").reset();

        updateRobotList();
      }

      function updateRobotList() {
        let robotList = document.getElementById("robot-list");
        robotList.innerHTML = "";

        for (let i = 0; i < robots.length; i++) {
          let robot = robots[i];
          let listItem = document.createElement("li");
          listItem.innerHTML = `${robot.type} - ${robot.function} - ${robot.equipment}`;
          robotList.appendChild(listItem);
        }
      }