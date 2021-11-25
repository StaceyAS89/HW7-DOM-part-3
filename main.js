const input = document.getElementById('inputTask');
const button = document.getElementById('addBtn');
const ul = document.getElementById('list');

function create(elementValue) {
   const li = document.createElement('li');
   const liValue = document.createTextNode(elementValue)

   ul.appendChild(li);
   li.appendChild(liValue);

   const btnRemove = document.createElement('button');
   const btnRemoveName = document.createTextNode('remove')
 btnRemove.classList.add('btn_remove_task');
 li.appendChild(btnRemove);
 btnRemove.appendChild(btnRemoveName);
}

button.addEventListener('click', function (event) {
   if (input.value) {

      create(input.value);
      input.value = '';

   }

 
})

ul.addEventListener('click', function (event) {

   if (event.target.tagName === "LI") {
      event.target.classList.toggle('task_is_done')
   }
   if (event.target.tagName === "BUTTON") {
      event.target.closest('li').remove();
   }

})