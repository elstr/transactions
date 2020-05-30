# Instructions
1) Clone this repository
2) Just in case verify both folders have been cloned (frontend, backend)
3) If backend folder is empty, please clone the following repository as well: https://github.com/elstr/transactions-backend/tree/master


## Frontend set up
1) cd to the frontend folder
2) execute `yarn install`
3) execute `yarn start`
4) frontend will be running in `http://localhost:3000`


## Backend set up
1) cd to the backend directory
2) execute `npm install`
3) execute `npm run start`
4) backend will be running in `http://localhost:3001`

### Backend routes
- GET http://localhost:3001  
This endpoint will return the current balance of the account
Response format: 
```js
{
    "statusCode": 200,
    "type": "success",
    "data": 100,
    "message": "Current balance"
}
```

- GET http://localhost:3001/transactions  
This endpoint will return historical transaction data  
Response format:
```js
{
    "statusCode": 200,
    "type": "success",
    "data": [
        {
            "id": "5SHTR_RFT",
            "type": "debit",
            "amount": 500,
            "effectiveDate": "2020-04-22 18:13:44"
        },
        {
            "id": "r5USVp2mQ",
            "type": "debit",
            "amount": 500,
            "effectiveDate": "2020-04-22 18:13:45"
        }
    ],
    "message": "Transactions found"
}
```

- GET http://localhost:3001/transactions/:id  
This endpoint will return specific data for the given transaction  
Response format:
```js
{
    "statusCode": 200,
    "type": "success",
    "data": {
        "id": "5SHTR_RFT",
        "type": "debit",
        "amount": 500,
        "effectiveDate": "2020-04-22 18:13:44"
    },
    "message": "Transaction found"
}
```


- POST http://localhost:3001/transactions  
Required body:
```js
{
	"amount": number / decimal,
	"type": string ('credit' / 'debit')
}
```

Example given:
```js
{
	"amount": "500",
	"type": "debit"
}

{
	"amount": "300",
	"type": "credit"
}
```

Response format:
```js
{
    "statusCode": 201,
    "type": "success",
    "data": {
        "id": "yuMEtND1l",
        "type": "debit",
        "amount": 500,
        "effectiveDate": "2020-04-22 17:44:10"
    },
    "message": "Transaction stored"
}
```


### Requirements
We are looking to build a money accounting system. The application should be a web service. It should not do any real “transactional” work, just emulate the financial transactions logic (debit and credit).<br />

We emulate debit and credit operations for a single user, so we always have just one financial account.<br />

No security is required. So don't worry about authentication.<br />

No real persistence is expected. Please don't invest time into DB integration.<br />

Please avoid wasting time for complex project configuration. Use configuration from an existing project, if you have one, or use project skeleton generation tools for your technologies. Default configuration would be completely enough.<br />

### Must have
Service must store the account value of the single user. <br />
Service must be able to accept credit and debit financial transactions and update the account value correspondingly.<br />
Any transaction, which leads to negative amount within the system, should be refused. Please provide http response code, which you think suits best for this case. <br />
Application must store transactions history. Use in-memory storage. Pay attention that several transactions can be sent at the same time. The storage should be able to handle several transactions at the same time with concurrent access, where read transactions should not lock the storage and write transactions should lock both read and write operations. <br />
It is necessary to design REST API by your vision in the scope of this task. <br />
In general, the service will be used programmatically via its RESTful API. For testing purposes Postman or any similar app can be used.<br />
It should be possible to launch project/projects by a single-line-command. Please provide README.md <br />
We would rather see what you were able to do in 5 hours than a full-blown application you’ve spent days implementing. Note that in addition to quality, time used is also factored into scoring the task.


