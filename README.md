<img src="src/images/Logo.png"/>
<br></br>

![Repo Size](https://img.shields.io/github/languages/code-size/clairethallon/Living-Room-Tutors.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/clairethallon/Living-Room-Tutors.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/clairethallon/Living-Room-Tutors.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/clairethallon/Living-Room-Tutors.svg?style=for-the-badge)

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

Living Room Tutors was originally launched in 2020 by then high school student Jinglin Li. It is a free web-based peer-to-peer tutoring service for K-12 students that matches volunteer tutors with students who need academic support. It was originally intended to help mitigate the strain of school closures due to COVID-19 and so far, over 500 people have gone through the program.

Living Room Tutors was looking for a more efficient way to match tutors and students. To help alleviate this administrative load, we created an application and database that suggests matches based on the data submitted, sends confirmation emails and generates template emails for successful matches. Go into application here!

With auto-generated template emails and recommended matches based on subject, grade and language, Living Room Tutors will be able to match and respond to applicants much more efficiently, and with much less room for user error. Admin will now have much more time to spend networking, getting the word out to people who could benefit from their services, and applying for grants and other resources using the well-organized data within their new application

## Screenshots

<img src='/src/images/forms.gif'/>
<img src='/src/images/tutorstutees.gif'>
<img src='src/images/matchesAndRecords.gif'>
<img width="1436" alt="Screen Shot 2022-07-06 at 10 56 21 AM" src="https://user-images.githubusercontent.com/93444274/177596717-86c5584d-a056-4679-b7bb-f3c46d2a0bde.png">
<img width="1433" alt="Screen Shot 2022-07-06 at 11 00 11 AM" src="https://user-images.githubusercontent.com/93444274/177597076-1ea10593-51eb-44c9-b329-89fd499b94c6.png">

<img width="1432" alt="Screen Shot 2022-07-06 at 11 01 45 AM" src="https://user-images.githubusercontent.com/93444274/177597089-cacb2ea6-3a7d-4f69-b447-c0a202a30087.png">
<img width="1433" alt="Screen Shot 2022-07-06 at 11 00 40 AM" src="https://user-images.githubusercontent.com/93444274/177597259-0b872152-8e51-4881-891e-b053ff909455.png">
<img width="1434" alt="Screen Shot 2022-07-06 at 11 02 57 AM" src="https://user-images.githubusercontent.com/93444274/177597316-8b87ebb4-c548-4cda-95f6-e3f6f3d25eb7.png">
<img width="1438" alt="Screen Shot 2022-07-06 at 11 00 58 AM" src="https://user-images.githubusercontent.com/93444274/177597397-273a1d09-48f4-451d-b7dc-22cf56148fc0.png">




## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

This application will fully support Chrome browser. All other browsers are considered out of scope.
Be sure to check out the prerequisites and database.sql files for install instructions and database requirements.

### Prerequisites

To properly host this application, NPM, nodemon, brew and Postico should be installed and available.

### Installation

A full list of requirements can be found in the dependencies section of the package.json file, including:

Express, Postgresql, Bootstrap, FontAwesome, Nodemailer, GoogleAPIs, Passport, Axios

There is a database.sql file to use to set up a database. After that, once you fork and clone the repository to your local machine, you should be able to run npm install, then run the server and client to be able to use the app locally.

## Usage

## Tutors/Tutees

- Users who want to apply to be a tutor or recieve tutoring through LRT will click the corresponding button from the /home and enter all required fields on the subsequent pages.
- Users can go back and edit their information as needed until they click SUBMIT on the final page.
- The user will recieve an automatic confirmation email letting them know that their application has been recieved.
- The user is able to register as a tutee or tutor then will be redirected to the dashboard. 
- Functionalities on the profile page include user profiles with photo upload, user biography questions so that tutees and tutors can get to know more information such as What is your favorite type of music? and update registration subjects form button will direct them to update their tutoring subjects.
- The Tutor's are able to send three possible session dates and time to the tutee for confirmation. The dashboard displays the suggested time and dates as well as the status (pending,confirmed or rejected).
On the tutee sessions tab, they will be able to see the three possible dates and click confirm or reject suggested time. 
- Tools tab has external resources for the tutee and tutor to utalize during sessions.
- Guidelines page has detailed information that the tutor and tutees are required to follow. 


## Admin

- Admin can log on with a username and password from /admin.
- On the landing page, admin can navigate between Tutees, Tutors, and Records pages.

- On the Tutors page, admin can view all active and deactivated tutors by toggling between two pages. On the active page, admin can click open a tutors's card to view all information, including special subjects and languages that are starred in their profile. Admin can also deactivate a tutor.
- On the deactivated page, admin can view tutors that have been deactivated, and reactive the tutor if necessary.
- On the Tutees page, admin can view all active and deactivated tutees by toggling between two pages. On the active page, admin can click open a tutee's card to view all information, including special subjects and languages needed that are starred in their profile. Admin can also deactivate a tutee, or click "Match".
  - When "Match" is clicked, the admin is navigated to the Match page. From here, admin can view tutors that are matched with the tutee based on their grade level and subjects they need tutoring in.
  - The admin can filter these matches further by language if the tutee is in need of tutoring in a specific language.
  - Once the admin finds the best match an clicks "Complete Match", a modal pops up with two emails drafted for the tutor and the tutee/tutee's parent/guardian. The admin can click "Copy" which copies the email to clipboard. From there, they can paste the email into their account, check for typos and other information accuracy, and then send them.
  - Once both emails are sent and the admin clicks "Confirm", the match is added to the database which pulls the tutor and tutee out of the active/deactive pool, and the admin is navigated to the Records page.
- On the deactivated tutees page, admin can view tutees that have been deactivated, and reactive the tutee if necessary.

- On the Records page, admin can view all matched tutors and tutees, displayed by match date. If the admin clicks on the match card to open it, they can view detailed information about the matched tutor and tutee.
- Admin can also filter matches by year to view how many matches have been made in a given year since LRT began.

## Acknowledgements

Thank you so much to Living Room Tutors and Jinglin Li for giving us the opportunity to work on this project. Thank you to Prime Digital Academy, Dev Jana and Casie Siekman for the instructional support. Thank you to all of the Ionian cohort, and especially to our incredible team that saw this application through from concepualization to deployment: Laura Burbank, Claire Thallon, Hannah Fligel and Miriam McNamara.

## Contacts

<b>Laura Burbank</b>

- laura.burbank@gmail.com
- https://github.com/Nnausica
- https://www.linkedin.com/in/laura-burbank-47a8a7145/

<b>Claire Thallon</b>

- clairethallon@gmail.com
- https://github.com/clairethallon/
- https://www.linkedin.com/in/claire-thallon-201553122/

<b>Hannah Fligel</b>

- fligelhannah@gmail.com
- https://github.com/hannahfligel
- https://www.linkedin.com/in/hannah-fligel-480a0599/

<b>Miriam McNamara</b>

- miriammcnamara@icloud.com
- https://github.com/MiriamMcNamara
- https://www.linkedin.com/in/miriam-mcnamara/

<b>Fatuma Abdi</b>

- abdi.fatuma776@gmail.com
- https://github.com/Fatuma2117
- https://linkedin.com/in/fatumamabdi

<b>Jack Lund</b>

- jacklund920@gmail.com
- https://github.com/Jlundy22
- https://linkedin.com/in/jack-lund22

<b>Chad Rhiger</b>

- chadrhiger@gmail.com
- https://github.com/chadrhiger
- https://linkedin.com/in/chad-rhiger

<b>Jake McInerney</b>

- jakemcinerney1@gmail.com
- https://github.com/mcinerneyjake
- https://linkedin.com/in/mcinerney-jake

<!-- <a href="https://www.linkedin.com/in/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a> -->
