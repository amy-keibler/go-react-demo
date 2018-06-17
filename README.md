# GO React Demo
## Setup
1. Clone this repository
2. Ensure that you have the latest node/npm installed locally
3. Install VSCode (or a similar editor)
4. Build the docker container in the root of the project (sets up initial web app)
  * `docker build . --tag go-react-docker`
5. Run it and access your browser to see that it works
  * `docker run --rm -p 8080:8080 go-react-docker`
6. Visit http://localhost:8080/ and http://localhost:8080/api/v1/info to ensure that the server is running correctly
