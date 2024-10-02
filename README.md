# Pet Adoption Website

Welcome to the Pet Adoption website! This platform allows users to view, manage, and adopt pets with ease. It also includes features for admins to manage the pet database and communicate with interested users.

## Features

### 1. Admin Dashboard
- **Login**: Admins can log in with a username and password.
- **Manage Pets**: Add, edit, or delete pet information and photos.
- **View Contacts**: View inquiries from potential adopters.
  
### 2. View Pets
- **Scrolling Feature**: Users can scroll down to view a list of available pets.
- **Express Interest**: Users can click a blue icon on a pet card and fill out details like name, email ID, and a description for their pet of interest.
  
### 3. Email Notifications
- **User Notifications**: After submitting the form, users receive a thank-you email using Mailtrap.
- **Admin Notifications**: Admins receive an email notification about the inquiry.

### 4. Live Chat
- **Team Communication**: A chatroom feature is integrated using React and Pusher for team members to chat with each other in real-time.

## Tech Stack
- **Frontend**: React, Next.js
- **Backend**: Express.js, MongoDB
- **Email**: Mailtrap service
- **Hosting**: Netlify (frontend), Vercel (backend)
- **Live Chat**: Pusher service

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/pet-adoption.git
    ```

2. Install dependencies:
    ```bash
    cd pet-adoption
    npm install
    ```

3. Set up environment variables:
    - `.env` file should include:
      ```env
      MONGODB_URI=your-mongodb-uri
      MAILTRAP_USER=your-mailtrap-username
      MAILTRAP_PASS=your-mailtrap-password
      PUSHER_APP_ID=your-pusher-app-id
      PUSHER_KEY=your-pusher-key
      PUSHER_SECRET=your-pusher-secret
      PUSHER_CLUSTER=your-pusher-cluster
      ```

4. Run the app:
    ```bash
    npm run dev
    ```

5. Deploy to Vercel and Netlify for a seamless experience.

## Our Vision
At Pet Adoption, our vision is to connect loving families with animals in need of a home. We aim to create a simple, user-friendly platform that brings people closer to their future pets while ensuring that all animals find a safe, nurturing environment.

## Our History
Founded in 2023, Pet Adoption was born out of a passion for helping homeless animals. Our team of developers and animal enthusiasts has worked tirelessly to create a space where the adoption process is easy and efficient. Over time, we’ve built a community of pet lovers who not only adopt but support and promote the welfare of animals everywhere.

## Contact Information
- **Email**: aagotpagar_b22@it.vjti.ac.in.com
- **Phone**: 9594936347

## Contributions
We welcome contributions from the community. Please submit pull requests for any improvements or new features.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

