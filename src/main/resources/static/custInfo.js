// I need this function to fire as "on click" when the button Customer Information is clicked



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


// AJAX actually doing the GET method
makeAjaxGet("http://localhost:9595/customer/all", getCustInfo);

// Defining a function to deal with the JSON object. Parsing the strings into usable stuff, iterating through each set
// and passing into the addRow function to generate a dynamic table.
window.onload = function getCustInfo(xhrObj){
   let cinfo = JSON.parse(xhrObj.response); 
   for( x=0 ; x<cinfo.length ; x++){
	   addRow( cinfo[x].id ,  cinfo[x].firstName, cinfo[x].lastName );
   	}
  }



// defining the addRow function to coordinate elements within the data sets to the appropriate columns. 
  function addRow( id, firstName, lastName){
    
    
    // for each row let cells be a table data element
	let row = document.createElement("tr");
	let cell1 = document.createElement("td");
	let cell2 = document.createElement("td");
	let cell3 = document.createElement("td");



    //appending new rows with data celss
	row.appendChild(cell1);
	row.appendChild(cell2);
	row.appendChild(cell3);
	
	document.getElementsByClassName("tbodyCust")[0].appendChild(row);
    
    
    // assigning the value of the table data celss to be the values from the iterations above
	cell1.innerHTML = id;
	cell2.innerHTML = firstName;
	cell3.innerHTML = lastName;
}