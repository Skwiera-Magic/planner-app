let log = console.log.bind(document)
let container = $('.container')
log(container)
let list = $('<ul>')
container.append(list)
let hourBlock = $('<li>')
for (let i = 0; i < 25; i++) {
list.append(hourBlock.eq(i))
}