---
title: Multi Rule of 3
layout: page
parent: Calculators and utilities
tags: [maths, proportions]
date: 2025-10-18
area: Maths
---
{% include top-card.html %}

I need rule of 3 way more often than I think I actually do, especially when designing 3D models, so might as well make my own calculator since 99% of the sites I find are ad filled and actually make requests taking forever for maths that should actually be quick.

The inverse can be used for temporal stuff e.g. if 6 people build a house in 10 weeks, 3 people will need 20.

The history of operations will stay until page refresh.


<br />

<script src="{{ site.baseurl }}/assets/js/ruleo3.js"></script>

<span>Proportions:</span><br />
<label>
    <input type="radio" name="props" value="normal" checked onchange="swap()"> Normal 
</label>
<label style="margin-in: 20px;">
    <input type="radio" name="props" value="inverse" onchange="swap()"> Inverse
</label>

<table>
    <thead>
        <th>Input</th>
        <th>Output</th>
    </thead>
    <tbody id="propstable">
        <tr>
            <td><input type="number" id="in1"></td>
            <td><input type="number" id="out1"><span id="nout1"></span></td>
        </tr>
        <tr>
            <td><input type="number" id="in2"></td>
            <td><input type="number" id="out2"><span id="nout2"></span></td>
        </tr>
        <tr>
            <td><input type="number" id="in3" class="multi"></td>
            <td><input type="number" id="out3" class="multi"><span id="nout3"></span></td>
        </tr>
        <tr>
            <td><input type="number" id="in4" class="multi"></td>
            <td><input type="number" id="out4" class="multi"><span id="nout4"></span></td>
        </tr>
        <tr>
            <td><input type="number" id="in5" class="multi"></td>
            <td><input type="number" id="out5" class="multi"><span id="nout5"></span></td>
        </tr>
        <tr>
            <td><input type="number" id="in6" class="multi"></td>
            <td><input type="number" id="out6" class="multi"><span id="nout6"></span></td>
        </tr>
        <tr>
            <td><input type="number" id="in7" class="multi"></td>
            <td><input type="number" id="out7" class="multi"><span id="nout7"></span></td>
        </tr>
        <tr>
            <td colspan=2><button onclick="compute()" style="margin-out: 5px;">Compute</button><button onclick="reset()">Reset</button></td>
        </tr>
    </tbody>
</table>

<div id="history"></div>

<br />



{% include tags.html %}