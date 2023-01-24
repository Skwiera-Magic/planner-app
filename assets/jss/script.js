let log = console.log.bind(document)

// setting date and time on top of the planner
setInterval(function () {
    $("#currentDay").text(moment().format("h:mm:ssa, dddd, Do MMM YYYY"))
}, 1000);


// $('.container').append('<ul class="list"></ul>')
for (let i = 9; i < 17; i++) {
    
// $('.list').append(
//     '<li class="row time-block"><div class="hour col-1"></div><textarea class="description col-10"></textarea><button class="saveBtn col-1"><i class="far fa-save"></i></button></li>'
    
// )

$('.hour').text(i + ":00")
}



$('.saveBtn').on('click', function(event) {
    log($(event.target).siblings('textarea').val())
})
$('.far').on('click', function(event) {
    log('sdsd')
    $(event.target).parent('button').click()
})

$('.container').append('<div class="clearBtnSpace text-center"><button class="btn btn-primary">Clear Schedule</button></div>')


 $('.btn-primary').on('click', function () {
     localStorage.clear();
     log("wow")
 })