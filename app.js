function listUser() {

  let data = JSON.parse(localStorage.getItem(`data`));//повертаємо результати останнього масива данних

  let container = document.querySelector(`.container`);

  for (let i = 0; i < data.length; i++) {

    let user = document.createElement(`div`);
    user.innerHTML = data[i].name;
    console.log(data[i].name);
    user.className = `user`;
    container.appendChild(user);  //створюєио графу з іменем користувача


    let btnView = document.createElement(`button`); //створюємо кнопку 'view'
    btnView[i];
    btnView.className = `btnView`;
    btnView.innerHTML = `view`;
    container.appendChild(btnView);

    btnView.addEventListener(`click`, function () //функція просмотру блоку данних користувача
    {
      let viewUser = document.createElement(`div`);
      viewUser.className = `viewUser`;
      let objA = data[i];
      for (let key in objA) {
        let block = document.createElement(`div`);
        block.innerHTML = `${key}` + `:` + `${objA[key]}`;
        block.className = `data`;
        viewUser.appendChild(block);
      }
      let viewBtn = document.createElement(`button`);//кнопка закриття блоку данних
      viewBtn.innerHTML = `закрити`;
      viewBtn.className = `viewBtn`;
      viewUser.appendChild(viewBtn);
      document.body.append(viewUser);
      console.log(data);
      console.log(data[i]);

      viewBtn.addEventListener(`click`, function () {
        viewUser.style.display = `none`
      });
    })
    let btnEdit = document.createElement(`button`); //кнопка редагування
    btnEdit.className = `btnEdit`;
    btnEdit.innerHTML = `edit`;
    container.appendChild(btnEdit);

    btnEdit.addEventListener(`click`, function () //функція редагування
    {
      let el = document.getElementById(`myForm`);
      el.style.display = `block`;
      console.log(data[i]);
      let btnSend = document.getElementById(`btnConfirm`);
      btnSend.style.display = `none`;
      let btnFormEdit = document.getElementById(`btnFormEdit`);
      btnFormEdit.style.display = `block`;
      document.getElementById(`btnFormEdit`).addEventListener(`click`, function () {
        let name = document.getElementById(`name`).value;
        console.log(name);
        let login = document.getElementById(`login`).value;
        console.log(login);
        let password = document.getElementById(`password`).value;
        console.log(password);
        let post = document.getElementById(`email`).value;
        console.log(post);
        let age = document.getElementById(`age`).value;
        let phonNum = document.getElementById(`phonnumber`).value;
        console.log(phonNum);
        let cardNum = document.getElementById(`cardnumber`).value;
        console.log(cardNum);

        let person =
        {
          name: name,
          login: login,
          password: password,
          email: post,
          age: age,
          phonNumber: phonNum,
          creditCardNumber: cardNum
        }
        console.log(person);
        console.log(data);
        data.splice(i, 1, person);
        console.log(data);
        localStorage.setItem(`data`, JSON.stringify(data));
      })
    });

    let btnRemove = document.createElement(`button`); //кнопка видалення данних користувача
    btnRemove.className = `btnRemove`;
    btnRemove.innerHTML = `remove`;
    container.appendChild(btnRemove);

    btnRemove.addEventListener(`click`, function () {
      data.splice(i, 1);
      btnEdit.style.display = `none`;
      btnView.style.display = `none`;
      btnRemove.style.display = `none`;

      localStorage.setItem(`data`, JSON.stringify(data));
      backToList();
    })
  };
  document.body.append(container);
}
function addUser() {  //створення блоку данних нового користувача
  let data = JSON.parse(localStorage.getItem(`data`));
  console.log(data);
  let el = document.getElementById(`myForm`);
  el.style.display = `block`;
  let btnFormEdit = document.getElementById(`btnFormEdit`);
  btnFormEdit.style.display = `none`;

  let btnConfirm = document.getElementById(`btnConfirm`);
  btnConfirm.addEventListener(`click`, validaForm);
}
function validaForm() { //валідація данних 
  let name = document.getElementById(`name`).value;
  let num = "[a-zA-Z]+";
  let e = name.match(num);
  if (e == null || e == ` `) {
    alert(`ввели невірне ім'я`);
    return;
  }
  let login = document.getElementById(`login`).value;
  if (login == `` || login == null) {
    alert(`ввели невірний логін`);
    return;
  }
  let password = document.getElementById(`password`).value;
  let passw1 = document.getElementById(`passw1`).value;
  let epas = /^[a-zA-Z0-9]+/;
  let ep = password.match(epas);
  if (password != passw1 || password == "") {
    alert(`Паролі не совпадають`)
    return;
  };
  if (ep == null) {
    alert('пароль невірний');
    return;
  };
  let post = document.getElementById(`email`).value;
  let epost = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let es = post.match(epost);
  if (post == `` || es == null) {
    alert(`ввели невірну електронну адресу`);
    return;
  };
  let age = document.getElementById(`age`).value;
  if (age == `` || age <= 0) {
    alert(`введіть ваш вік`);
    return;
  };
  let phonNum = document.getElementById(`phonnumber`).value;
  let fN = /^\d+$/;
  let el = phonNum.match(fN);
  if (phonNum == "" || el == null) {
    alert(`ввели невірний формат телефону`);
    return;
  }
  let cardNum = document.getElementById(`cardnumber`).value;
  let cN = /[0-9]{13,16}/;
  let dN = cardNum.match(cN);
  if (dN == null || cardNum == "") {
    alert(`ввели невірний формат картки`);
    return;
  }
  addUserToList();
}
function addUserToList() //вивод блоку данних нового користувача
{
  let data = JSON.parse(localStorage.getItem(`data`));
  console.log(data);

  document.getElementById(`myForm`).style.display = `none`;
  let user = document.createElement(`div`);
  user.className = `records`;
  user.style.display = `block`;

  let name = document.getElementById(`name`).value;
  console.log(name);
  let login = document.getElementById(`login`).value;
  console.log(login);
  let password = document.getElementById(`password`).value;
  console.log(password);
  let post = document.getElementById(`email`).value;
  console.log(post);
  let age = document.getElementById(`age`).value;
  let phonNum = document.getElementById(`phonnumber`).value;
  console.log(phonNum);
  let cardNum = document.getElementById(`cardnumber`).value;
  console.log(cardNum);

  let person =
  {
    name: name,
    login: login,
    password: password,
    email: post,
    age: age,
    phonNumber: phonNum,
    creditCardNumber: cardNum
  }

  let newPerson = `Iм'я :${name}\n
                    Логін :${login}\n
                    Пароль:${password}\n
                    Електронна адреса: ${post}\n
                     Вік:${age} 
                     Телефон:${phonNum}\n
                     Банк.картка:${cardNum}`
  user.innerHTML = newPerson;
  console.log(person);
  document.body.append(user);

  console.log(data);


  data.push(person);
  console.log(data);


  localStorage.setItem(`data`, JSON.stringify(data));
  console.log(data.length);
  document.getElementById(`btnSave`).addEventListener(`click`, backToList)
}

function backToList() {
  document.forms.myForm.reset();
  location.reload();
}



listUser();
