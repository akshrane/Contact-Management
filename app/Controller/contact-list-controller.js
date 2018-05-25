app.controller("contactListController", function ($scope, $state, ngDialog, contactService) {

    $scope.pageNumbers = [];



    $scope.labels = {
        pageHeading: "Contact Management",
        tableHeading: "Contact List",
        contactId : "Id",
        firstName: "First Name",
        lastName: "Last Name",
        emailAddress: "Email Address",
        contactNum: "Contact Number",
        status: "Status",
        activeStatus: "Active",
        inActiveStatus: "Inactive",
        action: "Action",
        buttonLabels: {
            addContactBtn: "Add New Contact"
        }
    };

    $scope.addContactFlow = function () {
        $state.go("contact-add-update");
    };

    $scope.deleteContact = function (id) {
        $scope.tempId = id;
        ngDialog.openConfirm({
        template:'\
                <p>Are you sure you want to delete this contact?</p>\
                <div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog()">No</button>\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="deleteAction()">Yes</button>\
                </div>',
            plain: true,
            scope: $scope
        }).then(
        function (value) {
            console.log("confirm");
        }, function (reason) {
            console.log('Modal promise rejected. Reason: ', reason);
        });
    };

    $scope.deleteAction = function(){
        var index = contactService.retrieveIndexFromList($scope.contactList, $scope.tempId);
        $scope.contactList.splice(index, 1);
        $scope.closeThisDialog();
    };

    $scope.closeThisDialog = function(){
        ngDialog.close();
    };
    $scope.setPageIndex = function (pageIndex) {
        $scope.pageIndex = pageIndex;
    }
});