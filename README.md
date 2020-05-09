# Simple Restful CRUD API

Simple Restful CRUD API with node.js and mongoDB

## Installation

Use the package manager [npm](https://npmjs.com) to install dependencies.

```bash
yarn install
yarn start
```

## Usage

- Make sure node.js, postman and mongodb has been installed. 
- Make sure mongodb port 27017 and has been connected.
```bash
yarn start
```
Open the postman and just type the endpoint:
base url => https://localhost:3000
- create : /blog , method : POST, body : title, author, body
- Get All : /blogs,method : GET
- Get One : /blog/:blogId, method : GET
- Update : /blog/:blogId, method : PUT, body : title, author, body
- Delete : /blog/:blogId, method : DELETE


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

=- Riventus -=

## License
[MIT](https://choosealicense.com/licenses/mit/)