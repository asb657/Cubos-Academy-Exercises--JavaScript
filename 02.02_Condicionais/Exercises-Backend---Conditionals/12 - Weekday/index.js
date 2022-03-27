const day = 06
const month = 02
const year = 2022

var data = `${month}/${day}/${year}`;

function weekday(data, local)
{
    var date = new Date(data);
    return date.toLocaleDateString(local, { weekday: 'long' });        
}

var dayOfTheWeek = weekday(data, "en-US");
console.log(dayOfTheWeek)