# Welcome to Rocket Elevators App Mobile

You will find `App.js` file that show the navigation page of our mobile. The website to test this mobile application is https://snack.expo.io/@frimina27/mobile. You can preview the changes directly on your phone or tablet by clicking the **Run** button or use the simulator by clicking **Tap to Play**.

The objective of this mobile application is to be able to see the different status of rocket elevators. To see it, you have to authenticate with the email from an employee. When you arrive at the Home page, you can select your elevator and you have the possibility to change the status of it to inactive.


We have an email on an employe already set for test purposes.
If you want to see all the employee of Rocket Elevator, you can put this get request in postman : 
 `https://zaddi.azurewebsites.net/api/employee/`

If you want to see and confirm if a particular elevator has changed status, you can do this get request with the id you want : 

`https://zaddi.azurewebsites.net/api/elevators/{id}`