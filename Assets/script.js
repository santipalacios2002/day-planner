//=====================  Displays current day  =====================
//=======================  in the jumbotron  =======================

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));                           //adds the current date in day, month, date, year format


//=====================  Adds the hour to the time col and   =====================
//=================  adds bg color to past, present, and future  =================

//for loop that builds the timeblocks (practicing jquery)
for (var i = 0; i < 9; i++) {
    $('.container').append($(`<div id="row-0${i+1}" class="row time-block"><div id="time-0${i+1}" class="col-md-1 col-sm-1 col-2 hour"></div><textarea id="text-0${i+1}" class="col-md-10 col-sm-8 col-8 col-8"></textarea><button class="col-md-1 col-sm-1 col-sm-1 col-2 saveBtn"><i class="far fa-save"></i></button></div>`))   
}

var saveBtn = $('.row').children('.saveBtn')                                            //retrieves all the buttons

for (var index = 8; index < 17; index++) {
    if (index < 12) {
        $('.row').children('.hour').eq(index - 8).text(`${index} AM`)                   //adds the time on the time col
    } else if (index === 12) {
        $('.row').children('.hour').eq(index - 8).text(`${index} PM`)
    } else {
        $('.row').children('.hour').eq(index - 8).text(`${index - 12} PM`)
    }
    if (index == moment().format('H')) {                                                //if-else statement for the bg color
        $('textarea').eq(index - 8).addClass('present')
    } else if (index < moment().format('H')) {
        $('textarea').eq(index - 8).addClass('past')
    } else {
        $('textarea').eq(index - 8).addClass('future')
    }
    $(`#text-0${index - 7}`).text(localStorage.getItem(`text-0${index - 7}`))           //retrieves all the stored values and places them on their proper text element
}

saveBtn.on('click', function () {
    console.log('papi')
    var textEl = $(this.parentNode).children('.col-md-10').attr('id');                  //gets the text element id from the text col by going to the parent node, down to the children 
    var textToStorage = $(this.parentNode).children('.col-md-10').val();                //retrieves the text that will be stored locally
    localStorage.setItem(textEl, textToStorage)                                         //stores the element and the text
})



