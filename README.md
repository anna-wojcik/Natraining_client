# 🏋️‍♂️ SportCenter - Sports Training Booking Client (Frontend)

**SportCenter** is a modern, high-performance Full-Stack Single Page Application (SPA) client built with **React**. This repository contains exclusively the frontend layer of the platform, which automates the client-facing and administrative workflow for sports facilities: from dynamic training catalog filtering to secure Stripe online checkout and multi-role dashboard management.

The application leverages a highly responsive, reactive user interface powered by **React, Redux Toolkit, and Redux-Saga**, communicating asynchronously with a detached external REST API backend.

## Table of Contents
* [Site Overview](#site-overview)
    * [Home Page](#home-page)
    * [Training Details Page and Stripe Module](#training-details-page-and-stripe-module)
    * [User Profile and Settings Panel](#user-profile-and-settings-panel)
    * [Dedicated Trainer Panel](#dedicated-trainer-panel)
    * [Global Administrator Panel](#global-administrator-panel)
    * [Login & Signup Page](#login--signup-page)  
* [Technologies Used](#technologies-used)
* [Available Scripts](#available-scripts)
* [Author](#author)

## Site Overview

### Home Page
Displays a comprehensive list of available training sessions fetched asynchronously via API, rendered in a flexible responsive card grid (CSS Grid). Each card contains an optimized cover image, sport type, duration, price, and the calculated average rating displayed as a system of visual stars.
* **Advanced Filtering:** A dynamic filter form above the training list allows users to instantly narrow down search results without reloading the page by sending asynchronous query parameters to the API (filtering by discipline type, difficulty level, price range, and a text search bar).

![Home Page Catalog](<Zrzut ekranu 2026-05-28 121658.png>)

### Training Details Page and Stripe Module
Presents extended specifications of the selected training session, including the relationally linked room and the profiles of the trainers conducting the class.
* **Reviews Section:** Displays the list of feedback and ratings left by participants.
* **Stripe Payment Gateway:** After clicking "Book now" (available only to logged-in clients), a Redux-Saga process initiates a secure Stripe Checkout session. The application handles the API handshakes and safely redirects the user to Stripe's encrypted credit card payment form.

![Training Details Overview](<Zrzut ekranu 2026-05-28 122323.png>)

### User Profile and Settings Panel
A common dashboard for all system roles, allowing asynchronous modification of personal information, password changes (secured by verifying the current password), and uploading a new profile picture (sent as multipart/form-data payload).

![User Settings Dashboard](<Zrzut ekranu 2026-05-28 122958.png>)

* **Client (User) - Bookings:** A list of purchased and upcoming training sessions for the logged-in user.

![Client Bookings List](<Zrzut ekranu 2026-05-28 123213.png>)

### Dedicated Trainer Panel
* **Trainings:** A modern, clean schedule view in the form of expandable tiles (Accordion). Trainers can see only their assigned training sessions, hours, designated rooms, and the current group capacity limit in a secure *Read-Only* mode.

![Trainer Schedule Accordion](<Zrzut ekranu 2026-05-28 123612.png>)

### Global Administrator Panel
An extended, comprehensive control cockpit giving full command over the system via a polished Accordion interface:
* **Users:** Overview of the registered users database, with the ability to modify system roles (e.g., granting trainer/admin privileges) and activate or deactivate user accounts.
![Admin Manage Users List](<Zrzut ekranu 2026-05-28 123909.png>)
![Admin Edit User Role](<Zrzut ekranu 2026-05-28 123921.png>)

* **Reviews:** Global supervision over all reviews in the system, with the authority to moderate and delete comments that violate terms.
![Admin Manage Reviews List](<Zrzut ekranu 2026-05-28 124014.png>)
![Admin Edit Review Modal](<Zrzut ekranu 2026-05-28 124030.png>)

* **Manage Trainings (Full CRUD):** Advanced offers management. Admin can edit existing classes, delete them from the client state (secured with a UI confirmation window), and add new ones through a polished modal. The creation form handles field validation on the client side, asynchronous room assignment, multiple trainers assignment (checkboxes), and a physical cover image file upload using state-bound multi-part fields.
![Admin Manage Trainings Accordion](<Zrzut ekranu 2026-05-28 123717.png>)
![Admin Create Training Modal](<Zrzut ekranu 2026-05-28 123823.png>)

### Login & Signup Page
Module responsible for client-side security and access validation.
* **Signup:** Account creation form requiring name, email, and password confirmation, fully validated before payload transmission.

![Signup Form](<Zrzut ekranu 2026-05-28 124242.png>)

* **Login:** User authentication via email and password. Upon successful verification, cross-origin cookies containing the JWT are automatically appended to subsequent network transactions.

![Login Form](<Zrzut ekranu 2026-05-28 124302.png>)

## Technologies Used
This repository focuses entirely on a modular, predictable UI architecture engineered with the following frontend stack:

* **React (ES6+)**
* **Vite**
* **Redux Toolkit**
* **Redux-Saga**
* **Styled Components**
* **Axios**

## Available Scripts
In the project directory, make sure to run `npm install` to set up dependencies, then you can execute:

### `npm run dev`
Runs the app in the development mode using Vite's fast development server. Open [http://localhost:5173](http://localhost:5173) to view it in your browser with real-time Hot Module Replacement (HMR).

## Author
Created by **Anna Wójcik**.