# Database Instructions
Install node_modules:

```
npm install
npm ci
```

.env should contain:

``` 
DB_NAME=properties // this should be the name of a database in your local mySQL that matches the schema in models
DB_USER=root // this should be the user this database belongs to
DB_HOST="127.0.0.1"
```

Need to create single user in the users table before the listings endpoint can function, for example:

```
INSERT INTO users (name, email, password_hash, user_type, created_at)
VALUES ('Test User', 'testuser@example.com', 'dummyhashedpassword123', 'host', NOW());
```

## Starting API

Run `npm start`