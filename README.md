# T-WEB-700-PAR_2

## Run
We use docker to run the project and a .env is required to run the project.

### .env
You can find an example of the .env file in the root of the project named .env.template.

### Docker
To run the project with docker, you need to have docker installed on your computer.
```bash
docker compose up --build -d
```
This docker will start :
- The frontend (React) on port 3000
- The backend (NodeJS) on port 4000
- The database (MongoDB) on port 27017


### Api documentation
You can find the api documentation [here](https://documenter.getpostman.com/view/6158490/2s8YmUMfBC).