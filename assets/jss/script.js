let log = console.log.bind(document)

// setting date and time on top of the planner
$("#currentDay").text(moment().format("h:mm:ssa, dddd, Do MMM YYYY"))


// array of buisness hours
let hours = ["9", "10", "11", "12", "13", "14", "15", "16"]

// rendering list of hour blocks
for (let i = 0; i < hours.length; i++) {
    let container = $('.container')
let list = $('<ul>')
container.append(list)
let listItem = $('<li>')
listItem.text(hours[i])
listItem.attr("class", "row")
//listItem.attr("class", "time-block")
for (let i = 0; i < 25; i++) {
list.append(listItem[i])
}

}