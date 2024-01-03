function registerUser() {
    // Lấy dữ liệu từ form
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();

    // Kiểm tra định dạng email (sử dụng một regular expression phổ biến)
    var emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    // Kiểm tra xem email có được nhập không
    if (!email) {
        alert('Vui lòng nhập địa chỉ email.');
        return;
    }

    // Kiểm tra định dạng email (Gmail)
    if (!emailRegex.test(email)) {
        // Hiển thị thông báo lỗi nếu địa chỉ email không hợp lệ
        alert('Vui lòng nhập địa chỉ email Gmail hợp lệ.');
        return;
    }

    // Yêu cầu AJAX
    $.ajax({
        url: 'http://localhost/api/users/create.php', // Thay đổi đường dẫn này thành mã server của bạn
        method: 'POST',
        data: {
            name: name,
            email: email,
            password: password
        },
        success: function (response) {
            console.log(response);

            // Redirect to the login page after successful registration
            window.location.href = 'login.html';
        },
        error: function (error) {
            console.error('Error:', error);
        }
    });
}

// function registerUser() {
//     // Lấy dữ liệu từ form
//     var name = $('#name').val();
//     var email = $('#email').val();
//     var password = $('#password').val();

//     // Yêu cầu AJAX
//     $.ajax({
//         url: 'http://localhost/api/users/create.php',
//         method: 'POST',
//         data: {
//             name: name,
//             email: email,
//             password: password
//         },
//         success: function (response) {
//             console.log(response);

//              if (response.message === 'create') {
//                 // Đăng ký thành công, chuyển hướng đến trang đăng nhập
//                 window.location.href = 'login.html';
//             } else {
//                 // Hiển thị thông báo lỗi (ví dụ: email đã tồn tại)
//                 alert(response.message);
//             }
//         },
//         error: function (error) {
//             console.error('Lỗi:', error);
//         }
//     });
// }



