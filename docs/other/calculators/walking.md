---
title: Walking calculator
layout: page
parent: Calculators and utilities
tags: [calculator, sport]
date_start: 23-05-2025
---

I walk a lot and sometimes I just need an extra few thousands steps, but its always a pain to find a good calculator, so I just made my own. Might add support for imperial units at some point.

<br /><br />

<script src="{{ site.baseurl }}/assets/js/walking.js"></script>

<div id="stepConverter" style="margin-top: 1em; font-family: sans-serif;">

  <label>
    <input type="radio" name="mode" value="stepsToKm" checked onchange="toggleMode()"> Steps ➝ Distance
  </label>
  <label style="margin-left: 20px;">
    <input type="radio" name="mode" value="kmToSteps" onchange="toggleMode()"> Distance ➝ Steps
  </label>

  <br><br>

  <!-- Steps to KM -->
  <div id="stepsSection">
    <label for="stepsInput">Steps:</label>
    <input type="number" id="stepsInput" placeholder="e.g. 3000" style="width: 80px; text-align: center;" />
  </div>

  <!-- KM to Steps -->
  <div id="kmSection" style="display: none;">
    <label for="kmInput">Distance (km):</label>
    <input type="number" id="kmInput" placeholder="e.g. 2" style="width: 80px; text-align: center;" />
  </div>

  <br>

  <label for="speedSelect">Speed:</label>
  <select id="speedSelect">
    <option value="slow">Slow</option>
    <option value="normal" selected>Normal</option>
    <option value="brisk">Brisk</option>
    <option value="jog">Jog</option>
  </select>

  <br><br>

  <label for="heightInput">Height (cm, optional):</label>
  <input type="number" id="heightInput" placeholder="e.g. 183" style="width: 80px; text-align: center;" />

  <br><br>

  <label for="weightInput">Weight (kg, optional):</label>
  <input type="number" id="weightInput" placeholder="e.g. 78" style="width: 80px; text-align: center;" />

  <br><br>

  <button onclick="runConverter()">Calculate</button>

  <p id="resultOutput" style="margin-top: 1em; font-weight: bold;"></p>
</div>

