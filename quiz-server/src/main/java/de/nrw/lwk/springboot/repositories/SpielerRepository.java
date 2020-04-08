package de.nrw.lwk.springboot.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import de.nrw.lwk.springboot.entities.SpielerEntity;

public interface SpielerRepository extends CrudRepository<SpielerEntity, String> {
	List<SpielerEntity> findAllByOrderByPunkteDesc();

	SpielerEntity findByName(String name);

	default String[] getAlleNamen() {
		List<SpielerEntity> spieler = findAllByOrderByPunkteDesc();
		String[] namen = new String[spieler.size()];
		for (int i = 0; i < namen.length; i++) {
			namen[i] = spieler.get(i).getName();
		}
		return namen;
	}
}
