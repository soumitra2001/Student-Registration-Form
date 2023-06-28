<h1 align="center"><img src="https://media.licdn.com/dms/image/C4E0BAQEMrKo8OgJ0mg/company-logo_400_400/0/1519868076927?e=2147483647&v=beta&t=Q4I1yWenbTiG08tl5iPsxuVaiCd3ZCpD5gTtr7YxzP0" width="30" height="30"> JsonPowerDB <img src="https://images.yourstory.com/cs/images/company_products/login2xplore_1663170165058.png" width="30" height="30"></h1>

## This mini-project performs CRUD operations using JsonPowerDB.

#### JsonPowerDB is a high-performance, creative, and disruptive multi-mode DBMS.

## Some features of JsonPowerDB are:

* Nimble, simple to use, in memory, real-time
* Schema free - easy to maintain
* Serverless support - fast development - cuts time to market
* Built around the world's fastest indexing engine PowerIndex
* Webservices API - Low Dev Cost
* Multiple Security Layers
* A single instance - Million Indexes
* Inbuilt support for querying multiple databases
* Serverside Native NoSQL - the best performance
* Multi-mode database - One solution to a variety of data

## Use cases:

* All RDMS use cases.
* All key-value use cases.
* All document use cases.
* Time series/geospatial analytics.
* Real-time application for data analytics.
* Live working HTML templates.
* Any software application that needs backend DB. (Dynamic web apps/Mobile/Desktop Apps)

<h1 align="center">🧑🏻‍🎓📃 Student Registration Form Using JsonPowerDB 📜📄</h1>

The Student Registration Form project aims to develop a user-friendly web form using HTML, CSS, JavaScript, and JSONPowerDB. This project enables students to provide their essential information such as name, class, roll number, date of birth, registration date, and address. With the integration of JSONPowerDB, the submitted data can be efficiently stored and retrieved. By incorporating validation and intuitive design, this project simplifies the process of registering students while ensuring data accuracy and seamless database management.


## Frameworks and Language used

[![HTML Docs](https://img.shields.io/badge/HTML5-v5-blue.svg)]([https://developer.mozilla.org/en-US/docs/Web/HTML])
[![Bootstrap_Docs](https://img.shields.io/badge/Bootstrap-v5-yellow.svg)]((https://getbootstrap.com/docs/5.2/getting-started/introduction/))
[![CSS Docs](https://img.shields.io/badge/CSS-v3-blue.svg)](([https://developer.mozilla.org/en-US/docs/Web/HTM](https://developer.mozilla.org/en-US/docs/Web/CSS)))
[![JsonPowerDB Docs](https://img.shields.io/badge/JsonPowerDB-blue.svg)]([(https://developer.mozilla.org/en-US/docs/Web/HTML)](https://login2explore.com/jpdb/docs.html))

## Database Design
#### Used JsonPowerDB DataBase

```
❄️IML (JPDB Index Manipulation Language) - To insert, update and delete Json data.
  Http method: POST
  Base url: http://api.login2explore.com:5577
  End-point url: /api/iml (mentioned in command when different)

    PUT: Insert a single record in the database
    {
    "token": <"connection-token">,
    "cmd": "PUT",
    <<"dbName": <"database-name">,>>
    <<"rel": <"relation-name">,>>
    <<"colsAutoIndex": <boolean-value>,>>
    <<"templateStr": <json-template-data>,>>
    "jsonStr": <json-data>
    }

    UPDATE: Update multiple records in the database or add a new column in a record
    {
    "token": <"connection-token">,
    "cmd": "UPDATE",
    <<"dbName": "database-name",>>
    <<"rel": "relation-name",>>
    "jsonStr": {
        <"record-no">: {
            <"column-name">: <"new-value">
        }
        <"record-no">: {
            <"column-name">: <"new-value">
        }
    }
    }

    REMOVE: Remove records from the database
    {
    "token": <"connection-token">,
    "cmd": "REMOVE",
    <<"dbName": <"database-name">,>>
    <<"rel": <"relation-name">,>>
    "record": <record-number | [record-number1,...],>
    "jsonStr" : {}
    }

⚪IRL (JPDB Index Retrieval Language) - To retrieve Json data.
  Http method: POST
  Base url: http://api.login2explore.com:5577
  End-point url: /api/irl

    GET_BY_KEY: Retrieve single record by json data
    {
    "token": <"connection-token">,
    "cmd": "GET_BY_KEY",
    "dbName": <"database-name">,
    "rel": <"relation-name">,
    <<"createTime": <boolean-value>,>>
    <<"updateTime": <boolean-value>,>>
    "jsonStr": {
        <"column-name">: <"column-value">
    }
    }

❄️IDL (JPDB Index Definition Language) - To add index column and remove column / relation / database.
  Http method: POST
  Base url: http://api.login2explore.com:5577
  End-point url: /api/idl

    REMOVE_DB: Remove a database from the JPDB database
    {
    "token": <"connection-token">,
    "cmd": "REMOVE_DB",
    "dbName": <"database-name">
    }

```

## 📒Project Summary :

The goal of this project is to create a student registration form that allows users to input their information such as name, class, roll number, date of birth, registration date, and address. The form will be built using HTML and styled using CSS to create an appealing user interface. JavaScript will be used for form validation and handling form submission. The data entered by the users will be stored in JSONPowerDB.

The project will consist of the following components:

1. HTML Structure: The HTML file will define the structure of the registration form. It will include input fields for name, class, roll number, date of birth, registration date, and address. Each input field will have appropriate labels and placeholders for user guidance.

2. CSS Styling: CSS will be used to enhance the visual appearance of the form. Styles will be applied to the input fields, labels, and buttons to make the form more user-friendly and aesthetically pleasing.

3. JavaScript Validation: JavaScript will be used to validate the user inputs before submitting the form. Validation rules will be defined to ensure that all required fields are filled, and the entered data is in the correct format (e.g., valid dates). Appropriate error messages will be displayed if any validation errors occur.

4. JSONPowerDB Integration: JSONPowerDB will be used as the database for storing the student registration data. When the form is submitted, JavaScript will serialize the form data into JSON format and send it to JSONPowerDB for storage. JSONPowerDB provides a simple and efficient way to store and retrieve JSON data.

5. Success/Failure Messages: Once the form is submitted and the data is successfully stored in JSONPowerDB, a success message will be displayed to the user. In case of any errors during the storage process, a failure message will be shown with appropriate details.

Overall, this project will demonstrate the integration of HTML, CSS, JavaScript, and JSONPowerDB to create a student registration form. The form will have a visually appealing interface, input validation, and seamless storage of data in JSON format using JSONPowerDB.



### Student Registration Form Screenshots:
![](/nbproject/Form.png)
![](/nbproject/DataBase_Dashboard.png)


## Contribution
Contributions to the Student Registration Form are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
