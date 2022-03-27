// Method 1 - indexOf

const nameList = [54, 22, 14, 87, 284];

let search = 22;
let location = nameList.indexOf(search);


if (location > 0) {
    console.log(`${search} has been found in the index ${location}.`);
} else {
    console.log(location);
}


// Method 2 - loop

const nameList2 = [54, 22, 14, 10, 284];
let search2 = 2;
let index = -1;

for (let i = 0; i < nameList.length; i++) {
	if (nameList2[i] === search2) {
		index = i;
        break;
	}
}

console.log(index);
    