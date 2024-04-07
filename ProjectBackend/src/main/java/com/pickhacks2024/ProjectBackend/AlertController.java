package com.pickhacks2024.ProjectBackend;

import java.time.format.DateTimeFormatter;
import java.util.Collections;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class AlertController {
	
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd\'T\'HH:mm:ss");
	
	@GetMapping("/api/getAlerts")
	public WeatherAlertDTO[] getAlerts() {
		//TODO make web request and then return alerts
		//Plan:
		//	make request to weather gov api
		//	interpret results and built array of weatherAlerPOJOs
		//	return array
		
		//Send Request
	    RestTemplate restTemplate = new RestTemplate();
	    String uri = "https://api.weather.gov/alerts/active?area=MO"; // or any other uri
	    HttpHeaders headers = new HttpHeaders();
	    headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
	    headers.add("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36");

	    HttpEntity<String> entity = new HttpEntity<>("parameters", headers);
	    ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);
	    JSONObject weatherData = new JSONObject(result.getBody());
	    JSONArray weatherEvents = weatherData.getJSONArray("features");
	    //weatherData
	    //Build output object
	    WeatherAlertDTO outputArray[] = new WeatherAlertDTO[weatherEvents.length()];
	    for(int i = 0; i < weatherEvents.length(); i++) {
	    	outputArray[i] = new WeatherAlertDTO();
	    	outputArray[i].setDescription(weatherEvents.getJSONObject(i).getJSONObject("properties").getString("description"));
	    	outputArray[i].setEvent(weatherEvents.getJSONObject(i).getJSONObject("properties").getString("event"));
	    	outputArray[i].setUrgency(weatherEvents.getJSONObject(i).getJSONObject("properties").getString("urgency"));
	    	outputArray[i].setSeverity(weatherEvents.getJSONObject(i).getJSONObject("properties").getString("severity"));
	    	outputArray[i].setInstruction(weatherEvents.getJSONObject(i).getJSONObject("properties").getString("instruction"));
	    	outputArray[i].setAffectedAreas(weatherEvents.getJSONObject(i).getJSONObject("properties").getString("areaDesc").split("; "));
	    	outputArray[i].setEffectiveDate(weatherEvents.getJSONObject(i).getJSONObject("properties").getString("effective"));
	    	outputArray[i].setEndDate(weatherEvents.getJSONObject(i).getJSONObject("properties").getString("ends"));
	    }	    
	    
	    return outputArray;
	}
}
