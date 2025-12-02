const platforms = [
    {"id": "atari2600", "name": "Atari 2600", "width": 160, "height": 192, "generation": 2, "type": "home"},
    {"id": "atari5200", "name": "Atari 5200", "width": 320, "height": 240, "generation": 2, "type": "home"},
    {"id": "atari7800", "name": "Atari 7800", "width": 320, "height": 240, "generation": 3, "type": "home"},
    {"id": "jaguar", "name": "Atari Jaguar", "width": 640, "height": 480, "generation": 5, "type": "home"},
    {"id": "nes", "name": "Nintendo Entertainment System", "width": 256, "height": 240, "generation": 3, "type": "home", "regionName": "Famicom (Japan)"},
    {"id": "snes", "name": "Super Nintendo Entertainment System", "width": 256, "height": 224, "generation": 4, "type": "home", "regionName": "Super Famicom (Japan)"},
    {"id": "n64", "name": "Nintendo 64", "width": 320, "height": 240, "generation": 5, "type": "home"},
    {"id": "gamecube", "name": "Nintendo GameCube", "width": 640, "height": 480, "generation": 6, "type": "home"},
    {"id": "wii", "name": "Wii", "width": 640, "height": 480, "generation": 7, "type": "home"},
    {"id": "wiiu", "name": "Wii U", "width": 854, "height": 480, "generation": 8, "type": "home"},
    {"id": "switch", "name": "Nintendo Switch", "width": 1280, "height": 720, "generation": 9, "type": "home"},
    {"id": "gb", "name": "GameBoy", "width": 160, "height": 144, "generation": 4, "type": "handheld"},
    {"id": "gbc", "name": "GameBoy Color", "width": 160, "height": 144, "generation": 5, "type": "handheld"},
    {"id": "gba", "name": "GameBoy Advance", "width": 240, "height": 160, "generation": 6, "type": "handheld"},
    {"id": "nds", "name": "Nintendo DS", "width": 256, "height": 192, "generation": 7, "type": "handheld"},
    {"id": "3ds", "name": "Nintendo 3DS", "width": 400, "height": 240, "generation": 8, "type": "handheld"},
    {"id": "genesis", "name": "Sega Genesis", "width": 320, "height": 224, "generation": 4, "type": "home"},
    {"id": "sms", "name": "Sega Master System", "width": 256, "height": 192, "generation": 3, "type": "home"},
    {"id": "saturn", "name": "Sega Saturn", "width": 320, "height": 224, "generation": 5, "type": "home"},
    {"id": "dreamcast", "name": "Dreamcast", "width": 640, "height": 480, "generation": 6, "type": "home"},
    {"id": "pce", "name": "PC Engine / TurboGrafx-16", "width": 256, "height": 224, "generation": 4, "type": "home", "regionName": "PC Engine (Japan)"},
    {"id": "ps1", "name": "PlayStation", "width": 320, "height": 240, "generation": 5, "type": "home"},
    {"id": "ps2", "name": "PlayStation 2", "width": 640, "height": 480, "generation": 6, "type": "home"},
    {"id": "ps3", "name": "PlayStation 3", "width": 1280, "height": 720, "generation": 7, "type": "home"},
    {"id": "ps4", "name": "PlayStation 4", "width": 1920, "height": 1080, "generation": 8, "type": "home"},
    {"id": "psp", "name": "PlayStation Portable", "width": 480, "height": 272, "generation": 7, "type": "handheld"},
    {"id": "vita", "name": "PlayStation Vita", "width": 960, "height": 544, "generation": 8, "type": "handheld"},
    {"id": "xbox", "name": "Xbox", "width": 640, "height": 480, "generation": 6, "type": "home"},
    {"id": "x360", "name": "Xbox 360", "width": 1280, "height": 720, "generation": 7, "type": "home"},
    {"id": "xone", "name": "Xbox One", "width": 1920, "height": 1080, "generation": 8, "type": "home"}
];

const emulators = [
    {"id": "custom", "name": "Custom", "width": 0, "height": 0, "cpu": "?", "ram": "?", "vram": "?" },
    {"id": "psp", "name": "PlayStation Portable", "width": 480, "height": 272, "cpu": "MIPS R4000", "ram": "32 MB", "vram": "4 MB" },
    {"id": "vita", "name": "PlayStation Vita", "width": 960, "height": 544, "cpu": "ARM Cortex-A9", "ram": "512 MB", "vram": "128 MB" },
    {"id": "nds", "name": "Nintendo DS", "width": 256, "height": 192, "cpu": "ARM9 & ARM7", "ram": "4 MB", "vram": "656 KB" },
    {"id": "dsi", "name": "Nintendo DSi", "width": 256, "height": 192, "cpu": "ARM9 & ARM7", "ram": "16 MB", "vram": "4 MB" },
    {"id": "3ds", "name": "Nintendo 3DS", "width": 400, "height": 240, "cpu": "ARM11 & DMP PICA200", "ram": "128 MB", "vram": "6 MB" },
    {"id": "pocketgo", "name": "PocketGo/Q90", "width": 320, "height": 240, "chipset": "Allwinner f1c100s", "cpu": "ARM 926EJ-S", "ram": "32 MB", "vram": "?" },
    {"id": "rg350", "name": "RG-350", "width": 320, "height": 240, "cpu": "JZ4770 Dual-core 1.0 GHz", "ram": "512 MB", "vram": "?" },
    {"id": "rg35xxh" , "name": "RG-35XX H", "width": 640, "height": 480, "chipset": "Allwinner h700", "cpu": "ARM Cortex-A53", "ram": "1 GB", "vram": "?" },
    {"id": "rg34xxsp" , "name": "RG-34XX SP", "width": 720, "height": 480, "chipset": "Allwinner h700", "cpu": "ARM Cortex-A53", "ram": "2 GB", "vram": "?" }
]

function getPlatformById(id) {
    return platforms.find(platform => platform.id === id);
}
function getEmulatorById(id) {
    return emulators.find(emulator => emulator.id === id);
}

function populateSelectOptions() {
    const sourceSelect = document.getElementById("sourceConsole");
    sourceSelect.innerHTML = "";

    const default_option = document.createElement("option");
    default_option.value = "";
    default_option.text = "Select console...";
    sourceSelect.appendChild(default_option);

    emulators.forEach(emulator => {
        const option = document.createElement("option");
        option.value = emulator.id;
        option.text = emulator.name;
        sourceSelect.appendChild(option);
    });
}

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

function aspectRatio(w, h) {
    let g = gcd(w, h);
    return `${w/g} : ${h/g}`;
}

function maxScale(emulatorWidth, emulatorHeight, platformWidth, platformHeight) {
    let maxScale = "";
    const scaleW = (emulatorWidth / platformWidth).toFixed(2);
    const scaleH = (emulatorHeight / platformHeight).toFixed(2);

    const scale = Math.min(scaleW, scaleH);

    const areaEmulator = emulatorWidth * emulatorHeight;
    const areaPlatform = platformWidth * platformHeight * scale * scale;
    const areaPercent = ((areaPlatform / areaEmulator) * 100).toFixed(2);

    if (areaPercent === "100.00") {
        maxScale += `<b>${scale}x  (Full Fit!)</b>`;
    } else {
        maxScale += `${scale}x  (${areaPercent}% fill)<br/>`;
        if (scale == scaleH && scaleW != scaleH) {
            maxScale += "(Vertical Bars)";
        }
        if (scale == scaleW && scaleW != scaleH) {
            maxScale += "(Horizontal Bars)";
        }
        if (scaleW == scaleH) {
            maxScale += "(Bordered)";
        }
        console.log("Max full scale", scaleW, scaleH, scale);
    }
    return maxScale;
}


function maxIntegerScale(emulatorWidth, emulatorHeight, platformWidth, platformHeight) {
    let maxScale = "";
    const scaleW = Math.floor(emulatorWidth / platformWidth);
    const scaleH = Math.floor(emulatorHeight / platformHeight);

    const scale = Math.min(scaleW, scaleH);

    const areaEmulator = emulatorWidth * emulatorHeight;
    const areaPlatform = platformWidth * platformHeight * scale * scale;
    const areaPercent = ((areaPlatform / areaEmulator) * 100).toFixed(2);

    if (areaPercent === "100.00") {
        maxScale += `<b>${scale}x  (Perfect Fit!)</b>`;
    } else {
        maxScale += `${scale}x  (${areaPercent}% fill)<br/>`;
        if (scale == scaleH && scaleW != scaleH) {
            maxScale += "(Vertical Bars)";
        }
        if (scale == scaleW && scaleW != scaleH) {
            maxScale += "(Horizontal Bars)";
        }
        if (scaleW == scaleH) {
            maxScale += "(Bordered)";
        }
        console.log("Max int scale", scaleW, scaleH, scale);
    }

    return maxScale;
}

function refresh() {
    const aboutTable = document.getElementById("consoleAbout");
    const sourceSelect = document.getElementById("sourceConsole");
    const selectedEmulatorId = sourceSelect.value;
    const emulator = getEmulatorById(selectedEmulatorId);
    if (emulator) {
        aboutTable.innerHTML = `
            <tr><td>Resolution:</td><td>${emulator.width} x ${emulator.height}</td></tr>
            <tr><td>Aspect Ratio:</td><td>${aspectRatio(emulator.width, emulator.height)}</td></tr><!-- ${(emulator.width / emulator.height).toFixed(2)}:1-->
            <tr><td>CPU:</td><td>${emulator.cpu}</td></tr>
            <tr><td>RAM:</td><td>${emulator.ram}</td></tr>
            <tr><td>VRAM:</td><td>${emulator.vram}</td></tr>
        `;
    }

    const screenTable = document.getElementById("consoleScreen");
    if (emulator) {
        screenTable.innerHTML = `<tr><th>Platform</th><th>Platform Resolution</th><th>Max Scale</th><th>Max Integer Scale</th></tr>`;
        platforms.forEach(platform => {
            console.log("Calculating for", platform.name);
            const maxScaleValue = maxScale(emulator.width, emulator.height, platform.width, platform.height);
            const maxIntScaleValue = maxIntegerScale(emulator.width, emulator.height, platform.width, platform.height);
            screenTable.innerHTML += `
                <tr>
                    <td>${platform.name}</td>
                    <td>${platform.width}x${platform.height}, ${aspectRatio(platform.width, platform.height)}</td>
                    <td>${maxScaleValue}</td>
                    <td>${maxIntScaleValue}</td>
                </tr>
            `;
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    populateSelectOptions();
});
