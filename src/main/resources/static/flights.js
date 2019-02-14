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

function getAll(xhrObj_2){
    let all = JSON.parse(xhrObj_2.response);
    
	for ( z = 0 ; z < all.length ; z++ ){
        addRow1( all[z].flightNumber , all[z].destination , all[z].departsFrom , all[z].ticketPrice);
    }
}
makeAjaxGet("http://localhost:9595/flight/all", getAll);

function addRow1( flightNumber, destination, departsFrom, ticketPrice){		
			let row = document.createElement("tr");
			let cell1 = document.createElement("td");
			let cell2 = document.createElement("td");
			let cell3 = document.createElement("td");
			let cell4 = document.createElement("td");
			
			row.appendChild(cell1);
			row.appendChild(cell2);
			row.appendChild(cell3);
            row.appendChild(cell4);
            
            
			cell1.innerHTML = flightNumber;
			cell2.innerHTML = destination;
			cell3.innerHTML = departsFrom;
            cell4.innerHTML = ticketPrice;
            document.getElementsByTagName("table")[0].appendChild(row);
            }
            

