
# Final Project: PerfectGame

_By Javeria Baloch, Danaishe Mamvura & Christoph Meyer_

## About the Project

PerfectGame is a health and fitness website where visitors may calculate their BMI by entering their height and weight. If they need a diet plan or physical training sessions after seeing the results, they can use the website to request a plan for either of those from a professional.

---

## Setup

1. **Setup the database**
    1. Start a DBMS of your choice and start an SQL Server
        - Make sure the server is running on port 3306
    2. Create a database according to the info in `Code/Backend/mysqlcode.sql`
    3. Create a user that has full access to that database with the following credentials
        > Username: BeFit<br>
        Host: localhost<br>
        Password: Potsdam!sGr8

2. **Setup the backend**
    1. Open a console/terminal in `Code/Backend`
    2. Run `npm install`
    3. Run `npm start`
        - This should automatically start on port 3001

3. **Setup the frontend**
    1. Open a console/terminal in `Code/frontend`
    2. Run `npm install`
    3. Run `npm start`
        - This should automatically start on port 3000

After you've followed all these steps you should be able to use the website without problems

---