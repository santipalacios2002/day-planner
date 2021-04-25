var saveBtn = $('.row').children('.saveBtn')                                            //retrieves all the buttons


//=====================  Displays current day  =====================
//=======================  in the jumbotron  =======================

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));                           //adds the current date in day, month, date, year format


//=====================  Adds the hour to the time col and   =====================
//=================  adds bg color to past, present, and future  =================

for (var index = 8; index < 17; index++) {
    if (index < 12) {
        $('.row').children('.hour').eq(index - 8).text(`${index} AM`)                   //adds the time on the time col
    } else {
        $('.row').children('.hour').eq(index - 8).text(`${index} PM`)
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
    var textEl = $(this.parentNode).children('.col-md-10').attr('id');                  //gets the text element id from the text col by going to the parent node, down to the children 
    var textToStorage = $(this.parentNode).children('.col-md-10').val();                //retrieves the text that will be stored locally
    localStorage.setItem(textEl, textToStorage)                                         //stores the element and the text
})



