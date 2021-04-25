var saveBtn = $('.row').children('.saveBtn')
// console.log(saveBtn)

//=====================  Displays current day  =====================
//=======================  in the jumbotron  =======================

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


//=====================  Adds the hour to the time col and   =====================
//=================  adds bg color to past, present, and future  =================

for (var index = 8; index < 17; index++) {
    if (index < 12) {
        $('.row').children('.hour').eq(index - 8).text(`${index} AM`)
        $('.row').children('.saveBtn').eq(index - 8).attr('id', `btn-${index - 7}`)
    } else {
        $('.row').children('.hour').eq(index - 8).text(`${index} PM`)
        $('.row').children('.saveBtn').eq(index - 8).attr('id', `btn-${index - 7}`)
    }
    if (index == moment().format('H')) {                                                                    //if-else statement for the bg color
        $('textarea').eq(index - 8).addClass('present')
    } else if (index < moment().format('H')) {
        $('textarea').eq(index - 8).addClass('past')
    } else {
        $('textarea').eq(index - 8).addClass('future')
    }
    $(`#text-0${index-7}`).text(localStorage.getItem(`text-0${index-7}`))                                   //retrieves the stored value

}


saveBtn.on('click', function () {
    var buttonNbr = $(this.parentNode).children('.saveBtn').attr('id');                                     //gets the parent node id to know 
    var textEl = $(this.parentNode).children('.col-md-10').attr('id');
    var textToStorage = $(this.parentNode).children('.col-md-10').val();
    localStorage.setItem(textEl, textToStorage)
})



