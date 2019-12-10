#### M3 - `README.md` 



# ✌Sign it

## Description

This app is designed for family members who need to learn Sign Language to communicate with a sibling/grandchildren/niece/nephew whose channel of communication is Signing. This app allows you to create and store vocabulary cards. Sign language is different from one country to another and even in regions within the same country. In addition, signs can also be adapted or simplified according to age, so the possibility of making and storing personalised collections of signs will make it easier for family members to learn in sync with the child's own vocabulary evolution and signing style. 

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

- **Signup:** As an anon I can sign up in the platform so that I can start creating my sign cards

- **Login:** As a user I can login to the platform so that I can access my sign cards

- **Logout:** As a user I can logout from the platform so no one else can use it

- **Edit/View User profile** As a user I can edit my profile details (username)

- **Create sign card** As a user I can add a sign-card

- **Edit sign card** As a user I can edit a sign-card

- **View sign card** As a user I can view a sign-card

- **Delete sign card** As a user I can delete a sign-card

  

-  **Access Resources**: As a anon I can view basic Signing resource libraries (letters, numbers, other categories)




## Backlog

Anon/User:
- Simple word-association game for kids / grandparents
- Add category organisation to user sign-cards. 

<br>


# Client / Frontend

## Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | HomePage              | public      | Home page - Access buttons to Resources or private My-Signs collections. |
| `/auth/signup`            | SignupPage           | anon only   | Signup form, link to login, navigate to homepage after signup |
| `/auth/login`             | LoginPage            | anon only   | Login form, link to signup, navigate to homepage after login |
| `/auth/logout`            | n/a                  | anon only   | Navigate to homepage after logout, expire session            |
| `/auth/me` |  |  |  |
| `/my-signs` | MySignsMain | user only   | Shows user main page with words and sign-card options:  · create new <br />· view card<br />· edit card |
| `/my-signs/create` | CreateSignCard        | user only   | Creates a new Sign Card          |
| `/my-signs/view/:id`      | ViewSignCard | user only   | View an existing Sign Card                                   |
| `/my-signs/edit` | EditSignCard       | user only   | Edit an existing Sign Card                                   |
| `/resources` | Resources | public | Sign resource libraries organised by category. |
| `/resources/category/:id` | ResourcesCategoryPage | public      | Shows words included in the chosen category |
| `/resources/signcard/:id` | ResourcesSignCard | public | Resource Sign Card          |


## Components

- HomePage
- LoginPage
- MySignsMain
- CreateSignCard
- ViewSignCard
- EditSignCard
- Resources
- ResourcesCategoryPage
- ResourcesSignCard
- Navbar
- FooterBar






## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- SignCards Service
  - signcard.list()
  - signcard.view(id)
  - signcard.add(id)
  - signcard.edit(id)
  - signcard.delete(id)
  
- Resources Service 

  - resources.list(id)
  - resourcesSignCard.get(id)
  

<br>


# Server / Backend


## Models

**User model**

```javascript
{
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  mySigns: [{type: Schema.Types.ObjectId,ref:'MySigns'}]
}
```



**MySigns**

```javascript
 {
   img: {type: String, required: true},
   meaning:{type: String, required: true},
   picto: {type: img}
 }
```



**ResourcesSigns** 

```javascript
{
 category: {type: String, enum: ["letters", "numbers", "greetings", "transport"], required: true}
 img: {type: String, required: true},
 meaning:{type: String, required: true},
 picto: {type: img}
}
```





## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/my-signs`     |                              | 200 | 400          | Show all sign cards                                |
| GET         | `/my-signs/view/:id` | {id}                         |                |              | Show specific sign card                   |
| POST        | `/my-signs/create` | {}                           | 201            | 400          | Create and save a new sign card                     |
| PUT         | `/my-signs/edit/:id` | {img, meaning, picto} | 200            | 400          | edit sign-card                                      |
| DELETE      | `/my-signs/delete/:id` | {id}                         | 201            | 400          | delete sign-card                                   |
| GET         | `/resources`            |                              |                | 400          | show resource libraries                            |
| GET         | `/resources/category/:id` | {id}                         |                |              | show specific category collection                  |
| GET     | `/resources/signcard/:id` | {categoryId, img, meaning, picto} | 200            | 404          | show specific sign card                 |

<br>


## Links

### Trello

[Link to your trello board](https://trello.com/invite/b/UZXj8fMS/32fc5ffc2aae98cf995c665545bfd79a/%E2%9C%8C-sign-it) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1J-OEgF8bqwM7wypBgXF72Hin81F42yccbYWR6AYTPCw/edit?usp=sharing)








