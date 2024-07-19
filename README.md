# Angular Contact List Project

This project is an implementation of a contact list management system using Angular. It provides a user-friendly interface for managing contacts with features like searching, viewing detailed information, and performing CRUD operations.

## Features

- Display a list of contacts with basic information (name, surname, phone number)
- Search functionality to filter contacts in the list
- Detailed view page for each contact (including birthday, email, address, etc.)
- Add, edit, and delete contacts
- Data validation for input fields
- Local Storage integration for data persistence
- Initial data seeding

## Technical Stack

- Angular (latest version)
- TypeScript
- HTML/CSS
- Local Storage API

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm (comes with Node.js)
- Angular CLI

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Narkobaron15/contact-book.git
   ```

2. Navigate to the project directory:
   ```
   cd angular-contact-list
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   ng serve
   ```

5. Open your browser and visit `http://localhost:4200`

## Project Structure

- `src/app/components/` - Angular components
- `src/app/services/` - Services for data management and business logic
- `src/app/models/` - TypeScript interfaces and classes
- `src/app/utils/` - Utility functions and helpers

## Data Management

This project uses the browser's Local Storage to persist contact data. Initial seed data is provided and loaded when the application starts for the first time.

## Validation

Input validation is implemented to ensure data integrity. This includes checks for required fields, format validation for email and phone numbers, and other relevant validations.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
