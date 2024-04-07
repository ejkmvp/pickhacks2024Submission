package com.pickhacks2024.ProjectBackend;

import org.springframework.data.repository.CrudRepository;

public interface FoundItemRepository extends CrudRepository<FoundItemEntity, Integer> {
	Iterable<FoundItemEntity> findAllByOrderByIdDesc();
}