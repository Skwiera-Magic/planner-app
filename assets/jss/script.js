let log = console.log.bind(document)
let container = $('.container')
log(container)
let list = $('<ul>')
container.append(list)
let listItem = $('<li>')
listItem.text('test')
listItem.attr("class", "row")
//listItem.attr("class", "time-block")
for (let i = 0; i < 25; i++) {
list.append(listItem[i])
}