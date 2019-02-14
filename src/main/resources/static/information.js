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
makeAjaxGet("http://localhost:9595/customer/all", getCustInfo);

function getCustInfo(xhrObj){
   let cinfo = JSON.parse(xhrObj.response); 
   for( x=0 ; x<cinfo.length ; x++){
	addRow( cinfo[x].id ,  cinfo[x].firstName, cinfo[x].lastName );
	
   }
  }
function addRow( id, firstName, lastName){
	
	
		let row = document.createElement("tr");
		let cell1 = document.createElement("td");
		let cell2 = document.createElement("td");
		let cell3 = document.createElement("td");
	
		row.appendChild(cell1);
		row.appendChild(cell2);
		row.appendChild(cell3);
		
		
		
		cell1.innerHTML = id;
		cell2.innerHTML = firstName;
		cell3.innerHTML = lastName;
		document.getElementsByClassName("tbodyCust")[0].appendChild(row);
	}

