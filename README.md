# Joe Andersen ePortfolio
This repository includes a redesign of an application I developed as part of the Full Stack Development I course at SNHU. I chose to redesign this application as part of my senior project in order to demonstrate my understanding of software engineering and design, data structures and algorithms, and databases. The original application was developed using the MEAN (Mongo, Express, Angular, and Node) stack where for this implementation I've replaced Express with FastAPI and Angular with React.

# How to
Run the following command to stand up the entire stack.

`docker-compose up -d --build`

API documentation can be found at > http://localhost:8000/docs

Single page application can be found at > http://localhost:3000

# Troubleshooting
API

`docker logs e-api -f`

Single page application

`docker logs e-web -f`

Database

`docker logs e-db -f`

Web server

`docker logs e-proxy -f`
