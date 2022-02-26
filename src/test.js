const { TodoList } = require("./todo-list");

const testAddFirstItem = () => {
  // Подготовка
  const list = new TodoList();

  // Действие
  list.addItem({name: 'create test'});

  // Проверка
  if(list.items.length === 0) {
    throw Error('Items equal to 0')
  }
};

testAddFirstItem();