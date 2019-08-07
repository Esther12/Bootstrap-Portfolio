var currentDate = moment();
var upLoadDate;
var duration;
var projectDate = ["06/26/2019","07/04/2019","07/09/2019","07/15/2019","07/11/2019","07/16/2019","07/19/2019","07/19/2019"];

$(document).ready(function(){
    for(let i = 0; i < 8 ; i++){
        upLoadDate = moment(projectDate[i]);
        console.log(upLoadDate);
        console.log(currentDate);
        duration = upLoadDate.diff(currentDate,"days") *(-1);

        $(`#project${i+1}`).text(duration);
        console.log(duration);
    }
})


