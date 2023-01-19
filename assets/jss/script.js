let log = console.log.bind(document)

// setting date and time on top of the planner
$("#currentDay").text(moment().format("h:mm:ssa, dddd, Do MMM YYYY"))


// array of buisness hours
let hours = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"]

// rendering list of hour blocks
    let container = $('.container')
    let list = $('<ul>')
    container.append(list)
for (let i = 0; i < hours.length; i++) {
    let listItem = $('<li>')
    listItem.text(hours[i])
    listItem.attr('class', 'row')
    let hourBlock = $('<span>')
    hourBlock.attr('class', 'time-block')
    hourBlock.css('background-color', 'blue')
    listItem.append(hourBlock)
    // todo: i'm not sure why this loop is here and why it's not working without it??
    for (let i = 0; i < 10; i++) {
        list.append(listItem[i])
    }
}