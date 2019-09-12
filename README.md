# GoLink Server

URL shortcut server project that runs on my GCP instance.

## Building and Running with Docker

```
docker build -f Dockerfile -t golink-server .

docker run -d -p 3000:3000 golink-server
```
