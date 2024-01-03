


        // function performLogin() {
        //     const email = document.getElementById('email').value;
        //     const password = document.getElementById('password').value;

        //     // Create a FormData object to send data
        //     const formData = new FormData();
        //     formData.append('email', email);
        //     formData.append('password', password);

        //     fetch('http://localhost/api/users/login.php?', {
        //         method: 'POST',
        //         body: formData
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.code === 200) {
        //             alert('Login successful');
        //             // You can redirect to another page or perform additional actions here
        //         } else {
        //             alert('Login failed: ' + data.message);
        //         }
        //     })
        //     .catch(error => console.error('Error:', error));
        // }
        function performLogin() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
        
            //Tạo đối tượng FormData để gửi dữ liệu
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
        
            fetch('http://localhost/api/users/login.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.code === 200) {
                    alert('đăng nhập thành công');
                    // Redirect to another page
                    window.location.href = 'index.html';
                } else {
                    alert(' ' + data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        }