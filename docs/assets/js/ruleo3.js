function addHistory(in1, out1, in2, out2, inverse=false){
    const entry = `${in1} → ${out1} ► ${in2} → ${out2}`;
    const historyElem = document.getElementById("history");
    const newEntry = document.createElement("div");
    const nl = document.createElement("hr");
    newEntry.appendChild(nl);
    newEntry.innerText = entry;
    inverse ? newEntry.innerText += " (inverse)" : newEntry;
    historyElem.prepend(newEntry);
}

function ruleo3(in1, out1, in2, elem, inverse=false){
    if(!isNaN(in1) && !isNaN(out1) && !isNaN(in2)){
        const result = inverse ? out1 / (in2 / in1) : (out1 * in2) / in1;
        const strResult = result.toLocaleString(undefined, {maximumFractionDigits: 4});
        document.getElementById(elem).value = strResult
        document.getElementById('n'+elem).innerText = inverse ? '🙃' : '🆕';
        addHistory(in1, out1, in2, strResult, inverse);
    }
}


function compute(){
    const props = document.querySelector('input[name="props"]:checked')?.value;

    const in1 = parseFloat(document.getElementById("in1").value);
    const out1 = parseFloat(document.getElementById("out1").value);

    const in2 = parseFloat(document.getElementById("in2").value);
    
    const in3 = parseFloat(document.getElementById("in3").value);
    const in4 = parseFloat(document.getElementById("in4").value);
    const in5 = parseFloat(document.getElementById("in5").value);
    const in6 = parseFloat(document.getElementById("in6").value);
    const in7 = parseFloat(document.getElementById("in7").value);

    if (props === "normal") {
        [in2, in3, in4, in5, in6, in7].forEach((val, index) => {
            ruleo3(in1, out1, val, "out" + (index + 2));
        });
    } else if (props === "inverse") {
        [in2, in3, in4, in5, in6, in7].forEach((val, index) => {
            ruleo3(in1, out1, val, "out" + (index + 2), inverse=true);
        });
    }
}

function reset(){
    const fields = ["in2", "in3", "in4", "in5", "in6", "in7", "out2", "out3", "out4", "out5", "out6", "out7"];
    fields.forEach(id => {
        document.getElementById(id).value = "";
        if (id.startsWith("out")) {
            document.getElementById('n' + id).innerText = '';
        }
    });
}

function swap(){
    reset();
}