# Mircroservices Ticketing System

## Features:
- Created auth, tickets, payment, etc. services to handle different requests. Ran Kubernetes clusters on Google Cloud for containerization.
- Built back-end based on TypeScript and Node.js, and utilized MongoDB and Mongoose to operate the database. The front-end webpages were based on React.
- Utilized NATS Streaming to implement event bus and deal with concurrency issues. Configured Nginx Ingress Controller to ensure incoming requests outside the cluster can be managed.
- Used Stripe API test mode to implement the payment service that charges the order the user created.
- Built a CI/CD pipeline using Github Actions to automate the build and deployed this project on a real domain using
the cloud service provided by Digital Ocean.

## Screenshoots
1. Home page
![Image](https://github.com/zwang99/ticketing/blob/main/images/homepage.png)


2. Auth
![Image](https://github.com/zwang99/ticketing/blob/main/images/auth.png)

3. Ticket
![Image](https://github.com/zwang99/ticketing/blob/main/images/ticket.png)

4. Payment
![Image](https://github.com/zwang99/ticketing/blob/main/images/payment.png)
