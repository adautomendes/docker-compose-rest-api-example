# An example of two services communicating through Docker

This projects aims to demonstrate how two services deployed in different containers could be communicate each other basically using docker-compose to orchestrate the communication between then.

## How to build?

Open a terminal in the project folder and run:

```shell
docker-compose build
```

## How to run?

### Running one instance per server

Run the following command at terminal:

```shell
docker-compose up
```

### Scaling one service

Run the following command at terminal:

```shell
docker-compose up --scale service1=X
```

> Where `X` must be replaced by the number of instances of service1 you want.

## How to use?

Simply send the following examples of requests.

1. `GET` `http://<service_2_host>:<service_2_port>/v1/resource`

```json
{
    "timestamp": "2020-12-01T22:52:24.876Z"
}
```

2. `GET` `http://<service_2_host>:<service_2_port>/v1/resource?id=<id_value>`

```json
{
    "id": "<id_value>",
    "timestamp": "2020-12-01T22:52:24.876Z"
}
```