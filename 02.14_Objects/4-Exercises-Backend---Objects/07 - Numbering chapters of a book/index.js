const book = {
    name: 'The Power of Habit',
    chapters: [
        {
            name: "The Habit Loop",
        },
        {
            name: "The Anxious Brain",
        },
        {
            name: "The Golden Rule of Habit Change",
        },
        {
            name: "Keystone Habits, or the Ballad of Paul O`neill",
        },
        {
            name: "Starbucks and the Habit of Success",
        },
        {
            name: "The power of a crisis",
        },
        {
            name: "How target knows what you want before you do",
        },
        {
            name: "Saddleback Church and the Montgomery Bus Boycott",
        },
        {
            name: "The neorology of free will",
        },
    ]
}


for (let i = 0; i < book.chapters.length; i++){
    book.chapters[i].number = i + 1;
}

console.log(book);