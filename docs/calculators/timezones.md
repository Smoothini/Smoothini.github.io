---
title: Timezone Converter
layout: page
parent: Calculators and utilities
tags: [timezone, converter]
date: 21-07-2025
---
{% include top-card.html %}

I find myself needing a very specific type of timezone converter every now and then, which would allow me to check <a href="https://www.youtube.com/watch?v=Y_oars3LSXE">2</a> or more places at once, and also see the end had it been a timeframe.

Use h:mm format in case you need the duration!

<br /><br />

<script src="{{ site.baseurl }}/assets/js/timezones.js"></script>

<span>Order timezones by:</span><br />
<label>
    <input type="radio" name="ordering" value="utc" onchange="reorder()"> UTC 
</label>
<label style="margin-left: 20px;">
    <input type="radio" name="ordering" value="name" checked onchange="reorder()"> Timezone/city name
</label>

Source location:
<select class="tzs" name="sourceTimezone" id="sourceTimezone" onchange="refresh()">

Source datetime:
<input id="sourceDateTime" type="datetime-local" onchange="refresh()">

<span style="color: grey">(Optional) Duration:</span>
<input id="duration" type="text" placeholder="e.g. 3:00 would be 3 hours" onchange="refresh()">

<div id="timezonesConverter">
    <table>
        <tr>
            <th>Target</th>
            <th>Result</th>
        </tr>
        <tr>
            <td><select class="tzs" name="targetTimezone1" id="targetTimezone1" onchange="refreshOne(id)"></select></td>
            <td><span class="result" id="targetResult1"></span></td>
        </tr>
        <tr>
            <td><select class="tzs" name="targetTimezone2" id="targetTimezone2" onchange="refreshOne(id)"></select></td>
            <td><span class="result" id="targetResult2"></span></td>
        </tr>
        <tr>
            <td><select class="tzs" name="targetTimezone3" id="targetTimezone3" onchange="refreshOne(id)"></select></td>
            <td><span class="result" id="targetResult3"></span></td>
        </tr>
        <tr>
            <td><select class="tzs" name="targetTimezone4" id="targetTimezone4" onchange="refreshOne(id)"></select></td>
            <td><span class="result" id="targetResult4"></span></td>
        </tr>
        <tr>
            <td><select class="tzs" name="targetTimezone5" id="targetTimezone5" onchange="refreshOne(id)"></select></td>
            <td><span class="result" id="targetResult5"></span></td>
        </tr>
        <tr>
            <td><select class="tzs" name="targetTimezone6" id="targetTimezone6" onchange="refreshOne(id)"></select></td>
            <td><span class="result" id="targetResult6"></span></td>
        </tr>
        <tr>
            <td><select class="tzs" name="targetTimezone7" id="targetTimezone7" onchange="refreshOne(id)"></select></td>
            <td><span class="result" id="targetResult7"></span></td>
        </tr>
    </table>
</div>
<br />
<small>Source for timezones data: <a href="https://gist.github.com/arodu/3b0f2cd901c07da0ef70">🔗link</a></small>

{% include tags.html %}