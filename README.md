# CEARTAS CODING PoC

This repo is a probe of concept that requery many external libraries. I tried to split every functionality as much as possible, but, It could be better and create more interfaces but It could take too much time.
The code is fully mocked, the app is running and test working. The main idea of this project is just to know the organization and good practices.


## Quick Guide
---
#### Technologies
 - **Language:** Typescript
 - **Environment:** NodeJS 22.14.0 LTS
 - **Framework:** NestJS 11.0.1

#### Running the app on your system
```bash
$ npm install
$ npm run start
```

#### Testing the app

```bash
# Unit tests
$ npm run test

# E2E tests
$ npm run test:e2e
```


## Q&A

- In term of security I added a DTO model decorator to the endpoint, this is just a validation, but if we want to secure it a little bit more we can add the ThrottlerModule for avoid DDoS attacks or use a firewall/loadbalancer in the middle.

- In terms of scalability, and as I don't know how long can take the llm to be precessed, or if the user need the response at the moment. Here I have 2 ideas:

1. If the process need to be done on the fly we would need to have a load balancer in the middle and several instances of the application orchestrated with kubernetes, AWS or whatever.

2. If the answer is not mandatory, I would send the message into a queue and to have a second process in the background processing all this in background.

- There is a Postman collection in the contrib folder, but the endpoint is mocked.