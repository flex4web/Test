$(document).ready(function() {

    $('#invitePeople').on('change', function() {
        $('.peopleInviteTable').toggle();
    });


    //Add field
    $(".addField").click(function() {
        var customFieldHtml = '<tr class="form-group">';
        customFieldHtml += '<td>';
        customFieldHtml += '<select class="form-control q_usertype" name="usertype" >';
        customFieldHtml += '<option value="">Select</option>';
        customFieldHtml += '<option value="Advisor">Advisor</option>';
        customFieldHtml += '<option value="Client">Client</option>';
        customFieldHtml += '<option value="CPA">CPA</option>';
        customFieldHtml += '<option value="Spouse">Spouse</option>';
        customFieldHtml += '<option value="Others">Others</option>';
        customFieldHtml += '</select>';
        customFieldHtml += '</td>';
        customFieldHtml += '<td><input class="form-control q_firstname" type="text" name="firstname" placeholder="First Name" ></td>';
        customFieldHtml += '<td><input class="form-control q_lastname" type="text" name="lastname" placeholder="Last Name"></td>';
        customFieldHtml += '<td><input class="form-control q_email" type="email" name="email" placeholder="Email" required></td>';
        customFieldHtml += '<td><input class="form-control q_phone" type="text" name="phone" placeholder="Phone"></td>';
        customFieldHtml += '<td><button type="button" class="btn btn-danger btn-sm removeField"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button></td>';
        customFieldHtml += '</tr>';


        $("#customFields").append(customFieldHtml);
    });

    //Remove Field
    $("#customFields").on('click', '.removeField', function() {
        $(this).parent().parent().remove();
    });


    /*Json data */
    $('.getJsonData').on('click', function() {
        aditionalInfoValidation();
        customFieldValidation();
        var countRow = $('#customFields tr').length;
        var totalField = [];
        for (var i = 0; i < countRow; i++) {
            var _this = $('#customFields tr').eq(i);
            var usertype = _this.find('.q_usertype').val();
            var firstname = _this.find('.q_firstname').val();
            var lastname = _this.find('.q_lastname').val();
            var email = _this.find('.q_email').val();
            var phone = _this.find('.q_phone').val();

            var field = {
                usertype: usertype,
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone
            }

            totalField.push(field);
        }

    });

    /*End Json data */

    /*Aditional Info validation */
    function aditionalInfoValidation() {
        var _this = $('#additionalFields');
        var firstname = _this.find('.firstname');
        var lastname = _this.find('.lastname');
        var email = _this.find('.email');

        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (firstname.val() == '') {
            firstname.css('border-color', '#a94442');
        } else {
            firstname.css('border-color', '#ccc');
        }

        if (lastname.val() == '') {
            lastname.css('border-color', '#a94442');
        } else {
            lastname.css('border-color', '#ccc');
        }


        if (email.val() == '') {
            email.css('border-color', '#a94442');

        } else {
            email.css('border-color', '#ccc');
        }
        if (!filter.test(email.val())) {
            email.css('border-color', '#a94442');
        } else {
            email.css('border-color', '#ccc');
        }

    }


    /*Custom Field Validation */
    function customFieldValidation() {
        var countRow = $('#customFields tr').length;
        var totalField = [];
        for (var i = 0; i < countRow; i++) {
            var _this = $('#customFields tr').eq(i);

            var usertype = _this.find('.q_usertype');
            var firstname = _this.find('.q_firstname');
            var lastname = _this.find('.q_lastname');
            var email = _this.find('.q_email');
            // var phone = _this.find('.q_phone');

            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (usertype.val() == '') {
                usertype.css('border-color', '#a94442');
            } else {
                usertype.css('border-color', '#ccc');
            }

            if (firstname.val() == '') {
                firstname.css('border-color', '#a94442');
            } else {
                firstname.css('border-color', '#ccc');
            }

            if (lastname.val() == '') {
                lastname.css('border-color', '#a94442');
            } else {
                lastname.css('border-color', '#ccc');
            }


            if (email.val() == '') {
                email.css('border-color', '#a94442');

            } else {
                email.css('border-color', '#ccc');
            }
            if (!filter.test(email.val())) {
                email.css('border-color', '#a94442');
            } else {
                email.css('border-color', '#ccc');
            }


            /*Duplicate Email Check */
            if (i > 0) {
                for (var j = 0; j < (countRow - 1); j++) {
                    var _Previous = $('#customFields tr').eq(j);
                    var previousFieldEmail = _Previous.find('.q_email');

                    if (previousFieldEmail.val() === email.val() && i != j) {
                        //console.log(email);
                        email.css('border-color', '#a94442');
                    }
                }
            }

        }

    }


});