const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

const copied = {...holidays[christmas]};
copied.name = 'X-mas Day';
const correctDate = new Date(copied.date);
correctDate.setHours(0,0,0,0);
const isEarlier = correctDate.getTime() < holidays[6].date.getTime();
console.log('New date is earlier:', isEarlier);
if (isEarlier) {
    console.log('Changes before applying:');
    console.log(`ID change: false`);
    console.log(`Name change: ${copied.name}`);
    console.log(`Date change: ${correctDate.getDate().toString().padStart(2, '0')}/${(correctDate.getMonth()+1).toString().padStart(2, '0')}/${correctDate.getFullYear()}`);
    holidays[christmas] = copied;
} else {
    console.log('Changes cancelled.');
}

const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date(holidays[0].date).getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)
console.log(firstHolidayTimestamp)
const firstDay = new Date(firstHolidayTimestamp).getDate()
const firstMonth = new Date(firstHolidayTimestamp).getMonth()
const lastDay = new Date(lastHolidayTimestamp).getDate()
const lastMonth = new Date(lastHolidayTimestamp).getMonth()


console.log(`${String(firstDay).padStart(2, '0')}/${String(firstMonth + 1).padStart(2, '0')}/${currentYear}`)
console.log(`${String(lastDay).padStart(2, '0')}/${String(lastMonth + 1).padStart(2, '0')}/${currentYear}`)

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)