# Overview
mock-server is a simple mock server for REST API

# Install
```bash
$ git clone https://github.com/aaami1ster/mock-server.git
$ cd mock-server
$ npm i
$ npm start
# find server in http://localhost:8080
```

# How it works
1. for every resource add json file in `db` folder that contains list of actual data. 
e.g

    For `users` add `users.json` file in `db` folder.

   `db/users.json`:
    ```
    [
        {
            "_id": "123",
            "name": "Abdalla Misbah",
            "email": "abdalla@masdr.com",
            "mobileNumber": "249922281440",
            "password": "123456",
            "role": 0,
            "company": {
                "name": "Masdr co",
                "address": "Almanshia"
            }
        }
    ]
    ```
1.  Start mock server
    ```bash
    $ npm start
    # find server in http://localhost:8080
    ```
1.  Get users list
    `http://localhost:8080/users`
1. Get user by id
    `http://localhost:8080/users/123`
