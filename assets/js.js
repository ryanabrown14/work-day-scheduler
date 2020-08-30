
 
$("#currentDay").text(moment().format("MMMM Do YYYY"));
console.log ("currentDay");

var hour = moment().hours();
console.log(hour);
localStorage.getItem

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

function setUp() {

    var hour9 = JSON.parse(localStorage.getItem("9AM"));
    $("#9").val(hour9);

    var hour10 = JSON.parse(localStorage.getItem("10AM"));
    $("#10").val(hour10);

    var hour11 = JSON.parse(localStorage.getItem("11AM"));
    $("#11").val(hour11);

    var hour12 = JSON.parse(localStorage.getItem("12PM"));
    $("#12").val(hour12);

    var hour13 = JSON.parse(localStorage.getItem("1PM"));
    $("#13").val(hour13);

    var hour14 = JSON.parse(localStorage.getItem("2PM"));
    $("#14").val(hour14);

    var hour15 = JSON.parse(localStorage.getItem("3PM"));
    $("#15").val(hour15);

    var hour16 = JSON.parse(localStorage.getItem("4PM"));
    $("#16").val(hour16);

    var hour17 = JSON.parse(localStorage.getItem("5PM"));
    $("#17").val(hour17);
  
  }; 


$(".saveBtn").on("click",function(){
    var text = $(this).siblings("textarea").val();
    var hour= $(this).siblings("div").text();
    

    localStorage.setItem(hour, JSON.stringify(text));
});

setUp();









