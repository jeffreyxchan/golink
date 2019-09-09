# GoLink Server

URL shortcut server project that runs on my GCP instance.

## Building and Running with Docker

```
docker build -f Dockerfile -t golink-server .

docker run -d -p 3000:3000 \
    -e DB_URI="INSERT_DB_URI" \
    -e SERVICE_PORT=INSERT_SERVICE_PORT \
    -e NODE_ENV="development" \
    golink-server
```
