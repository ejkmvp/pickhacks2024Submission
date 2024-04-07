package com.pickhacks2024.ProjectBackend;

import java.util.Date;

public class WeatherAlertDTO {
	//notice, we should prolly only map if "status" is set to "Actual"
	//area affected; is a string
	//properties:areaDesc: "p1; p2; p3"
	String[] affectedAreas;
	
	//effective; start date
	//properties:effective
	String effectiveDate;

	//end date
	//prop:ends
	String endDate;
	
	String severity;
	
	String urgency;
	
	String event;
	
	String description;
	
	String instruction;

	public String[] getAffectedAreas() {
		return affectedAreas;
	}

	public void setAffectedAreas(String[] affectedAreas) {
		this.affectedAreas = affectedAreas;
	}

	public String getEffectiveDate() {
		return effectiveDate;
	}

	public void setEffectiveDate(String effectiveDate) {
		this.effectiveDate = effectiveDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getSeverity() {
		return severity;
	}

	public void setSeverity(String severity) {
		this.severity = severity;
	}

	public String getUrgency() {
		return urgency;
	}

	public void setUrgency(String urgency) {
		this.urgency = urgency;
	}

	public String getEvent() {
		return event;
	}

	public void setEvent(String event) {
		this.event = event;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getInstruction() {
		return instruction;
	}

	public void setInstruction(String instruction) {
		this.instruction = instruction;
	}
	
	
}
