app.service("contactService", function ($http) {

    this.getContacts = function () {
        return [
            {
                "id": 1,
                "firstName": "Small",
                "lastName": "Francis",
                "emailAddr": "smallfrancis@fortean.com",
                "telephone": 8184102265,
                "isActive": false
            },
            {
                "id": 2,
                "firstName": "Hood",
                "lastName": "Mcknight",
                "emailAddr": "hoodmcknight@fortean.com",
                "telephone": 9555913495,
                "isActive": true
            },
            {
                "id": 3,
                "firstName": "Silvia",
                "lastName": "Roberts",
                "emailAddr": "silviaroberts@fortean.com",
                "telephone": 8475752285,
                "isActive": true
            },
            {
                "id": 4,
                "firstName": "Bernice",
                "lastName": "Potts",
                "emailAddr": "bernicepotts@fortean.com",
                "telephone": 8385043916,
                "isActive": false
            },
            {
                "id": 5,
                "firstName": "Kelly",
                "lastName": "Fleming",
                "emailAddr": "kellyfleming@fortean.com",
                "telephone": 8064793917,
                "isActive": true
            },
            {
                "id": 6,
                "firstName": "Decker",
                "lastName": "Lara",
                "emailAddr": "deckerlara@fortean.com",
                "telephone": 9875892868,
                "isActive": false
            },
            {
                "id": 7,
                "firstName": "Kaye",
                "lastName": "Harper",
                "emailAddr": "kayeharper@fortean.com",
                "telephone": 8465652610,
                "isActive": true
            },
            {
                "id": 8,
                "firstName": "Briana",
                "lastName": "Hubbard",
                "emailAddr": "brianahubbard@fortean.com",
                "telephone": 9955023989,
                "isActive": false
            },
            {
                "id": 9,
                "firstName": "Roseann",
                "lastName": "Benton",
                "emailAddr": "roseannbenton@fortean.com",
                "telephone": 9575263071,
                "isActive": true
            },
            {
                "id": 10,
                "firstName": "Foley",
                "lastName": "Bray",
                "emailAddr": "foleybray@fortean.com",
                "telephone": 8895242484,
                "isActive": false
            },
            {
                "id": 11,
                "firstName": "Roberson",
                "lastName": "Walker",
                "emailAddr": "robersonwalker@fortean.com",
                "telephone": 9035192053,
                "isActive": true
            },
            {
                "id": 12,
                "firstName": "Imelda",
                "lastName": "Cross",
                "emailAddr": "imeldacross@fortean.com",
                "telephone": 8335192999,
                "isActive": true
            },
            {
                "id": 13,
                "firstName": "Barlow",
                "lastName": "Schneider",
                "emailAddr": "barlowschneider@fortean.com",
                "telephone": 9704353073,
                "isActive": false
            }
        ]
    };

    this.generateId = function (data) {
        var max = 0;
        for (key in data) {
            if (data[key].id > max) {
                max = data[key].id;
            }
        }
        return max + 1;
    };

    this.retrieveIndexFromList = function (contactList, id) {
        for (var i = 0; i < contactList.length; i++) {
            if (contactList[i].id === id) {
                return i;
                break;
            }
        }
    };

});