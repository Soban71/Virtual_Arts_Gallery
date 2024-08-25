
# Virtual Art Gallery

This project is a full-stack web application that allows artists to manage their portfolio. Artists can upload, edit, delete their artworks, and display them in a gallery. The project includes user authentication, a dynamic gallery with 3D interactions using Three.js, and an admin panel for managing artworks.

## Features

- **User Authentication**: Sign up and login to access personalized features.
- **Public Gallery**: View all artworks uploaded by various artists.
- **Artist-Specific Gallery**: Users can view artworks by a specific artist in a 3D gallery with zoom and rotation features powered by Three.js.
- **Manage Artworks**: Logged-in artists can upload, edit, and delete their own artworks.
- **Responsive Design**: The UI is designed to be visually appealing and works well on various devices.

## Technologies Used

### Frontend
- React
- Tailwind CSS
- Axios
- React Router
- Three.js (for 3D model-like interaction in the gallery)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token) for authentication

## Installation

### Prerequisites
- Node.js
- MongoDB

### Steps

1. **Clone the repository**

   ```bash
   git clone git@github.com:Soban71/Virtual_Arts_Gallery.git
   cd virtual-art-gallery
   ```

2. **Install dependencies**

   Install server-side dependencies:

   ```bash
   cd backend
   npm install
   ```

   Install client-side dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the `backend` directory and add the following:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the Application**

   Start the backend server:

   ```bash
   cd backend
   npm run dev
   ```

   Start the frontend server:

   ```bash
   cd frontend
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Artworks

- `GET /api/art/artworks` - Get all artworks
- `GET /api/art/artist/:id/artworks` - Get artworks by artist ID
- `GET /api/art/my-artworks` - Get artworks by the logged-in artist
- `POST /api/art/upload` - Upload a new artwork (protected route)
- `PUT /api/art/artworks/:id` - Update an artwork (protected route)
- `DELETE /api/art/artworks/:id` - Delete an artwork (protected route)

## Key Functionalities

1. **User Authentication**: Users can sign up and log in to the application. Once logged in, they can access their personal dashboard and manage their artworks.
2. **3D Interactive Gallery**: The application uses Three.js in the `Gallery.js` component to create a 3D interactive gallery where users can zoom, pan, and rotate the view to explore the artworks as if they were 3D models.
3. **Artist Management**: Logged-in users can view all uploaded artworks, explore specific artists' collections, and manage their own artworks by uploading new pieces, editing existing ones, or deleting them.
4. **Responsive UI**: The user interface is designed to be clean, intuitive, and responsive, ensuring a seamless experience across different devices.


