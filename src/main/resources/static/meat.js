  
//    	document.getElementByTagName("li")[1].addEventListener("click", makeAjaxGet);
    		
function makeAjaxGet( url, callback) {
	let xhr = new XMLHttpRequest();					
	xhr.open("GET", url);
    xhr.onreadystatechange = function(){
    	if( xhr.readyState === 4 && xhr.status === 200 ){
    		callback(this);
    		}
    	}
    xhr.send();
    }

makeAjaxGet("http://localhost:9595/flight/avg", getAvg);
makeAjaxGet("http://localhost:9595/flight/max", getMax);
makeAjaxGet("http://localhost:9595/flight/median", getMed);
makeAjaxGet("http://localhost:9595/flight/min", getMin);
makeAjaxGet("http://localhost:9595/flight/sum", getTickPrice);
addRow1();
function getAvg(xhrObj_3){
documemnt.getElementById("min") = JSON.parse(xhrObj_3.response);
}
function getMax(xhrObj_4){
	documemnt.getElementById("med") = JSON.parse(xhrObj_4.response);
}    		
function getMed(xhrObj_5){
	documemnt.getElementById("max")  = JSON.parse(xhrObj_5.response);
}
function getMin(xhrObj_6){
	documemnt.getElementById("avg") = JSON.parse(xhrObj_6.response);
}
function getTickPrice(xhrObj_1){
document.getElementById("total") = JSON.parse(xhrObj_1.response);
}
function addRow1( ){	
	document.getElementsById("stats")[0].appendChild(row);
	let row = document.createElement("tr");
	let cell1 = document.createElement("td");
	let cell2 = document.createElement("td");
	let cell3 = document.createElement("td");
	let cell4 = document.createElement("td");
	
	row.appendChild(cell1);
	row.appendChild(cell2);
	row.appendChild(cell3);
    row.appendChild(cell4);
    
    
	cell1.innerHTML = min;
	cell2.innerHTML = max;
	cell3.innerHTML = avg;
    cell4.innerHTML = TicketPrice;
}
    
    



//makeAjaxGet("http://localhost:9595/customer/all/totalsales", getCustTot)


//window.onload = function(){







	


//		addOptionsDeparture(departsFrom);
//	let depart = all[z].departsFrom;
//	let dest = all[z].destination;
//	console.log(depart);
//	console.log(dest)
//	}
//	function addDepOpt(departsFrom){
//	 document.createElement("select");	
//	for ( b = 0 ; all.length ; b++)
//		
//		
//function addOptionsDeparture(departsFrom){
//	let select = document.createElement("select");
//	let option1= document.createElement("option");
//	let option2= document.createElement("option");
//	let option3= document.createElement("option");
//	let option4= document.createElement("option");
//	let option5= document.createElement("option");
//	let option6= document.createElement("option");
//	let option7= document.createElement("option");
//	let option8= document.createElement("option");
//	let option9= document.createElement("option");
//	let option10= document.createElement("option");
//	let option11= document.createElement("option");
//	let option12= document.createElement("option");
//	let option13= document.createElement("option");
//	let option14= document.createElement("option");
//	let option15= document.createElement("option");
//	let option16= document.createElement("option");
//	let option17= document.createElement("option");
//	let option18= document.createElement("option");
//	let option19= document.createElement("option");
//	let option20= document.createElement("option");
//	let option21= document.createElement("option");
//	let option22= document.createElement("option");
//	let option23= document.createElement("option");
//	let option24= document.createElement("option");
//	let option25= document.createElement("option");
//		
//	
	
	
		
		
	
	

	







