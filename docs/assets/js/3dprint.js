function swap(){
    const complexity = document.querySelector('input[name="complexity"]:checked')?.value;
    if (complexity === "basic") {
        document.querySelectorAll('.adv').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.proff').forEach(el => el.style.display = 'none');
    } else if (complexity === "advanced") {
        document.querySelectorAll('.adv').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.proff').forEach(el => el.style.display = 'none');
    } else if (complexity === "proffessional") {
        document.querySelectorAll('.adv').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.proff').forEach(el => el.style.display = 'block');
    }
}

function compute(){
    const spoolcost = document.getElementById("spoolcost").value;
    const spoolweight = document.getElementById("spoolweight").value;
    const materialweight = document.getElementById("materialweight").value;

    const complexity = document.querySelector('input[name="complexity"]:checked')?.value;

    if (complexity === "basic")
        return basic(spoolcost, spoolweight, materialweight);

    const printingtime = document.getElementById("printingtime").value;
    const timeparts = printingtime.split(':');
    const time = parseInt(timeparts[0])*60 + parseInt(timeparts[1]);

    const kwcost = document.getElementById("kwcost").value;
    const printerpower = document.getElementById("printerpower").value;

    if (complexity === "advanced"){
        return advanced(spoolcost, spoolweight, materialweight, kwcost, printerpower, time);
    }   
}

function basic(spoolcost, spoolweight, materialweight){
    const cost = (spoolcost/spoolweight)*materialweight;
    document.getElementById("totalcost").innerHTML = cost.toFixed(2);
}


function advanced(spoolcost, spoolweight, materialweight, kwcost, printerpower, time){
    const costmaterial = (spoolcost/spoolweight)*materialweight;
    const costenergy = (printerpower/1000)*kwcost*(time/60);
    const cost = costmaterial + costenergy;
    document.getElementById("totalcost").innerHTML = cost.toFixed(2);
}

