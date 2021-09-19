const ul = document.querySelector('.list ul');
const li = document.createElement('li');
const plus = document.querySelector('nav .fa-plus-circle');
const input = document.querySelector('input');

plus.addEventListener('click', () => {    
  if (input.value !== '') {
    li.innerHTML = `${input.value}<i class="fas fa-trash-alt"></i>`;
    ul.append(li);
  } else {
    alert('정확한 값을 입력해주세요');
  }
});