package com.revature.spark.todo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.revature.spark.beans.Customer;
import com.revature.spark.beans.Flight;

/**
 * Within this class, you will implement the logic to calculate data for various
 * reports.
 * 
  @author Lowell Parker	
 * 
 * 
 * 
 * 
 */

public class AssociateImplementation {

	
	
	
	public static double[] psort(List<Flight> flights) {
		double	temp; 
		double [] arrayTP = new double[flights.size()];
		boolean notSorted = true;
		for(int i = 0; i < flights.size(); i++) {
			arrayTP[i]	= flights.get(i).getTicketPrice();
		}
		
		while (notSorted) {
			notSorted = false;
			for(int k =0; k < arrayTP.length-1; k++) {
			if(arrayTP[k]>arrayTP[k+1]) {
				temp = arrayTP[k];
				arrayTP[k]= arrayTP[k+1];
				arrayTP[k+1]=temp;
				notSorted=true;
				}
			}	
				
		}
		
		return arrayTP;
	}	
	
	/**
	 * Find the total ticket sales of all flights.
	 * 
	 * @param flights
	 * @return
	 */
	public Double sum(List<Flight> flights) {
		double tpricetotal=0.0;
		for(Flight fobject : flights) {
			tpricetotal +=	fobject.getTicketPrice();
		}
		return tpricetotal;
	}

	/**
	 * Find the lowest ticket price.
	 * 
	 * @param flights
	 * @return
	 */
	public Double min(List<Flight> flights) {
			
		
			
		double [] myarray = psort(flights);
		
		return myarray[0];
	
	}

	/**
	 * Find the highest ticket price.
	 * 
	 * @param flights
	 * @return
	 */
	public Double max(List<Flight> flights) {
		
		return psort(flights)[flights.size()-1];
	}

	/**
	 * Find the average ticket price.
	 * 
	 * @param flights
	 * @return
	 */
	public Double avg(List<Flight> flights) {
		double total= 0;
		
		for(Flight fobject : flights) {
		total += fobject.getTicketPrice();
		}
		return (total/flights.size());
	}

	/**
	 * Find the median ticket price.
	 * 
	 * @param flights
	 * @return
	 */
	public Double median(List<Flight> flights) {
		
		
		double [] pd = psort(flights);
		if(flights.size()%2 == 0) {
		
			return (pd[(pd.length/2)-1]+pd[pd.length/2])/2;
			
		}else
			return pd[(pd.length-1)/2];
			
		
		
		
		
		
		
	}

	/**
	 * !! BONUS CHALLENGE REQUIREMENT !!
	 * 
	 * Find the total sales for each customer given a list of Flights.
	 * 
	 * Let's look at some example data:
	 * 
	 * Flights 
	 * FlightNo | Destination | Departs | Ticket Price | Customer
	 * 1        | Albuquerque | Austin  |   $150       | A
	 * 2        | Denver      | Seattle |   $210       | B
	 * 3        | Dallas      | Orlando |   $190       | B
	 * 4        | Las Vegas   | Houston |   $300       | C
	 * 5        | Phoenix     | Atlanta |   $340       | A
	 * 6        | Tampa       | New York|   $270       | C
	 * -----------------------------------
	 * Results:
	 * Customer A : $490
	 * Customer B : $400
	 * Customer C : $570
	 * 
	 * @param flights
	 * @return
	 */
	public Map<Customer, Double> totalSalesPerCustomer(List<Flight> flights) {
		
		for(Flight flight : flights) {
			System.out.println(flight.toString()); 
			
		
		}
		
		return new HashMap<>();
	}

}
