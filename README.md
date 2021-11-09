# Rotten Potatoes

A movie site where users can search movies and leave reviews!

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push 
- [Docker](https://docs.docker.com/get-docker/)

### Installing

Clone this repository to a directory.

    git clone https://github.com/NamanhTran/Rotten_Potatoes.git

Open a terminal inside of the cloned repository.
    
    cd Rotten_Potatoes

Build the docker containers with docker compose.

    docker compose up --build -d

Go to https://localhost:3000 to view the application.

To stop the container run this command in the root directory 

    docker compose down

If you want to run the application again after building it run this command:

    docker compose up -d

## Deployment

Expose your port 3000 and map it to your external IP.

## Built With
  - HTML/CSS - Used for the frontend.
  - [Node.js](https://nodejs.org/en/) - Used for the backend.
  - [MongoDB](https://www.mongodb.com/) - Used for the backend's database.
  - [TheMovieDB](https://www.themoviedb.org/documentation/api?language=en-US) - Used for searching movies and providing all posters.

## Authors

  - **Namanh Tran** - *Project Lead, Backend Engineer, and Frontend Developer* -
    [NamanhTran](https://github.com/NamanhTran)
  
  - **Chaney Chantipaporn** - *Frontend and Backend Developer* -
    [ChaneyChanti](https://github.com/ChaneyChanti)

  - **Diane Le** - *UI/UX Engineer and Frontend Developer* -
    [dianetle](https://github.com/dianetle)
