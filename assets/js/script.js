var currentDate = moment();
var upLoadDate;
var duration;

var projectDate = ["06/26/2019","07/04/2019","07/09/2019","07/15/2019","07/11/2019","07/16/2019","07/19/2019","07/19/2019"];

$(document).ready(function(){
    for(let i = 0; i < 8 ; i++){
        upLoadDate = projectDate[i];
        duration = moment.duration(upLoadDate.diff(currentDate,"days"));
        $(`#project[${i}]`).text(duration);
        console.log(duration);
    }
})


