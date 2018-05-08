function decode (word) {
    let wordArr = word.split(' ');
    for (let x = 0; x < wordArr.length; x++) {
        switch (wordArr[x].charAt(0)) {
            case 'a':
                wordArr[x] = wordArr[x].charAt(1);
                break;
            case 'b':
                wordArr[x] = wordArr[x].charAt(2);
                break;
            case 'c':
                wordArr[x] = wordArr[x].charAt(3);
                break;
            case 'd':
                wordArr[x] = wordArr[x].charAt(4);
                break;
            default:
                wordArr[x] = ' ';
        }
    }
    return wordArr.join('');
}

console.log(decode('craft block argon meter bells brown croon droop'));

function daysInMonth (month, leapYear) {
    switch (month) {
        case "February":
            return leapYear ? 'February has 29 days.': 'February has 28 days.';
        case "September":
        case "April":
        case "June":
        case "November":
            return `${month} has 30 days`;
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            return `${month} has 31 days`;
        default:
            console.error('Must provide a valid month');
            return '';
    }
}

console.log(daysInMonth('February'));
console.log(daysInMonth('February', true));
console.log(daysInMonth('December'));
console.log(daysInMonth('September'));
console.log(daysInMonth('Smarch'));

function rockPapScis (num) {
    try {
        if (isNaN(num) || num > 3 || num <= 0) { throw new Error()}

        const randomNo = Math.floor(Math.random() * 3) + 1;

        if (num === randomNo) {
            return `${numToSelection(num)} blocks ${numToSelection(randomNo)}. It's a Tie!`;
        }
        else if ((num === 1 && randomNo === 2) || (num === 2 && randomNo === 3) || (num === 3 && randomNo === 1)) {
            return `${numToSelection(num)} beats ${numToSelection(randomNo)}. Player wins!`;
        }
        else if ((num === 1 && randomNo === 3) || (num === 2 && randomNo === 1) || (num === 3 && randomNo === 2)) {
            return `${numToSelection(randomNo)} beats ${numToSelection(num)}. Computer wins punk!`;
        }
    }
    catch(x) {
        return 'Invalid input';
    }
    

}

function numToSelection (num) {
    if (num ===1) {return 'Rock'}
    else if (num === 2) {return 'Scissors'}
    else {return 'Paper'}
}

console.log(rockPapScis(1));
console.log(rockPapScis(3));
console.log(rockPapScis(2));
console.log(rockPapScis(40));
console.log(rockPapScis('cat'));
console.log(rockPapScis(0));