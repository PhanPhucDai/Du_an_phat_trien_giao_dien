// Hàm thêm sản phẩm vào giỏ hàng
function themGioHang(nhungMonPhoBien) {
    let carts = JSON.parse(localStorage.getItem('carts')) || [];
    let found = false;

    for (let i = 0; i < carts.length; i++) {
        if (carts[i].id === nhungMonPhoBien.id) {
            carts[i].quantity += nhungMonPhoBien.quantity; // Tăng số lượng sản phẩm nếu đã tồn tại
            found = true;
            break;
        }
    }

    if (!found) {
        nhungMonPhoBien.quantity = 1;
        carts.push(nhungMonPhoBien); // Thêm sản phẩm mới nếu chưa tồn tại trong giỏ hàng
        alert(`Sản phẩm ${nhungMonPhoBien.name} đã được thêm vào giỏ hàng`);
    }

    localStorage.setItem('carts', JSON.stringify(carts)); // Cập nhật giỏ hàng trong localStorage
    hienGioHang(); // Hiển thị giỏ hàng
}

// Hàm hiển thị giỏ hàng
function hienGioHang() {
    let carts = JSON.parse(localStorage.getItem('carts')) || [];
    let chuoi = "";

    for (let i = 0; i < carts.length; i++) {


        let item = carts[i];
        let price = parseFloat(subString(item.price));
        let total = price * item.quantity;

        console.log(parseInt(item.quantity))
        chuoi += `
            <tr>
                <td colspan="3"> ${i + 1} </td>
                <td> <img src="${item.img1}" alt="${item.name}" style="width: 100px; height: auto;"> </td>
                <td> ${item.name} </td>
                <td><input type="number" value="${item.quantity}" style="width: 100px; height: 30px;" data-price="${item.price}" data-index="${i}" onchange="soLuong(this)"></td>
                <td class="priceElement" data-index="${i}"> ${total} </td>
                <td> <button class="btn_del" data-index="${i}" data-id="${item.id}" onclick="remove(this)"> Xóa </button></td>
            </tr>`;
    }

    document.getElementById('gioHang').innerHTML = chuoi;
    price();
}

function remove(input) {
    let id = input.getAttribute('data-id');
    let product = input.parentElement.parentElement;
    document.getElementById('gioHang').removeChild(product);
    let carts = JSON.parse(localStorage.getItem('carts')) || [];
    let object=null;
    console.log(id);
    carts.forEach(element => {
        if (element.id === id) {
            object = element;
         }
    });
    console.log(object);

    const index = parseInt(input.getAttribute("data-index"), 10);
    
    carts.splice(index, 1);
    localStorage.setItem('carts', JSON.stringify(carts));

    document.querySelectorAll('.priceElement').forEach((element, idx) => {
        element.setAttribute('data-index', idx);
    });


    price();
}

function subString(input) {
    return input.replace('$', '').trim();
}



function soLuong(input) {
    let quantity = parseInt(input.value, 10);
    if (quantity < 1) {
        quantity = input.value = 1;
    }
    let price = parseFloat(subString(input.getAttribute('data-price')));
    let priceAll = quantity * price;
    let index = input.getAttribute('data-index');
    let priceElement = document.querySelector(`.priceElement[data-index="${index}"]`);

    priceElement.textContent = '$' + priceAll.toFixed(2);

    let elements = document.querySelectorAll('.priceElement');
    let allPrice = 0;

    elements.forEach(element => {
        let price = subString(element.textContent);
        allPrice += parseFloat(price);
    });

    document.getElementById('toltal').innerText = "$" + allPrice.toFixed(2);

}

function price() {
    let elements = document.querySelectorAll('.priceElement');
    let allPrice = 0;

    elements.forEach(element => {
        let price = subString(element.textContent);
        allPrice += parseFloat(price);
    });

    document.getElementById('toltal').innerText = "$" + allPrice.toFixed(2);
}
function user(name, email, numberphone, nameAccount, local, password, selectedGender) {
    this.name = name;
    this.email = email;
    this.numberphone = numberphone;
    this.nameAccount = nameAccount;
    this.local = local;
    this.password = password;
    this.selectedGender = selectedGender;
}
// Khởi tạo mảng người dùng từ localStorage
let arrayUser = JSON.parse(localStorage.getItem('users')) || [];

// Lưu thông tin người dùng vào localStorage
function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(arrayUser));
}

function dangki() {
    let resultdangki = false;
    //chỗ này là lấy thông tin người dùng đăng kí 
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let numberphone = document.getElementById('numberphone');
    let nameAccount = document.getElementById('nameAccount');
    let local = document.getElementById('local');
    let password = document.getElementById('password');
    let gender = document.getElementsByName('gender');
    let selectedGender = '';
    const regerEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regerNumber = /^\d{10}$/;

    //gendẻr này là lấy giới tính thôi khỏi quan tâm 
    gender.forEach(element => {
        if (element.checked) {
            selectedGender = element.value;
        }
    });
    if (selectedGender === '') {
        resultdangki = false;
        document.getElementById('error_gender').textContent = 'Vui lòng chọn giới tính ';

    } else {
        resultdangki = true;
        document.getElementById('error_gender').textContent = '';
    }

    //check người dùng xem nhập đầy củ chưa 
    //|| email === "" || numberphone === "" || nameAccount === "" || local === "" || password === "" || selectedGender === ""
    if (name.value.trim() === "") {
        resultdangki = false;
        name.classList.add('error');
        document.getElementById('error_name').textContent = 'Vui lòng nhập họ tên';
    } else {
        resultdangki = true;
        name.classList.remove('error');
        document.getElementById('error_name').textContent = '';
    }

    if (email.value.trim() === "") {
        resultdangki = false;
        email.classList.add('error');
        document.getElementById('error_email').textContent = 'Vui lòng nhập email';
    } else {
        if (!regerEmail.test(email.value)) {
            resultdangki = false;
            email.classList.add('error');
            document.getElementById('error_email').textContent = 'Email không hợp lệ';
        } else {
            resultdangki = true;
            email.classList.remove('error');
            document.getElementById('error_email').textContent = '';
        }
    }

    if (numberphone.value.trim() === "") {
        resultdangki = false;
        numberphone.classList.add('error');
        document.getElementById('error_number').textContent = 'Vui lòng nhập số điện thoại';
    } else {
        if (numberphone.value.length > 11) {
            resultdangki = false;
            numberphone.classList.add('error');
            document.getElementById('error_number').textContent = 'Số điện thoại không được lớn hơn 10 chữ số';
        } else if (!regerNumber.test(numberphone.value)) {
            resultdangki = false;
            numberphone.classList.add('error');
            document.getElementById('error_number').textContent = 'Số điện thoại không không chính xác';
        } else {
            resultdangki = true;
            numberphone.classList.remove('error');
            document.getElementById('error_number').textContent = '';
        }
    }

    if (nameAccount.value.trim() === "") {
        resultdangki = false;
        nameAccount.classList.add('error');
        document.getElementById('error_nameAccount').textContent = 'Vui lòng nhập tên tài khoản';
    } else {
        resultdangki = true;
        nameAccount.classList.remove('error');
        document.getElementById('error_nameAccount').textContent = '';
    }

    if (local.value.trim() === "") {
        resultdangki = false;
        local.classList.add('error');
        document.getElementById('error_local').textContent = 'Vui lòng nhập địa chỉ';
    } else {
        resultdangki = true;
        local.classList.remove('error');
        document.getElementById('error_local').textContent = '';
    }

    if (password.value.trim() === "") {
        resultdangki = false;
        password.classList.add('error');
        document.getElementById('error_password').textContent = 'Vui lòng nhập mật khẩu của bạn';
    } else {
        resultdangki = true;
        password.classList.remove('error');
        document.getElementById('error_password').textContent = '';
    }

    console.log(arrayUser)
    if (resultdangki) {
        //nếu rồi thì lấy mấy cái thông tin đó lưu thành đối tượng 
        let newUser = new user(name.value, email.value, numberphone.value, nameAccount.value, local.value, password.value, selectedGender);
        //chỗ này là cái mảng user được lưu trong local => carts là một cái mảng
        let result = true;
        // duyệt xem tên người dùng đã được lưu chưa 
        arrayUser.forEach(element => {
            console.log(element.name)
            if (element.name === newUser.name) {
                console.log(element.name);
                console.log(newUser.name);
                result = false;
                //nếu chưa lưu là result === true 
            } else {
                result = true
            }
        });
        console.log(result)


        //nếu là true thì đẩy cái đẩy cái đối tượng người dùng vừa tạo vào mảng 
        if (result === true) {
            arrayUser.push(newUser);
            // Lưu thông tin người dùng vào localStorage
            saveUsersToLocalStorage();
            alert("Đã tạo tài khoản thành công");
        } else {
            alert("Tài khoản tạo không thành công");

        }

    }



}


function dangNhap() {
    let userFound = true;
    let name = document.getElementById('name_dangnhap');
    let password = document.getElementById('password_dangnhap');

    // Kiểm tra tên đăng nhập
    if (name.value.trim() === "") {
        document.getElementById('error_Account').textContent = 'Vui lòng nhập tên tài khoản';
        name.classList.add('error');
        userFound = false;
    } else {
        document.getElementById('error_Account').textContent = '';
        name.classList.remove('error');
    }

    // Kiểm tra mật khẩu
    if (password.value.trim() === "") {
        document.getElementById('error_Password').textContent = 'Vui lòng nhập mật khẩu';
        password.classList.add('error');
        userFound = false;
    } else {
        document.getElementById('error_Password').textContent = '';
        password.classList.remove('error');
    }

    // Kiểm tra tài khoản và mật khẩu
    if (userFound) {
        let result = false;
        arrayUser.forEach(element => {
            if (name.value === element.nameAccount && password.value === element.password) {
                result = true;
            }
        });

        if (result) {
            window.location.href = 'index.html';
        } else {
            alert('Thông tin tài khoản hoặc mật khẩu không chính xác');
        }
    }
}

function checkLogin(userFound) {
    if (userFound === false) {
        alert("Vui lòng đăng nhập để mua sản phẩm");
    } else {
        alert("Mua thành công chúc bạn ngon miệng ");
    }
}


hienGioHang();

