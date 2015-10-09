#nodejs cloud file storage

###Cloud Files Storage

System that allows user to store files in different folders and check available disk space, files/folders size & amount.
Files & folders could have title, tags, meta-description

####Installation
```
git clone https://github.com/kolomiytsev/nodejs-cloud-file-storage.git
npm install
```

####Service start
```
node server.js
```

####General endpoints
/users
get - get all users
post - create new user

/assets
get - Get all assets (files/folders)

/resources
get - get used resources for whole system

*Further api information could be found at root folder file - __api.raml__*
