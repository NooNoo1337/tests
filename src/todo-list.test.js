
const { it, expect } = require("@jest/globals");
const { TodoList, TodoItem } = require("./todo-list");

it("should add first element to list", () => {
  const list = new TodoList();

  list.addItem({ name: "create test" });

  expect(list.items).toHaveLength(1);
  expect(list.items[0].name).toBe("create test");
});

it('should add second item to list', () => {
  const item = new TodoItem({ name: "create test" });
  const list = new TodoList([item]);

  list.addItem({ name: "check me" });

  expect(list.items).toHaveLength(2);
  expect(list.items[1].name).toBe("check me");
});
