Pitch
I want to make a app where the user can login to the app, see a big array of news articles, select which article they can read, once read they can comment on that article, then if they want to they can make their own article

Install Instructions
Use NPM Install  
bcryptjs
connect-mongo
dotenv
express 
express-session
install 
liquid-express-views
method-override
mongoose
morgan
node-fetch

Then NPM Start



USER STORY
- User can login with their user name
- User can enter the index with their username appearing
- User can see multiple news stories 
- User can select a news story
- User selects a story and is moved to a page showing the full story and details about who wrote ite
- User can begin to comment after 
- User can post the comment and it will display their name 
- User can delete their comments 
- User can backout of the show page and begin looking at other articles
- User can click a button and be transfered to a page inorder to make their own article
- User can post their article and see their name as the credited creator and it will display alongside the other articles
- User can delete their article
- User will be able to open their article again and edit it
- User can see their profile where ever they go in the app
- User can see who made the article, what it's about and the time it was made
- User can sign up  

Stretch Goals

- Possibly set up profile pictures or a profile system
- Make it so users can like a article or blog
- 
- 
- 


My initial plan

- Set up my routes, shows, create and edits
- Once routes are ready begin to use HTML and the models to form the page and article
- Using HTML possibly make a small area under the article that will display the users comment

My wireframes 

![Wireframe 1](/wireframes/LoginPage.png)
![Wireframe 2](/wireframes/SignPage.png)
![Wireframe 3](/wireframes/IndexPage.png)
![Wireframe 4](/wireframes/ShowPage.png)
![Wireframe 5](/wireframes/NewPage.png)
![Wireframe 6](/wireframes/CommentsPage.png)


Restful routes

| Name  |  Path          | HTTP Verb | Purpose |
| -- | -- | -- | -- |
| Index | /thenews       | get       | Shows the news articles in a List |
| Show  | /thenews/:id   | show      | Shows the news article the user has selected |
| New   | /thenews/new   | create    | User is able to make their own article displaying their information |



Comment routes 

| Name    | Path | HTTP Verb    | Purpose |
| -- | -- | -- | -- |
| Create Comment | /comment/new | Get    | Makes the comment page
| Comment        | /comment     | Post   | Allows the user to make a  comment |
| Edit a comment | /coment/:id/edit | Get | Allows the user to make edits to their comments |
| Delete Comment | /comment/:id | Delete | Deletes the comment |



Create user 

| Name        | Path           | HTTP Verb | Purpose |
| -- | -- | -- | -- |
| Create user form | /user/register | Get       | Make the user | 
| Create User | /user | Post | Actually creates the user |



![ERD](/wireframes/NEWERD.JPG)
