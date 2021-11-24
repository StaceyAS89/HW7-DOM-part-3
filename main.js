const input = document.getElementById('input');
const button = document.getElementById('button');
const ul = document.getElementById('list');
let li = document.createElement('li');




button.addEventListener('click', function (event) {
   const btnRemove = document.createElement('button')

   btnRemove.innerText = 'remove';
   btnRemove.classList.add('btn_remove_task');
   ul.appendChild(li);
   li.classList.add('task_is_not_done');
   li.textContent = input.value;

   input.value = '';
   li.appendChild(btnRemove);
})
ul.addEventListener('click', function (event) {

   if (event.target.tagName === "LI") {
      event.target.classList.toggle('task_is_done')
   }
   if (event.target.tagName === "BUTTON") {
      event.target.closest('li').remove();
   }

})