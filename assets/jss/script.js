let log = console.log.bind(document)

// setting date and time on top of the planner
setInterval(function () {
    $("#currentDay").text(moment().format("h:mm:ssa, dddd, Do MMM YYYY"))
}, 1000);

function decideHour(hour) {
    let currentHour = moment().hour()
    if (hour < currentHour) {
        return 'past'
    }
    else if (hour == currentHour) {
        return 'present'
    }
    else if (hour > currentHour) {
        return 'future'
    }
}


// $('.container').append('<ul class="list"></ul>')
for (let i = 9; i < 17; i++) {
    $('.list').append(
        `<li class="row time-block">
    <div class="hour  col-1">${i}:00</div>
    <textarea id="${i}" class="description col-10 ${decideHour(i)}"></textarea>
    <button class="saveBtn col-1"><i class="far fa-save"></i></button></li>`

    )
}



$('.saveBtn').on('click', function () {
    log($(this).siblings('textarea').val())
    log($(this).siblings('textarea').attr('id'))
    let text = $(this).siblings('textarea').val()
    let time = $(this).siblings('textarea').attr('id')
    // localStorage.setItem(time, text)
    var calendar = localStorage.getItem('calendar')
    if (!calendar) {
        calendar = {}
    }
    calendar[time] = text
    localStorage.setItem('calendar', calendar)
})


$('.container').append('<div class="clearBtnSpace text-center"><button class="btn btn-primary">Clear Schedule</button></div>')


$('.btn-primary').on('click', function () {
    localStorage.clear();
})