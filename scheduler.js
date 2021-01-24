var i9 = [];
var i10 = [];
var i11 = [];
var i12 = [];
var i1 = [];
var i2 = [];
var i3 = [];
var i4 = [];
var i5 = [];

//Current date
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do"));

//load
i9 = JSON.parse(localStorage.getItem("i9"));
$("#i9").val(i9)

i10 = JSON.parse(localStorage.getItem("i10"));
$("#i10").val(i10)

i11 = JSON.parse(localStorage.getItem("i11"));
$("#i11").val(i11)

i12 = JSON.parse(localStorage.getItem("i12"));
$("#i12").val(i12)

i1 = JSON.parse(localStorage.getItem("i1"));
$("#i1").val(i1)

i2 = JSON.parse(localStorage.getItem("i2"));
$("#i2").val(i2)

i3 = JSON.parse(localStorage.getItem("i3"));
$("#i3").val(i3)

i4 = JSON.parse(localStorage.getItem("i4"));
$("#i4").val(i4)

i5 = JSON.parse(localStorage.getItem("i5"));
$("#i5").val(i5)


//Save
var save9 = function() {
    var info9 = $("#i9").val().trim();
    localStorage.setItem("i9", JSON.stringify(info9))
}

var save10 = function() {
    var info10 = $("#i10").val().trim();
    localStorage.setItem("i10", JSON.stringify(info10))
}

var save11 = function() {
    var info11 = $("#i11").val().trim();
    localStorage.setItem("i11", JSON.stringify(info11))
}

var save12 = function() {
    var info12 = $("#i12").val().trim();
    localStorage.setItem("i12", JSON.stringify(info12))
}

var save1 = function() {
    var info1 = $("#i1").val().trim();
    localStorage.setItem("i1", JSON.stringify(info1))
}

var save2 = function() {
    var info2 = $("#i2").val().trim();
    localStorage.setItem("i2", JSON.stringify(info2))
}

var save3 = function() {
    var info3 = $("#i3").val().trim();
    localStorage.setItem("i3", JSON.stringify(info3))
}

var save4 = function() {
    var info4 = $("#i4").val().trim();
    localStorage.setItem("i4", JSON.stringify(info4))
}

var save5 = function() {
    var info5 = $("#i5").val().trim();
    localStorage.setItem("i5", JSON.stringify(info5))
}

//Time Tracking
var timeTracker = function() {
    var compareTo = moment();
    var nine = moment().hours(9);
    var ten = moment().hours(10);
    var eleven = moment().hours(11);
    var twelve = moment().hours(12);
    var one = moment().hours(13);
    var two = moment().hours(14);
    var three = moment().hours(15);
    var four = moment().hours(16);
    var five = moment().hours(17);

    $(".description").removeClass("past present future")

    //9AM
    if (compareTo > nine) {
        $("#i9").addClass("past")}
    else if (compareTo < nine) {
        $("#i9").addClass("future")}
    else if (compareTo = nine) {
        $("#i9").addClass("present")}

    //10AM
    if (compareTo > ten) {
        $("#i10").addClass("past")}
    else if (compareTo < ten) {
        $("#i10").addClass("future")}
    else if (compareTo = ten) {
        $("#i10").addClass("present")}

    //11AM
    if (compareTo > eleven) {
        $("#i11").addClass("past")}
    else if (compareTo < eleven) {
        $("#i11").addClass("future")}
    else if (compareTo === eleven) {
        $("#i11").addClass("present")}

    //12AM
    if (compareTo > twelve) {
        $("#i12").addClass("past")}
    else if (compareTo < twelve) {
        $("#i12").addClass("future")}
    else if (compareTo = twelve) {
        $("#i12").addClass("present")}

    //1PM
    if (compareTo > one) {
        $("#i1").addClass("past")}
    else if (compareTo < one) {
        $("#i1").addClass("future")}
    else if (compareTo = one) {
        $("#i1").addClass("present")}

    //2PM
    if (compareTo > two) {
        $("#i2").addClass("past")}
    else if (compareTo < two) {
        $("#i2").addClass("future")}
    else if (compareTo = two) {
        $("#i2").addClass("present")}

    //3PM
    if (compareTo > three) {
        $("#i3").addClass("past")}
    else if (compareTo < three) {
        $("#i3").addClass("future")}
    else if (compareTo = three) {
        $("#i3").addClass("present")}

    //4PM
    if (compareTo > four) {
        $("#i4").addClass("past")}
    else if (compareTo < four) {
        $("#i4").addClass("future")}
    else if (compareTo = four) {
        $("#i4").addClass("present")}

    //5PM
    if (compareTo > five) {
        $("#i5").addClass("past")}
    else if (compareTo < five) {
        $("#i5").addClass("future")}
    else if (compareTo = five) {
        $("#i5").addClass("present")}
}

$("#save9").on("click", save9);
$("#save10").on("click", save10);
$("#save11").on("click", save11);
$("#save12").on("click", save12);
$("#save1").on("click", save1);
$("#save2").on("click", save2);
$("#save3").on("click", save3);
$("#save4").on("click", save4);
$("#save5").on("click", save5);
timeTracker();