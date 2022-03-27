const firstName = "Влади́мир";
const lastName = "Влади́мирович Пу́тин";
const nickname = "Влад";

if(!nickname) {
    console.log(`${firstName} ${lastName}`);
} else if (!lastName) {
    console.log(`${firstName}`);
} else {
    console.log(`${nickname}`);
}