 Travel Trip

This project is a web application that allows users to plan and manage travel trips. It demonstrates proficiency in React development, including concepts like routing,
state management, authentication, and responsive design. The app interacts with an internal server for data fetching and ensures user authenticationand authorization for specific routes.

 Login Page: 
   Shows error messages for invalid credentials.
   Redirects to the home page upon successful login.
   Allows users to toggle password visibility.

  Home Page:
   Button to navigate to the "Book A New Trip" page.

  Book A New Trip:
   Multi-step form to collect trip details:
    1. Personal details: Name, Start Location, and End Location.
    2. Dates: Start Date and End Date with validation.
    3. Guests: Set counts for Adults, Children, and Infants.
    4. Travel Assistance: Choose options if needed.
    5. Confirmation: Review and confirm trip details.
   Data is persisted when navigating between steps.

  My Trips Page:
    Displays a list of booked trips.
    Shows a "No Trips" message if no trips are booked.

  Header:
     Navigation links for Home, My Trips, and Logout.
     Logo redirects to the home page.

Responsive Design:
   Optimized for mobile, tablet, and desktop views. 

 How to Run the Project

1. Clone the repository:
     git clone https://github.com/JyothiSreeSree/TravelTrip.git
   
2. Navigate to the project directory:
     cd travel-trip
   
4. Install dependencies:
     npm install
  
5. Start the app:
     npm start
   
6. Access the app in your browser at `http://localhost:3000`.

User Credentials
  Use the following credentials to log in:
   Username: `rahul`  
   Password: `rahul@2021`
  
Technologies Used
  React
  HTML and CSS
  JavaScript
  Mock APIs
