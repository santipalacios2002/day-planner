

//=====================  Displays current day  =====================
//=======================  in the jumbotron  =======================

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


//=====================  Adds the hour to the time col and   =====================
//=================  adds bg color to past, present, and future  =================

for (var index = 8; index < 17; index++) {
    if (index < 12) {
        $('.row').children('.hour').eq(index-8).text(`${index} AM`)
    } else {
        $('.row').children('.hour').eq(index-8).text(`${index} PM`)
    }
    if (index == moment().format('H')) {
        $('textarea').eq(index-8).addClass('present')
    } else if (index < moment().format('H')) {
        $('textarea').eq(index-8).addClass('past')
    } else {
        $('textarea').eq(index-8).addClass('future')
    }
}