# Basketball Team RESTful API

A simple RESTful API built using the MERN stack to manage basketball teams and user feedback. The API allows users to view teams, search for teams, and provide feedback. Authenticated users (checked directly via MongoDB) can add, edit, or delete feedback, while general users can view teams and their feedback.

## Features
- **Team Management:**
  - View all basketball teams.
  - Search teams by name or other attributes.

- **Feedback Management:**
  - Logged-in users can:
    - Add feedback to a team.
    - Edit their feedback.
    - Delete their feedback.
  - All users (authenticated or not) can view feedback on teams.

- **Authentication:**
  - Authentication is implemented by verifying the existence of the user in the MongoDB database.
  - No tokens or sessions are used.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other Tools:**
  - Mongoose (MongoDB ODM)
  - Axios for HTTP requests
  - Postman for API testing

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/basketball-team-api.git
   cd basketball-team-api
