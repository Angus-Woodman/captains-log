# captains-log

![CaptainsLog](https://res.cloudinary.com/dljcc3hfa/image/upload/v1606142861/CaptainsLog-Dashboard_ojoh9b.png)

- A football team management platform for captains with secure registration and login.

![CaptainsLog](https://res.cloudinary.com/dljcc3hfa/image/upload/v1606142861/CaptainsLog-register_ujge3p.png)

![CaptainsLog](https://res.cloudinary.com/dljcc3hfa/image/upload/v1606142859/CaptainsLog-addPlayer_whovyp.png)

- Captain's are able to add players to their squad.

![CaptainsLog](https://res.cloudinary.com/dljcc3hfa/image/upload/v1606142859/CaptainsLog-teamSheet_p17h0j.png)

- They are then able to build a team sheet from their squad by dragging and dropping their players in the desired position. 
- They are also able to select a team name and their team sheet formation.
- Having built their teamsheet they are able to save it as a PDF and/or email it to they're squad via in-built email and PDF functionality.

![CaptainsLog](https://res.cloudinary.com/dljcc3hfa/image/upload/v1606142859/CaptainsLog-matchReport_urcpji.png)

- Finally, captains are able to write match reports and send them to their squad with the email and PDF functionality. 

### Collaborators
[@JamieSear](https://github.com/JamieSear), [@atheermusa](https://github.com/atheermusa), [@Angus-Woodman](https://github.com/Angus-Woodman)

Cloning this repo:

1. cd into captains-log (make sure you can see requirements.txt when you ls)
2. run:
   - pipenv install -r requirements.txt
   - npm install
3. open up a second terminal in the same directory for running the client side and run:
   - npm run dev
4. open up shell in the original terminal with: 
   - pipenv shell 
   - cd into captains_log
5. run server with:
   - python manage.py runserver
6. open up application at: http://127.0.0.1:8000/