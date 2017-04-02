$(document).ready(function(){

	// checking length, if exceeding, too long
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };

    // declaring variables
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    

    // clicking on numbers a other than clear and clearall will result in the number string incrementing the results
    $("#numbers a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    
     $("#operators a, #sq").not("#equals").click(function(){
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text("0");
     });

     $("#sqrt").click(function(){
        operator = $(this).text();
        totaldiv.text("√");
     });


    $("#clear, #clearall").click(function(){
        number = "";
        totaldiv.text("0");
        if($(this).attr("id") == "clearall"){
            newnumber = "";    
        }
    });
    

    $("#equals").click(function(){
        if(operator == "+"){
            number = (parseInt(newnumber, 10) + parseInt(number, 10)).toString(10);    
        }
        else if (operator == "-"){
         number = (parseInt(newnumber, 10) - parseInt(number, 10)).toString(10);   
        }
        else if (operator == "*"){
        number = (parseInt(newnumber, 10) * parseInt(number, 10)).toString(10);  
        }
        else if (operator == "/"){
        number = (parseInt(newnumber, 10) / parseInt(number, 10)).toString(10);      
        }
        else if (operator == "^"){
        var base = parseInt(newnumber, 10);
        var exponent = parseInt(number, 10);
        number = Math.pow(base, exponent).toString(10);      
        }
        else if (operator == "√"){
        var num = parseInt(number, 10); 
        number = Math.sqrt(num).toString(10);      
        }

        
        testNumLength(number);
        totaldiv.text(number);
        number = "";
        newnumber = "";
        
        
    });

});