package com.pickhacks2024.ProjectBackend;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FoundItemController {

	SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
	
	@Autowired
	private FoundItemRepository foundItemRepository;
	
	@GetMapping("api/foundItems/getAllItem")
	public @ResponseBody Iterable<FoundItemEntity> getAllItems() {
		return foundItemRepository.findAllByOrderByIdDesc();
	}
	
	@PostMapping("api/foundItems/addNewItem")
	public @ResponseBody String addItem(@RequestParam String itemName, 
										@RequestParam String itemLocation,
										@RequestParam String itemReturn,
										@RequestParam String itemDescription,
										@RequestParam String username,
										@RequestParam String useremail) {
		FoundItemEntity foundItem = new FoundItemEntity();
		System.out.println("attempting Instertion");
		System.out.println("item name is " + itemName);
		foundItem.setItemName(itemName);
		foundItem.setItemLocation(itemLocation);
		foundItem.setItemReturn(itemReturn);
		foundItem.setItemDescription(itemDescription);
		foundItem.setUsername(username);
		foundItem.setUseremail(useremail);
		/*
		try {
			foundItem.setItemFindDate(Date.from(formatter.parse(itemFindDate).toInstant()));
		} catch (Exception e) {
			foundItem.setItemFindDate(Date.from(Instant.now()));
		}
		*/
		foundItemRepository.save(foundItem);
		return "Success";
	}
	
	@PostMapping("api/foundItems/deleteItem")
	public @ResponseBody String removeItem(@RequestParam Integer id) {
		
		foundItemRepository.deleteById(id);
		return "Success";
	}
	
}
