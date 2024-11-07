# Music App Frontend

This is the frontend of a music application built with modern web technologies. It allows users to browse, search, and play music from various sources. The app features a dynamic UI with functionalities like playing songs, managing playlists, and more.

## Features

- Search for songs
- Play selected songs
- Manage playlists

## Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/devwithmehar/music-app-frontend.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd music-app-frontend
    ```

3. **Install Dependencies**:
    ```bash
    npm install 
    ```
4. **Start the frontend**:
    ```bash
    npm start
    ```

## Technologies Used

This project leverages the following technologies:

- **React**: A JavaScript library for building user interfaces, used for creating dynamic and responsive components.
- **Axios**: A promise-based HTTP client for making API requests, utilized for fetching data from the backend and third-party services.
- **React-Bootstrap**: A library of reusable front-end components built on top of Bootstrap, used for designing responsive and modern UI elements.
- **React-Spotify-Web-Playback**: A React component for embedding Spotify's Web Playback SDK, allowing users to play songs directly from the app.
- **Spotify Authentication**: Implementing OAuth with Spotify for user authentication, enabling personalized experiences and access to Spotify's features.

For fetching track information, I have followed the official [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api) to integrate Spotify's track APIs.

# Backend

The backend for this application is available in a separate repository:

[![Github](https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/devwithmehar/spotify-backed.git)
Spotify Backend Repository


You can follow the instructions in the backend repository to set it up and run it.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
