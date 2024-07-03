package com.server.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.server.back.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
