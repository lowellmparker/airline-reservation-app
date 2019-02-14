 const namesendpoint = "http://localhost:9595/flight";

 
 function doPost(){
    let newCustomer={
        // customer:{
        //     id:document.getElementById("fid").value
        // },
         departsFrom: document.getElementById("d").value,
         destination: document.getElementById("a").value,
        flightNumber: document.getElementById("fid").value,
        // ticketPrice: document.getElementById("price").value
   
    }
makeAjaxRemove(namesendpoint,newCustomer,success)
}
function success(xhr){
alert("success");
console.log(JSON.parse(xhr.response));
}

function makeAjaxRemove(url, newCustomerObject,callback){
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", url);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 204 ){
			callback(this);
                  }
        if(this.readyState==4)
                  callback(this);
	}
	xhr.setRequestHeader("Content-type", "application/json");
	let jsonDelFlight = JSON.stringify(newCustomerObject);
	xhr.send(jsonDelFlight);
}  



 