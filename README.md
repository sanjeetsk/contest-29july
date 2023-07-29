Delpoy link
https://loquacious-crisp-6c0719.netlify.app/
# Task
To execute dummy authentication using api given at https://dummyjson.com/docs/auth
Make a login UI and a profile page, the login takes only username and password and has a login button.
The task is to take the username and password from the user and then on click of the log in button send a post request at the api given in the link above.
The post request should look like this -
fetch('https://dummyjson.com/auth/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
username:${usernameState},
password:${passwordState},
})
})
.then(res => res.json())
.then(console.log);
If the response is 200 OK, then save the entire user object including token and the id in redux state and send the user to profile page.
Inside the profile page , make a useEffect which sends a fetch request at https://dummyjson.com/users/${id} , where id is the id you saved in the redux state
Save the user object with all the details using redux again and display all of the information you receive.
Use any one of the usernames and passwords given below to actually log in and get a successful response, if the response is not 200 OK or successful then show the error provided by the api in the frontend on login.
Dummy Credentials to get a successful response - Username - atuny0 , Password - 9uQFF1Lh
Username - hbingley1 , password - CQutx25i8r
Username - rshawe2 , password - OWsTbMUgFc
You can get more valid usernames and password from - https://dummyjson.com/users.
If its an invalid username or password the login api will automatically show an error.
# UI Reference
Figma Link - https://www.figma.com/file/kOlsMleE2ugkI52doKBPA1/f4---Dummy-Auth?type=design&node-id=0%3A1&mode=design&t=bDqvca6C6EWiCFvG-1
