

function MEAN() {
	 var grnum = document.getElementsByName('grnum');
	 var grdem = document.getElementsByName('grdem');
	 var percent = document.getElementsByName('percent');
	 var i;
	 var total = 0;
	 var mean = 0;
	 var avgcount = 0;


	 for(i= 0; i< grnum.length; i=i+1){
	 	var num = parseFloat(grnum[i].value) || 0;
	 	var dem = parseFloat(grdem[i].value);
	 	if( num < 0 || dem < 0){
	 		alert("Invalid Input on A" + (i+1) + "'s Grade Inputs");
	 	}
	 	if(num == 0 || num < 0){
	 		percent[i].innerHTML = "0%";
	 	}
	 	if( num > -1 && dem > -1){
	 		if( num == 0 && dem > 0){
	 			alert("Grade Numerator on A" + (i+1) + " is Assumed to be '0'");
	 		}
	 		if( num && isNaN(dem)){
	 			alert("Input Denominator Missing on A" + (i+1) + "'s Grade Inputs");
	 			percent[i].innerHTML = "UNAVAILABLE";
	 			document.getElementById("MEAN").innerHTML = "Mean is currently UNAVAILABLE";
	 		}
	 		else{
	 			if (isNaN(dem)){
	 				continue;
	 			}
	 		var apercent = num/dem;
	 		percent[i].innerHTML = (apercent * 100) + " %";
	 		total = total + apercent;
	 		avgcount = avgcount + 1; 
	 		}
	 	}
	 
	 }
	if(avgcount == 0){
		document.getElementById("MEAN").innerHTML = "The mean is 0/100";
	}
	if( avgcount != 0)	{
	 	mean = (total/avgcount).toFixed(4);
	 	document.getElementById("MEAN").innerHTML = "The mean is " + (mean * 100) + "/100";
	 }
  }


function WEIGHTED() {
	var weight = document.getElementsByName('weight');
	var j;
	var weighted;
	var tot = 0;
	var tot2 = 0;

	var grade1 = document.getElementsByName('grnum');
	var grade2 = document.getElementsByName('grdem');
	var percent1 = document.getElementsByName('percent');
	var grade = 0;
	var count = 0;

	for(j= 0; j< weight.length; j=j+1){
		var gr1 = parseFloat(grade1[j].value) || 0;
		var gr2 = parseFloat(grade2[j].value);
		var wei = parseFloat(weight[j].value);

		if (wei < 0){
			alert("Invalid Input on A" + (j+1) + "'s Weight Inputs");
		}
	 	if( gr1 < 0 || gr2 < 0){
	 		alert("Invalid Input on A" + (j+1) + "'s Grade Inputs");
	 	}
	 	if (isNaN(wei) && gr1 > -1 && gr2 > -1){
			alert("Weight on A" + (j+1) + "is missing, assuming '0' weight");
			wei = 0;
		}
		if(gr1 == 0 || gr1 < 0){
	 		percent1[j].innerHTML = "0%";
	 	}
	 	if( gr1 > -1 && gr2 > -1 && wei > -1){
	 		if (wei == 0){
				alert("Weight on A" + (j+1) + "is '0', are you sure?");
			}
	 		if( gr1 == 0 && gr2 > 0){
	 			alert("Grade Numerator on A" + (j+1) + " is Assumed to be '0'");
	 		}
	 		if( gr1 && isNaN(gr2)){
	 			alert("Input Denominator Missing on A" + (j+1) + "'s Grade Inputs");
	 			percent1[j].innerHTML = "UNAVAILABLE";
	 		}
	 		else{
	 			if (isNaN(gr2)){
	 				continue;
	 			}
	 		var apercent = gr1/gr2;
	 		percent1[j].innerHTML = (apercent * 100) + " %";
	 		count = count + 1;
	 		tot = tot + wei;
	 		}
	 	}
	 	if( count != 0 && wei >= 0)	{
	 		tot2 = tot2 + ((gr1/gr2) * wei);
	 	}


	}
	if(tot == 0){
		document.getElementById("WEIGHTED").innerHTML = "The weighted result is 0/100";
	}
	if(tot != 0){
		weighted = (tot2/tot).toFixed(4);
		document.getElementById("WEIGHTED").innerHTML = "The weighted result is " + (weighted * 100) + "/100";
	}

}

function LETTER() {
	var letter;
	var grnum = document.getElementsByName('grnum');
	var grdem = document.getElementsByName('grdem');
	var percent = document.getElementsByName('percent');
	var i;
	var total = 0;
	var mean = 0;
	var avgcount = 0;


	 for(i= 0; i< grnum.length; i=i+1){
	 	var num = parseFloat(grnum[i].value) || 0;
	 	var dem = parseFloat(grdem[i].value);
	 	if( num < 0 || dem < 0){
	 		alert("Invalid Input on A" + (i+1) + "'s Grade Inputs");
	 	}
	 	if(num == 0 || num < 0){
	 		percent[i].innerHTML = "0%";
	 	}
	 	if( num > -1 && dem > -1){
	 		if( num == 0 && dem > 0){
	 			alert("Grade Numerator on A" + (i+1) + " is Assumed to be '0'");
	 		}
	 		if( num && isNaN(dem)){
	 			alert("Input Denominator Missing on A" + (i+1) + "'s Grade Inputs");
	 			percent[i].innerHTML = "UNAVAILABLE";
	 			document.getElementById("MEAN").innerHTML = "Mean is currently UNAVAILABLE";
	 		}
	 		else{
	 			if (isNaN(dem)){
	 				continue;
	 			}
	 		var apercent = num/dem;
	 		percent[i].innerHTML = (apercent * 100) + " %";
	 		total = total + apercent;
	 		avgcount = avgcount + 1; 
	 		}
	 	}
	 
	 }
	if(avgcount == 0){
		document.getElementById("MEAN").innerHTML = "The mean is 0/100";
	}
	if( avgcount != 0)	{
	 	mean = (total/avgcount).toFixed(4);
	 	document.getElementById("MEAN").innerHTML = "The mean is " + (mean * 100) + "/100";
	 }


	if(mean >= 0.95){
	  letter="A+"
	}
	if(mean < 0.95 && mean >= 0.90){
	  letter="A"
	}
	if(mean < 0.90 && mean >= 0.95){
	  letter="A-"
	}
	if(mean < 0.85 && mean >= 0.80){
	  letter="B+"
	}
	if(mean < 0.80 && mean >= 0.75){
	  letter="B"
	}
	if(mean < 0.75 && mean >= 0.70){
	  letter="B-"
	}
	if(mean < 0.70 && mean >= 0.65){
	  letter="C+"
	}
	if(mean < 0.65 && mean >= 0.60){
	  letter="C"
	}
	if(mean < 0.60 && mean >= 0.55){
	  letter="C-"
	}
	if(mean < 0.55 && mean >= 0.50){
	  letter="D"
	}
	if(mean < 0.50){
	  letter="F"
	}

	document.getElementById("LETTER").innerHTML ="Your letter grade is "+ letter+". ";
}


function CLEAR() {
	var a = document.getElementsByName('weight');
	var b = document.getElementsByName('grnum');
	var c = document.getElementsByName('grdem');
	var d = document.getElementById('WEIGHTED');
	var e = document.getElementById('LETTER');
	var f = document.getElementById('MEAN');
	var g = document.getElementsByName('percent');

	for (var i = 0; i < a.length; i=i+1){
		if(a[i]){
			a[i].value = '';
		}
		if(b[i]){
			b[i].value = '';
		}
		if(c[i]){
			c[i].value = '';
		}
		d.innerHTML = "";
		e.innerHTML = "";
		f.innerHTML = "";
		if(g[i]){
			g[i].innerHTML = "";
		}


}


}




