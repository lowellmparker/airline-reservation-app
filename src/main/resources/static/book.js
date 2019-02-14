/**
 * 
 */


 const namesendpoint = "http://localhost:9595/flight";

function makeAjaxPost( url, callback, newCustomerObject) {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url);
    xhr.onreadystatechange = function(){
    	if( xhr.readyState === 4 && xhr.status === 201 ){
    		callback(this);
    		}
    	}
    xhr.setRequestHeader("Content-type", "application/json");
    let jsonFlight = JSON.stringify(newCustomerObject);
    xhr.send(jsonFlight);
	}




 function doPost(){
    let newCustomer={
        customer:{
            id: document.getElementById("cselect").value
        },
        departsFrom: document.getElementById("d").value,
        destination: document.getElementById("a").value,
        flightNumber: document.getElementById("fid").value,
        ticketPrice: document.getElementById("price").value
    }
    makeAjaxPost(namesendpoint,success, newCustomer);
 }
function success(){
alert("success");
}

function makeAjaxRemove(namesendpoint, newCustomer){
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", url);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 201 ){
			callback(this);
			}
	
		}
	xhr.setRequestHeader("Content-type", "application/json");
	let jsonDelFlight = JSON.stringify(newCustomerObject);
	xhr.send(jsonDelFlight);
}
function makeAjaxPut(namesendpoint, newCustomer){
	let xhr = new XMLHttpRequest();
	xhr.open("PUT", url);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 201 ){
			callback(this);
			}
	
		}
	xhr.setRequestHeader("Content-type", "application/json");
	let jsonPutFlight = JSON.stringify(newCustomerObject);
    xhr.send(jsonPutFlight);
    


    }




    //     let newCustomer= {
	// customer:{
	// 		firstName: "Gabriele",
	// 		id: 1,
	// 		lastName: "Doddemeede"
	// 	},
	// 	departsFrom: "Chrysoúpolis",
	// 	destination: "Boñgalon",
	// 	flightNumber: 27,
	// 	ticketPrice: 435.19
	// 	}