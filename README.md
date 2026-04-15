# Event Dashboard System

## Overview
Event Dashboard (EventFlow) is a full-stack web application designed for managing, browsing, and booking events. It provides a platform where event organizers (Admins) can create and manage events, and attendees (Users) can browse and book tickets for those events.

## Features
- **User Authentication & Authorization:** Secure registration and login flow with Role-Based Access Control (`ADMIN` vs `USER`).
- **Event Management (Admin):** Admins can create new events, update details, view all events, and delete events.
- **Event Booking (User):** Registered users can view a list of available upcoming events and submit bookings.
- **Booking Management:** Users can view their booking history.
- **Responsive UI:** A modern and user-friendly visual interface built in React.

## Technology Stack

### Frontend
- **Framework:** React 19
- **Routing:** React Router v7
- **Networking:** Axios for making HTTP REST calls to the backend
- **Styling:** CSS/SCSS (Modern and responsive design)

### Backend
- **Environment:** Java 17
- **Framework:** Spring Boot 3+ (Spring Web, Spring Boot Validation)
- **Security:** Spring Security (Handling authentication and authorization)
- **Database Mapping:** Spring Data JPA
- **Database:** H2 In-Memory Database (for easy development and testing)
- **Build Tool:** Maven
- **Utilities:** Lombok (to reduce boilerplate like getters, setters, constructors)

## Folder Structure
- `hclproject-ui/` : Contains the React frontend application code.
- `hclproject/hclproject/` : Contains the Spring Boot backend REST API application code.

## Getting Started

### Running the Backend
1. Navigate to the backend project directory:
   ```bash
   cd hclproject/hclproject
   ```
2. Run the application using the Maven wrapper:
   ```bash
   ./mvnw spring-boot:run
   ```
   *The backend server will start (default port is usually 8080).*

### Running the Frontend
1. Navigate to the frontend project directory:
   ```bash
   cd hclproject-ui
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   *The application will open in your default browser at `http://localhost:3000`.*
