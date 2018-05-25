app.controller("contactAmendController", function ($scope, $state, $stateParams, contactService) {
    $scope.labels = {
        addPageHeading: "Add Contact Information",
        updatePageHeading: "Update Contact Information",
        firstName: "First Name:",
        lastName: "Last Name:",
        emailAddress: "Email Address:",
        contactNum: "Contact Number:",
        statusType: "Active",
        buttonLabels: {
            submitBtn: "Submit",
            updateBtn: "Update",
            cancelBtn: "Cancel"
        },
        placeHolders: {
            firstNamePlaceHolder: "Enter First Name",
            lastNamePlaceHolder: "Enter Last Name",
            emailPlaceHolder: "Enter Email Address",
            contactNumberPlaceHolder: "Enter Contact Number"
        },
        errorMsgs: {
            firstNameErrMsg: "First Name is Required.",
            lastNameErrMsg: "Last Name is Required",
            emailErrMsg: "Email Address is Required",
            emailInvalidErrMsg: "Please Enter a valid Email ID",
            contactNumberErrMsg: "Contact Number is Required",
            contactNumberLengthMinErrMsg: "Contact Number Must be minimum 10 digits.",
            contactNumberLengthMaxErrMsg: "Contact Number cannot be more than 10 digits."
        }
    };
    $scope.contact = $stateParams.contact;
    if ($scope.contact) {
        $scope.isUpdate = true;
    }
    $scope.addContact = function (isValid) {
        if (isValid) {
            $scope.contact.id = contactService.generateId($scope.contactList);
            $scope.contactList.unshift($scope.contact);
            $state.go("contactList");
        }
    };
    $scope.updateContact = function (isValid) {
        if (isValid) {
            var index = contactService.retrieveIndexFromList($scope.contactList, $scope.contact.id);
            $scope.contactList[index] = $scope.contact;
            $state.go("contactList");
        }
    };
});