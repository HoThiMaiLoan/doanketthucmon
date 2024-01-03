var categoryList = [];

$(document).ready(function () {
  // Fetch category list
  $.ajax({
    url: 'http://localhost/api/categories/index.php',
    type: 'GET',
    success: function (data) {
      categoryList = JSON.parse(data);
      renderCategoryListUI(categoryList);
    },
    error: function (e) {
      console.log(e.message);
    }
  });
});

function renderCategoryListUI(categoryList) {
  $('#categories-list').empty();

  categoryList.forEach(category => {
    $('#categories-list').append(
      `
      <tr>
        <th scope="row">${category.id}</th>
        <td>${category.name}</td>
        <td>${category.image}</td>
        <td>${category.id}</td>
        <td>
          <a href="http:edit.html" class="btn btn-primary">
            <i data-lucide="pencil"></i>Edit
          </a>
        </td>
        <td>
          <div class="d-flex justify-content-end">
            <button onclick="deleteCategory(${category.id})" type="button" class="btn btn-primary">
              <i data-lucide="trash-2"></i>Delete
            </button>
          </div>
        </td>
      </tr>
      `
    );
  });
}

function deleteCategory(categoryId) {
  $.ajax({
    url: 'http://localhost/api/categories/delete.php?categoryId=' + categoryId,
    type: 'GET',
    success: function (data) {
      location.reload();
    },
    error: function (e) {
      console.log(e.message);
    }
  });
}



function createCategory() {
  var name = $('#name').val();
  var image = $('#image').val();

  // Validate input here if needed

  // Gửi yêu cầu AJAX
  $.ajax({
    url: 'http://localhost/api/categories/create.php', // Thay thế bằng đường dẫn thực tế đến tệp PHP của bạn
    type: 'POST',
    data: {
      name: name,
      image: image
    },
    dataType: 'json',
    success: function (response) {
      console.log(response);

      // Redirect to the login page after successful registration
      window.location.href = 'index.html';
    },
    error: function (error) {
      console.error('Error:', error);
    }
  });
}


function editCategory() {
  // Lấy dữ liệu từ biểu mẫu
  var id = $('#id').val();
  var name = $('#name').val();
  var image = $('#image').val();

  // Đảm bảo tất cả các trường đều đã được điền
  if (!id || !name || !image) {
    alert("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  // Tạo đối tượng FormData để gửi các tệp tin
  var formData = new FormData();
  formData.append('id', id);
  formData.append('name', name);
  formData.append('image', image);

  // Tạo yêu cầu AJAX
  $.ajax({
    type: 'POST',
    url: 'http://localhost/api/categories/update.php', // Cập nhật đường dẫn đúng
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      console.log(response);

      // Redirect to the login page after successful registration
      window.location.href = 'index.html';
    },
    error: function (xhr, status, error) {
      console.error('Lỗi AJAX: ' + status + ' - ' + error);
    }
  });
}