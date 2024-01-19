package com.dailycodebuffer.Springboot.tutorial.repository;

import com.dailycodebuffer.Springboot.tutorial.entity.Register;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegRepoInterface extends JpaRepository<Register, Long> {
    Register getReferenceByEmail(String emailFromLogIn);

    boolean existsByStudentId(String studentId);
}
