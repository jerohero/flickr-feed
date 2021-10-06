# Kickr (Flickr feed)
Web application for searching through Flickr's photo collection.

![image](https://user-images.githubusercontent.com/14930277/136197950-32a2a82a-87eb-4891-9d39-8731a5a12947.png)


## Installing dependencies

Execute in the _frontend_ and _backend_ directories:

`npm install`


## Running the applications

Execute in the _frontend_ and _backend_ directories:

`npm start`


## env
#### Frontend
Create .env file in _frontend_:

`REACT_APP_API_URL=http://localhost:3000/api`


#### Backend
Create .env file in _backend_:

```
FLICKR_API_KEY=[FLICKR API KEY https://www.flickr.com/services/apps/create/apply]
FRONTEND_URL=http://localhost:3000
PORT=3000
FLICKR_API_URL=https://www.flickr.com/services
PRIVKEY_PATH=[CERTBOT PRIVKEY PATH (for hosting https)]
FULLCHAIN_PATH=[CERTBOT FULLCHAIN PATH (for hosting https)]
```
