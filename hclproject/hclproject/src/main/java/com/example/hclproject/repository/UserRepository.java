// // // package com.example.hclproject.repository;

// // // import org.springframework.data.jpa.repository.JpaRepository;

// // // import com.example.hclproject.model.User;

// // // public interface UserRepository extends JpaRepository<User, Long> {

// // //     User findByEmail(String email);

// // // }

// // package com.example.hclproject.repository;

// // import org.springframework.data.jpa.repository.JpaRepository;

// // import com.example.hclproject.model.User;

// // public interface UserRepository extends JpaRepository<User,Long>{

// // User findByEmail(String email);

// // }

// package com.example.hclproject.repository;

// import org.springframework.data.jpa.repository.JpaRepository;

// import com.example.hclproject.model.User;

// public interface UserRepository extends JpaRepository<User,Long>{

// User findByEmail(String email);

// }

package com.example.hclproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.hclproject.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

User findByEmail(String email);

}