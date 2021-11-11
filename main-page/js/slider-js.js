document.onclick = () => {
  //найдем элемент, который будем менять
  const p = document.querySelector('.item_1');
  //создадим объект textarea он и будет инпутом
  const textarea = document.createElement('textarea');
  //добавим инпуту текущее значение параграфа, чтобы  не редактировать с нуля
  textarea.value = p.innerText;
  //заменим параграф на textarea
  p.replaceWith( textarea );
}