$("#currentDay").text(moment().format("MMMM Do YYYY"));
console.log ("currentDay");

var hour = moment().hours();
console.log(hour);


$("textarea").each(function(){
    var rowTime = $(this).attr("id");
    var number = parseInt(rowTime);
    if (number === hour){
        $(this).addClass("present");
    }
    else if (number > hour){
        $(this).addClass("future");
    }
    else {
        $(this).addClass("past");
    };

});




