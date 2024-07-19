console.log("start");

function longOperation(waitms=10000){
    console.log("longoperation started");

    setTimeout(function(){
        console.log("longoperation stopped");
    },waitms);

}
function longOperation1(waitms=2000){
    console.log("longoperation-- started");

    setTimeout(function(){
        console.log("longoperation-- stopped");
    },waitms);

}
longOperation()
longOperation1()

console.log("end");