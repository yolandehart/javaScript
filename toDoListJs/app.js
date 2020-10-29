const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};

const filterTodos = term => {

  // add filtered class
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // remove filtered class
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};


// add todos event
addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const todo = addForm.add.value.trim();
  // trim ensures no spaces either side of words

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }

});


// delete todos event
list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});


const filterToDos = (term) => {

Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.add('filtered'));

Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.remove('filtered'));
  
};


// filter todos event
search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});














