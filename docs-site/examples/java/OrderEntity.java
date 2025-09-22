package com.acme.orders;

import jakarta.persistence.*;
import java.time.Instant;

@Entity @Table(name = "ORDERS")
public class OrderEntity {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Long userId;
  private String status;
  private Double total;
  private Instant createdAt = Instant.now();
  // getters/setters ...
}