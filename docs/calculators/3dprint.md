---
title: 3D Print Pricing
layout: page
parent: Calculators and utilities
tags: [3d printing, 3d, modeling]
date: 2025-09-02
area: CAD
---
{% include top-card.html %}

I don't sell any of the designs I make, and if it's a bigger piece for a friend, I usually just go for a coffee or two in town. But I saw <a href="https://www.youtube.com/watch?v=5koU93oZVC0">this</a> at one point and decided to implement it for fun, despite it could easily be an excel spreadsheet.


<br /><br />

<script src="{{ site.baseurl }}/assets/js/3dprint.js"></script>

<span>Complexity:</span><br />
<label>
    <input type="radio" name="complexity" value="basic" checked onchange="swap()"> Basic 
</label>
<label style="margin-left: 20px;">
    <input type="radio" name="complexity" value="advanced" onchange="swap()"> Advanced
</label>
<label style="margin-left: 20px;">
    <input type="radio" name="complexity" value="professional" onchange="swap()"> Professional (WIP)
</label>

<span class="profi" hidden color="red">NOTE! The professional mode is still Work in Progress!</span>

<span>Spool Cost</span>
<input type="text" id="spoolcost" value="350">

<span>Spool Weight</span>
<input type="text" id="spoolweight" value="2000" placeholder="in grams"> 


<span>Material Used</span>
<input type="text" id="materialweight" placeholder="weight in grams"> 


<span class="adv" hidden>kWh Cost</span>
<input class="adv" type="text" id="kwcost" value="2.5" hidden>

<span class="adv" hidden>Printer Average Power Use</span>
<input class="adv" type="text" id="printerpower" value="70" placeholder="KW" hidden>

<span class="adv" hidden>Printing Time</span>
<input class="adv" type="text" id="printingtime" placeholder="HH:MM" hidden>

<button id="calculate" onclick="compute()">Calculate</button>

<br />

<span>Grand total: </span>
<span id="totalcost"></span>



{% include tags.html %}