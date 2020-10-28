const $ = require("jquery");

$(document).ready(function(){
    // alert("inside excel");
    
    let db=[];
        $(".grid .cell").on("click",function(){
        // console.log(this); // that click event element will be catched in this
        // let text= $(this).text();  // extract text written inside div
        let ci = $(this).attr("ci");  // extract  // string format
        let ri = $(this).attr("ri");  // extract the values of the attributes  // string format
        // console.log(row + " "+ col);
        // console.log(text);
        let row =Number(ri)+1;
        let col= String.fromCharCode(Number(ci)+65);
        // console.log(col+""+row); // "" added so that they may not get added directly
        let Locationaddress=col+""+row;
        $("#address").val(Locationaddress);
        let cellObj = db[ri][ci];
        if(cellObj.formula)
        {
            $("for")
        }
        //check for formula or value
        // init();
    });
    function init(){
        let allRows=$(".grid .row");
        // console.log(allRows);
        console.log("yes working");
        for(let i=0; i <allRows.length; i++){
            let allColOfARow = $(allRows[i]).find(".cell")
            let rowArr=[];
            for(let j=0 ; j< allColOfARow.length; j++){
                let cellObj={
                    value: 0,
                    formula:""
                }
                rowArr.push(cellObj)
            }
            db.push(rowArr);
    
        }
        console.log(db);
    
    }
    
    // value, formula
    
    init();

})