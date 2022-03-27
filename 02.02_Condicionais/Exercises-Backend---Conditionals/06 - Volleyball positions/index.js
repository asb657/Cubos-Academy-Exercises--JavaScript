const height_cm = 200;

if (height_cm < 180){
    console.log("FAIL");
} else if (height_cm >= 180 && height_cm < 185){
    console.log("LÍBERO");
} else if (height_cm >= 185 && height_cm < 195){
    console.log("WING / HITTER SPIKER");
} else if (height_cm >= 195 && height_cm < 205){
    console.log("OPPOSITE SPIKER");
} else if (height_cm >= 205){
    console.log("MIDDLE-BLOCKER");
}