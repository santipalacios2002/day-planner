

//=====================  Displays current day  =====================
//=======================  in the jumbotron  =======================

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


//=====================  Adds the hour to  =====================
//=======================  the time col  =======================

for (var index = 8; index < 17; index++) {
    if (index < 12) {
        $('.row').children('.hour').eq(index-8).text(`${index} AM`)
    } else {
        $('.row').children('.hour').eq(index-8).text(`${index} PM`)
    }
}



