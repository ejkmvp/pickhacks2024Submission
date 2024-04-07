package com.pickhacks2024.ProjectBackend;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class FoundItemEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private String username;
	
	private String useremail;
	
	private String itemName;
	
	private String itemLocation;
	
	private Integer itemLocationX;
	
	private Integer itemLocationY;
	
	private String itemReturn;
	
	private Integer itemReturnX;
	
	private Integer itemReturnY;
	
	private String itemDescription;
	
	private Date itemFindDate;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getItemLocation() {
		return itemLocation;
	}

	public void setItemLocation(String itemLocation) {
		this.itemLocation = itemLocation;
	}

	public Integer getItemLocationX() {
		return itemLocationX;
	}

	public void setItemLocationX(Integer itemLocationX) {
		this.itemLocationX = itemLocationX;
	}

	public Integer getItemLocationY() {
		return itemLocationY;
	}

	public void setItemLocationY(Integer itemLocationY) {
		this.itemLocationY = itemLocationY;
	}

	public String getItemReturn() {
		return itemReturn;
	}

	public void setItemReturn(String itemReturn) {
		this.itemReturn = itemReturn;
	}

	public Integer getItemReturnX() {
		return itemReturnX;
	}

	public void setItemReturnX(Integer itemReturnX) {
		this.itemReturnX = itemReturnX;
	}

	public Integer getItemReturnY() {
		return itemReturnY;
	}

	public void setItemReturnY(Integer itemReturnY) {
		this.itemReturnY = itemReturnY;
	}

	public String getItemDescription() {
		return itemDescription;
	}

	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}

	public Date getItemFindDate() {
		return itemFindDate;
	}

	public void setItemFindDate(Date itemFindDate) {
		this.itemFindDate = itemFindDate;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUseremail() {
		return useremail;
	}

	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}
	
	
		
}
