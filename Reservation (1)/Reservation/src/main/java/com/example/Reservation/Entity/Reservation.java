package com.example.Reservation.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@NoArgsConstructor
@Table(name="Reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;
    private String contactNumber;
    private int tableNumber;
    private LocalDate reservationDate;
    private LocalTime reservationTime;
    private int numberOfGuests;
    private String status;  // Example: "Pending", "Confirmed", "Cancelled"
    private String assignedEmployee;
}
