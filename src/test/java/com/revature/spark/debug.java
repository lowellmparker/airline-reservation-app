package com.revature.spark;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.revature.spark.beans.Customer;
import com.revature.spark.beans.Flight;
import com.revature.spark.todo.AssociateImplementation;

public class debug {
	
	static AssociateImplementation testObj = new AssociateImplementation();
	static double precision = 0.01; // the "delta" used to measure the precision of the tests
		
	static List<Flight> flightListEven;
	static List<Flight> flightListOdd;
	static Map<Flight, Double> customerTotals;
	
	static Customer custA = new Customer(1, "Alpha", "Adams");
	static Customer custB = new Customer(2, "Beta", "Belarus");
	static Customer custC = new Customer(3, "Charlie", "Cordray");
	
	public static void generateData() {
		flightListEven = new ArrayList<>();
		
		// even test case
		flightListEven.add(new Flight(1, "A", "B", 150.55, custA));
		flightListEven.add(new Flight(2, "C", "A", 250.17, custB));
		flightListEven.add(new Flight(3, "D", "B", 110.35, custB));
		flightListEven.add(new Flight(4, "E", "C", 290.99, custC));
		flightListEven.add(new Flight(5, "F", "A", 324.11, custC));
		flightListEven.add(new Flight(6, "F", "D", 89.67, custC));
		
		// odd
		flightListOdd = new ArrayList<>();
		flightListOdd.add(new Flight(7, "G", "A", 450.31, custA));
		flightListOdd.add(new Flight(8, "H", "B", 97.45, custA));
		flightListOdd.add(new Flight(9, "I", "B", 213.90, custA));
		flightListOdd.add(new Flight(10, "J", "C", 314.68, custB));
		flightListOdd.add(new Flight(11, "K", "D", 309.52, custC));
	}
	
	public static void main(String[] args) {
		generateData(); 
		AssociateImplementation impl = new AssociateImplementation();
		HashMap map = (HashMap) impl.totalSalesPerCustomer(flightListOdd);
	}
	
}