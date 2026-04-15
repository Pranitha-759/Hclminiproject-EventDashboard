# System Design Document: Event Dashboard

## 1. Introduction
This document outlines the architectural and technical design for the Event Dashboard (EventFlow) application. The application is a unified platform for creating, browsing, and booking events.

## 2. Architecture Overview
The application follows a classic multi-tier client-server architecture:
1. **Client Tier (Frontend):** A Single Page Application (SPA) built with React. It handles the user interface, client-side routing, and presentation logic.
2. **Application Tier (Backend):** A monolithic RESTful API built with Java and Spring Boot. It receives HTTP requests, processes business rules, and enforces security.
3. **Data Tier:** An H2 relational database (extensible to MySQL/PostgreSQL in production) managed via Spring Data JPA.

## 3. Data Model
The system comprises three core domain entities:

- **User:** Represents the actors in the system.
  - Attributes: `id`, `username`, `password` (encrypted), `email`, `role` (ADMIN, USER).
- **Event:** Represents an occasion or gathering created by an admin.
  - Attributes: `id`, `title`, `description`, `date`, `location`, `capacity`.
- **Booking:** Represents a reservation made by a user for an event.
  - Attributes: `id`, `user_id` (Foreign Key), `event_id` (Foreign Key), `bookingDate`, `status`.

## 4. API Design (Controllers)
The backend exposes RESTful endpoints divided logically by domain:

- **`AuthController`**:
  - `POST /api/auth/register` - Registers a new user.
  - `POST /api/auth/login` - Authenticates user and returns a token or session.
- **`UserController`**:
  - `GET /api/users/{id}` - Retrieves user profile info.
  - `GET /api/users` - (Admin only) Lists all users.
- **`EventController`**:
  - `GET /api/events` - Retrieves all events (Public / Authenticated users).
  - `POST /api/events` - (Admin only) Creates a new event.
  - `PUT /api/events/{id}` - (Admin only) Updates an existing event.
  - `DELETE /api/events/{id}` - (Admin only) Deletes an event.
- **`BookingController`**:
  - `POST /api/bookings` - (User) Books a ticket for an event.
  - `GET /api/bookings/user/{userId}` - Retrieves all bookings for a specific user.
  - `GET /api/bookings` - (Admin only) Retrieves bookings across the platform.

## 5. Security & Access Control
- **Authentication:** Uses Spring Security. The system intercepts incoming requests and verifies authentication credentials. Passwords are encrypted before storing in the database.
- **Authorization (Role-Based Access Control):** 
  - `USER`: Can view events and create bookings.
  - `ADMIN`: Has comprehensive privileges to manage events and view any booking. Secure endpoints verify the `ADMIN` role before granting action execution.

## 6. Frontend Application Architecture
- **Component-Based UI:** Developed using modular React components (e.g., `EventCard`, `LoginForm`, `Navbar`).
- **Routing:** Managed via `react-router-dom` to provide seamless navigation between the Dashboard, Login/Register, and Event creation forms without full-page reloads.
- **State Management:** Uses React components' built-in state (`useState`, `useEffect`) and potentially Context API for persisting the authenticated state of the user session across the app.
- **Asynchronous Data Fetching:** Utilizes `axios` to invoke Backend API endpoints.

## 7. Future Enhancements
- Switch from in-memory H2 DB to a persistent database like PostgreSQL or MySQL.
- Implement JWT (JSON Web Tokens) for stateless backend authentication.
- Add payment gateway integration for paid events.
- Implement email notifications upon successful booking.
- Dockerize the frontend and backend applications for easier deployment.
