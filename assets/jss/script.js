let log = console.log.bind(document)

// setting date and time on top of the planner
$("#currentDay").text(moment().format("h:mm:ssa, dddd, Do MMM YYYY"))


// array of buisness hours
let hours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]

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
    hour.addClass('hour col-1')
    hour.attr('id', hours[i])
    hour.text(hours[i])
    listItem.append(hour)
    // creating day plan area and appending to list item
    let dayPlan = $('<div>')
    dayPlan.addClass('textarea col-10')
    listItem.append(dayPlan)
    // creating save button and appending to list item
    let saveBtn = $('<button>')
    saveBtn.addClass('saveBtn col-1')
    // creating save i and appending to save button
    let save = $('<i>')
    save.text('Save')
    saveBtn.append(save)
    listItem.append(saveBtn)
    for (let j = 0; j < hours.length; j++) {
        list.append(listItem)
    }
}

// checking what color should the blocks be
var currentHour = moment().hour();
log(currentHour)