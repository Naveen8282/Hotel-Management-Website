<h1>HOTEL MANAGEMENT SYSTEM</h1>

<h2>Table of Contents:</h2>

1.GETTING STARTED

2.PREREQUISITES

3.TECHNOLOGIES

4.INSTALLATION

5.ABOUT PROJECT

6.USER STORIES

7.ARCHITECTURE DIAGRAM

8.USE CASE DIAGRAM

9.DESIGN

10.TESTING

11.TEAM MEMBERS



<h3>GETTING STARTED:</h3>


**PREREQUISITES:**


***FRONTEND DEPENDENCIES:*** 

    "@testing-library/jest-dom": "^5.16.2",
    
    "@testing-library/react": "^12.1.4",
    
    "@testing-library/user-event": "^13.5.0",
    
    "antd": "^4.19.1",
    
    "aos": "^2.3.4",
    
    "axios": "^0.26.0",
    
    "bootstrap": "4.6",
    
    "jsx-runtime": "^1.2.0",
    
    "less-loader": "^6.0.0",
    
    "moment": "^2.29.1",
    
    "react": "^17.0.2",
    
    "react-bootstrap": "^2.1.2",
    
    "react-dom": "^17.0.2",
    
    "react-router": "^6.2.2",
    
    "react-router-dom": "^5.3.0",
    
    "react-scripts": "5.0.0",
    
    "react-spinners": "^0.11.0",
    
    "stream-browserify": "^3.0.0",
    
    "sweetalert2": "^11.4.4",
    
    "web-vitals": "^2.1.4",
    
    "webpack": "^5.70.0"
 
***BACKEND DEPENDENCIES:***

    "axios": "^0.26.0",
    
    "express": "^4.17.3",
    
    "moment": "^2.29.1",
    
    "mongoose": "^6.2.4",
    
    "nodemon": "^2.0.15",
    
    "router": "^1.3.6"


<h3>TECHNOLOGIES</h3>

BACKEND: NODE JS, EXPRESS, MongoDB

FRONTEND: HTML5, CSS3, Bootstrap CSS, JavaScript, React

<h3>INSTALLATION</h3>

For client side(Front end):

Step 1 : cd client –  change the directory to client folder

Step 2 : npm i –  install node modules along with their dependencies

Step 3 : npm start –  output will be displayed on localhost:3000

For server side(Back end):

Step 1 : npm i –  install node modules along with their dependencies

Step 2 : node server  – output will be displayed on localhost:5000 

<h3>ABOUT PROJECT</h3>

In the Hotel Management System, the system support the booking of different room types like standard, deluxe, family suite.

The users or guests can search room inventory and book any available room.

While booking users or guests will create a user profile for login.

This system allows customers to cancel their booking when logged in next time.

Users can also filter the rooms by types (standard, deluxe, family suite).

<h3>USER STORIES</h3>

***USER:*** 
1. User can select different types of room by using drop down menu.
2. Guest can see room inventory on home screen  and they can  also choose it based on  availability.
3. User profile is created for login and to book rooms.
4. Once the user booked rooms, user can also cancel their bookings if they don’t need it.
5. User can also  filter rooms by their types.


***ADMIN:***

6. Admin can see 
                 a)user details
                 b)all bookings along with from date and to date
                 c)add a new room
                 d)room details

<h3>ARCHITECTURE DIAGRAM</h3>

![ARCHITECTURE]<u>https://user-images.githubusercontent.com/70800538/158557240-75f14605-566e-42b9-a0d9-13202bc50d69.PNG<u>


USECASE DIAGRAM

![USECASE]<u>https://user-images.githubusercontent.com/70800538/158557428-1d728752-a63d-49a8-b46c-702a6a7a3d65.PNG<u>

    
<h3>DESIGN:</h3>
  
1.APPLICATION 
![APPLICATION]<u>https://user-images.githubusercontent.com/70800538/158559985-853f614e-4735-471d-a824-be70dc19e0d5.PNG<u>

2.REGISTER
![REGISTER]<u>https://user-images.githubusercontent.com/70800538/158560106-4c1f585a-fa4d-41ca-91de-2f0c00ad77bc.PNG<u>

3.LOGIN
![LOGIN]<u>https://user-images.githubusercontent.com/70800538/158560254-4a43c383-a130-42b3-9f70-83f42531a521.PNG<u>

4.HOMESCREEN
![homescreen]<u>https://user-images.githubusercontent.com/70800538/158571313-0cedc1f7-bd6b-44a0-be36-e1b51f790c2f.PNG<u>

5.MODAL POPUP VIEW OF DETAILS
![MODAL]<u>https://user-images.githubusercontent.com/70800538/158571365-16946a59-146a-4bce-98de-010e3098ef16.PNG<u>


6.AFTER SELECTING START & END DATE BOOK NOW BUTTON IS VISIBLE
![START]<u>https://user-images.githubusercontent.com/70800538/158571484-b0accecf-ea96-471e-b39b-0b4a8522c362.PNG<u>

7.BOOKING ROOM SCREEN
localhost:3000/book/:room_id/:fromdate/:todate
![BOOK]<u>https://user-images.githubusercontent.com/70800538/158572893-a88fe06f-3afb-4008-b865-01395e51db48.PNG<u>

8.SWEETALERT POPUP
(AFTER CLICKING ON BOOK ROOM)
![SWEET]<u>https://user-images.githubusercontent.com/70800538/158571653-3a1799d6-6bab-474e-be7d-7fe297609e7b.PNG<u>

9.DROPDOWN CONSISTS OF PROFILE AND LOGOUT
![DROPDOWN]<u>https://user-images.githubusercontent.com/70800538/158572617-2facd111-30db-4044-a2f1-e61b9c89bed0.PNG<u>

10.PROFILESCREEN
localhost:3000/profile
![PROFILE]<u>https://user-images.githubusercontent.com/70800538/158571743-730eb480-e52e-4705-b06d-f531d40d3301.PNG<u>

11.BOOKINGS TAB
localhost:3000/profile
![BOOKINGTAB]<u>https://user-images.githubusercontent.com/70800538/158571809-8137b5f6-275b-4573-b9e4-c247c00ec13a.PNG<u>

11a.SWEETALERT POPUP
(AFTER CLICKING ON CANCEL BOOKING) 
![CANCEL]<u>https://user-images.githubusercontent.com/70800538/158571963-56719cb6-7c6f-47f9-b806-2b38c2346f6a.PNG<u>

12a.ADMIN SCREEN TAB OF BOOKINGS
(WHO HAVE ADMIN ACCESS)
localhost:3000/admin
![ADMINBOOKING]<u>https://user-images.githubusercontent.com/70800538/158572042-207153c7-38de-4b1e-843c-518309e69589.PNG<u>

12b.ADMIN SCREEN TAB OF ROOMS
(WHO HAVE ADMIN ACCESS)
localhost:3000/admin
![ADMINROOMS]<u>https://user-images.githubusercontent.com/70800538/158572162-9eda3678-05fb-4bf7-a4f2-8c5ad7b1920b.PNG<u>

12c.ADMIN SCREEN TAB OF ADDING A ROOM 
(WHO HAVE ADMIN ACCESS)
localhost:3000/admin
![ADDROOM]<u>https://user-images.githubusercontent.com/70800538/158573182-4ccea291-f726-4258-813f-72b2247322f7.PNG<u>


12d.ADMIN SCREEN TAB OF USERS
(WHO HAVE ADMIN ACCESS)
localhost:3000/admin
![ADMIN]<u>https://user-images.githubusercontent.com/70800538/158572309-a6c95404-9be0-457c-a779-8ea8a9dae70f.PNG<u>
    
    
 <h3>TESTING</h3>

TESTING USING JEST CREATED BY FACEBOOK
    
1.TESTING FOR ROOM
    ![roomtest]<u>https://user-images.githubusercontent.com/70800538/158725926-e276d782-712c-4363-a9c5-9f9fd2783e58.jpeg<u>

    
2.TESTING FOR SUCCESS 
    ![successtest]<u>https://user-images.githubusercontent.com/70800538/158726115-c524dd12-55f3-4691-9f5c-2c8eb0f8a248.jpeg<u>

    
3.TESTING FOR ADMINSCREEN
    ![adminscreentest]<u>https://user-images.githubusercontent.com/70800538/158726168-a557d27e-5275-4779-843a-ca80f3a81df6.jpeg<u>
 
    
4.TESTING FOR LOGIN  
    ![logintest]<u>https://user-images.githubusercontent.com/70800538/158726232-1f047492-8266-4a46-bc40-b152d22919f7.jpeg<u>
    
    
<h3>TEAM MEMBERS</h3>

S, Naveenkumar

Koliparthi, Sravya

Baraik, Srishti 

Bhardwaj, Mukul

Routhu, Kathayayeni 

 




