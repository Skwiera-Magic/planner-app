let log = console.log.bind(document)

// setting date and time on top of the planner
setInterval(function () {
    $("#currentDay").text(moment().format("h:mm:ssa, dddd, Do MMM YYYY"))
}, 1000);


// array of buisness hours
let hours = ["9", "10", "11", "12", "13", "14", "15", "16"]

// rendering list of hour blocks
let container = $('.container')
let list = $('<ul>')
container.append(list)

// for loop going through hours array and appending list item to list for each
for (let i = 0; i < hours.length; i++) {
    //creating list item
    let listItem = $('<li>')
    listItem.addClass('row time-block')
    // creating hour block and appending to list item
    let hour = $('<div>')
    hour.attr('id', hours[i])
    hour.addClass('hour col-1')
    hour.text(hours[i] + ':00')
    listItem.append(hour)
    // creating day plan area and appending to list item
    let textArea = $('<textarea>')
    textArea.attr('class', hours[i])
    textArea.addClass('description col-10')
    listItem.append(textArea)
    // creating save button and appending to list item
    let saveBtn = $('<button>')
    saveBtn.addClass('saveBtn col-1')
    saveBtn.attr('title', 'Save your schedule to local storage')
    // creating save i and appending to save button
    let save = $('<i>')
    save.addClass('far fa-save')
    save.attr('title', 'Save your schedule to local storage')
    saveBtn.append(save)
    listItem.append(saveBtn)
    list.append(listItem)
}

// checking what color should the blocks be
var currentHour = moment().hour();
if (currentHour < 9) {
    $('.description').addClass('future')
}

if (currentHour == 9) {
    $('.description').addClass('future')
    $('.9').removeClass('future')
    $('.9').addClass('present')
}

if (currentHour == 10) {
    $('.description').addClass('future')
    $('.9').removeClass('future')
    $('.9').addClass('past')
    $('.10').removeClass('future')
    $('.10').addClass('present')
}

if (currentHour == 11) {
    $('.description').addClass('future')
    $('.9').removeClass('future')
    $('.9').addClass('past')
    $('.10').removeClass('future')
    $('.10').addClass('past')
    $('.11').removeClass('future')
    $('.11').addClass('present')
}

if (currentHour == 12) {
    $('.description').addClass('future')
    $('.9').removeClass('future')
    $('.9').addClass('past')
    $('.10').removeClass('future')
    $('.10').addClass('past')
    $('.11').removeClass('future')
    $('.11').addClass('past')
    $('.12').removeClass('future')
    $('.12').addClass('present')
}

if (currentHour == 13) {
    $('.description').addClass('past')
    $('.14').removeClass('past')
    $('.14').addClass('future')
    $('.15').removeClass('past')
    $('.15').addClass('future')
    $('.16').removeClass('past')
    $('.16').addClass('future')
    $('.13').addClass('present')
}

if (currentHour == 14) {
    $('.description').addClass('past')
    $('.14').removeClass('past')
    $('.14').addClass('present')
    $('.15').removeClass('past')
    $('.15').addClass('future')
    $('.16').removeClass('past')
    $('.16').addClass('future')
}

if (currentHour == 15) {
    $('.description').addClass('past')
    $('.15').removeClass('past')
    $('.15').addClass('present')
    $('.16').removeClass('past')
    $('.16').addClass('future')
}

if (currentHour == 16) {
    $('.description').addClass('past')
    $('.16').removeClass('past')
    $('.16').addClass('present')
}

if (currentHour > 16) {
    $('.description').addClass('past')
}


// setting up event listener and saving input to local storage
$('.saveBtn').on('click', function (event) {
    let text = $(event.target).siblings('textarea').val()
    let time = $(event.target).siblings('div').attr('id')
    localStorage.setItem(time, text)
})

$('i').on('click', function () {
    $('.saveBtn').click();
})

function getStorage() {
    $('.9').val(localStorage.getItem('9'))
    $('.10').val(localStorage.getItem('10'))
    $('.11').val(localStorage.getItem('11'))
    $('.12').val(localStorage.getItem('12'))
    $('.13').val(localStorage.getItem('13'))
    $('.14').val(localStorage.getItem('14'))
    $('.15').val(localStorage.getItem('15'))
    $('.16').val(localStorage.getItem('16'))
}

getStorage();


let clearSpace = $('<div>')
clearSpace.addClass('col-12 text-center')
$('.container').append(clearSpace)
let clearButton = $('<button>')
clearButton.addClass('btn btn-primary')
clearButton.text('Clear Schedule')
clearButton.attr('title', 'This will clear whole local storage, not just schedule, use with care')
clearSpace.append(clearButton)

clearButton.on('click', function () {
    localStorage.clear();
    getStorage();
})