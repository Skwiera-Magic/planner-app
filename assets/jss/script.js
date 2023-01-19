let log = console.log.bind(document)

// setting date and time on top of the planner
$("#currentDay").text(moment().format("h:mm:ssa, dddd, Do MMM YYYY"))


// rendering list of hour blocks
let container = $('.container')
let list = $('<ul>')
container.append(list)
let listItem = $('<li>')
listItem.text('test')
listItem.attr("class", "row")
//listItem.attr("class", "time-block")
for (let i = 0; i < 25; i++) {
list.append(listItem[i])
}