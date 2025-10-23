  function toggleMode() {
    const mode = document.querySelector('input[name="mode"]:checked').value;
    document.getElementById("stepsSection").style.display = mode === "stepsToKm" ? "block" : "none";
    document.getElementById("kmSection").style.display = mode === "kmToSteps" ? "block" : "none";
  }

  function runConverter() {
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const height = parseFloat(document.getElementById("heightInput").value);
    const speed = document.getElementById("speedSelect").value;
    const weight = parseFloat(document.getElementById("weightInput").value);
    const output = document.getElementById("resultOutput");

    let stepLength = 0.762; // default in meters

    if (!isNaN(height)) {
      stepLength = height / 100 * 0.413;
    }

    const speedMap = {
      slow: 3.2,
      normal: 4.8,
      brisk: 5.6,
      jog: 8.0
    };
    const metMap = {
      slow: 2.8,
      normal: 3.5,
      brisk: 4.3,
      jog: 7.0
    };
    const kmh = speedMap[speed];
    const MET = metMap[speed];

    if (mode === "stepsToKm") {
      const steps = parseFloat(document.getElementById("stepsInput").value);
      if (isNaN(steps) || steps <= 0) {
        output.textContent = "Please enter a valid number of steps.";
        return;
      }
      const distanceKm = (steps * stepLength) / 1000;
      let result = `Distance: ${distanceKm.toFixed(2)} km<br>`;

      const timeHrs = distanceKm / kmh;
      const totalSeconds = Math.round(timeHrs * 3600);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      if (hours > 0) {
        result += `Time: ${hours} h ${minutes} min ${seconds} sec`;
      } else {
        result += `Time: ${minutes} min ${seconds} sec`;
      }

      if (!isNaN(weight)) {
        const kcals = MET * weight * timeHrs;
        result += `<br>Calories burned: ${Math.round(kcals)} kcal`;
      }

      output.innerHTML = result;

    } else if (mode === "kmToSteps") {
      const km = parseFloat(document.getElementById("kmInput").value);
      if (isNaN(km) || km <= 0) {
        output.textContent = "Please enter a valid distance.";
        return;
      }

      let steps = Math.round((km * 1000) / stepLength);

      if (steps > 999){
        steps = `${~~(steps/1000)},${steps%1000}` //bitwise magic stuff right here
      }
      let result = `Estimated steps: ${steps}`;
      

      if (!isNaN(weight)) {
        const kcals = MET * weight * (km/kmh);
        result += `<br>Calories burned: ${Math.round(kcals)} kcal`;
      }

      const timeHrs = km / kmh;
      const totalSeconds = Math.round(timeHrs * 3600);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      if (hours > 0) {
        result += `<br>Time: ${hours} h ${minutes} min ${seconds} sec`;
      } else {
        result += `<br>Time: ${minutes} min ${seconds} sec`;
      }

      output.innerHTML = result;
    }
  }