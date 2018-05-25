app.filter('contactListFilter', function () {
    return function (contactList, contactFilter, pageSize, pageIndex) {
        var output = [];
        var validParameter = [];

        if (contactFilter != undefined) {
            for (key in contactFilter) {
                if (contactFilter[key] != '' && contactFilter[key] != null) {
                    validParameter.push(key);
                }
            }
        }

        if (validParameter.length > 0) {
            for (key in contactList) {
                var count = 0;
                for (var i = 0; i < validParameter.length; i++) {
                    if (String(contactList[key][validParameter[i]]).toLowerCase().includes(String(contactFilter[validParameter[i]]).toLowerCase())) {
                        count++;
                    } else {
                        continue;
                    }
                }

                if (count == validParameter.length) {
                    output.push(contactList[key]);
                }
            }

            return output.slice(pageSize * (pageIndex - 1), pageSize * (pageIndex - 1) + pageSize);
        }

        return contactList.slice(pageSize * (pageIndex - 1), pageSize * (pageIndex - 1) + pageSize);
    }

});

app.filter('calculatePageIndex', function () {
    return function (contactList, pageSize) {
        var output = [];
        var validParameter = [];

        for (var i = 0; i < contactList.length / pageSize; i++) {
            output.push(i + 1);
        }

        return output;
    }

});