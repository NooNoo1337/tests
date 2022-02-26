const { TodoList, TodoItem } = require("./todo-list");

const testAddFirstItem = () => {
  // Подготовка
  const list = new TodoList();

  // Действие
  list.addItem({name: 'create test'});

  // Проверка
  if(list.items.length === 0) {
    throw Error('Items equal to 0')
  }
}

const testSecondAddFirstItem = () => {
  const item = new TodoItem({ name: "create test" });
  const list = new TodoList([item]);

  list.addItem({ name: "check me" });

  if (list.items[1].name !== "check me") {
    throw Error("Second item was not added");
  }
};

testAddFirstItem();
testSecondAddFirstItem();