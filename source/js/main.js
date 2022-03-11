const input = document.querySelector('.js-input')
const button = document.querySelector('.js-button-add')
const saveButton = document.querySelector('.js-button-save')
const clearButton = document.querySelector('.js-button-clear')
const list = document.querySelector('.js-list')
const remove = document.querySelector('.js-delete')

button.addEventListener('click', function () {
  let val = input.value
  if (input.value == '') {
  } else {
    input.value = ''
    list.insertAdjacentHTML("beforeend", `
      <li class="todo__item js-item">
        <div class="todo__item-container js-s">
          <div class="todo__item-text">
          ${val}
          </div>
          <div class="todo__item-remove js-delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </div>
        </div>
      </li>
    `)
  }
})

document.body.addEventListener('click', function (event) {
  const target = event.target.closest('.js-delete');
  const item = event.target.closest('.js-item')
  if (!target) return;
    item.remove()
});

document.body.addEventListener('click', function (event) {
  const target = event.target.closest('.js-item');
  if (!target) return;
    target.classList.toggle('js-marked')
});


saveButton.addEventListener("click", () => {
    localStorage.setItem("js-list", list.innerHTML);
});

clearButton.addEventListener("click", () => {
    list.innerHTML = "";
    localStorage.removeItem('js-list', list.innerHTML);
});


function loadTodos() {
  const data = localStorage.getItem("js-list");
    if (data) {
        list.innerHTML = data;
    }
    const deleteButtons = document.querySelectorAll("js-button-clear");
    for (const clearButton of deleteButtons) {
        listenDeleteTodo(clearButton);
    }
}

loadTodos();
