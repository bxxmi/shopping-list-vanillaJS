const itemsWrap = document.querySelector('.list');
const addBtn = document.querySelector('nav i');
const text = document.querySelector('input');

addBtn.addEventListener('click', add);

text.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    add();
  }
});

function add(i) {
  const li = document.createElement('li');
  li.setAttribute('class', 'list_row');

  const listName = document.createElement('span');
  listName.innerHTML = text.value;
  text.value = '';
  text.focus();

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  
  li.appendChild(delBtn);
  li.appendChild(listName);
  itemsWrap.appendChild(li);

  delBtn.addEventListener('click', del(i));
}

function del(i) {
  let li = document.querySelector('.list_row');
  itemsWrap.removeChild(li);
}
