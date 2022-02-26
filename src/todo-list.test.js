const { it, expect } = require("@jest/globals");
const { randomUUID } = require("crypto");
const { TodoList } = require("./todo-list");

// Объявляем, что модуль мокается
jest.mock("crypto");

it("should add first element to list", () => {
  const list = new TodoList();

  list.addItem({ name: "create test" });

  expect(list.items).toHaveLength(1);
  expect(list.items[0].name).toBe("create test");
});

it("should add second item to list", () => {
  const list = new TodoList(["create test"]);

  list.addItem({ name: "check me" });

  expect(list.items).toHaveLength(2);
  expect(list.items[1].name).toBe("check me");
});

it("should load items", async () => {
  // Ставим мок (заглушку)
  randomUUID.mockImplementation(() => "00000000-0000-0000-0000-000000000000");
  const list = new TodoList();

  list.fetch = () => {
    return Promise.resolve(["item1", "item2", "item3"]);
  };

  await list.load();

  expect(list.items).toEqual([
    {
      name: "item1",
      isDone: false,
      id: "00000000-0000-0000-0000-000000000000",
    },
    {
      name: "item2",
      isDone: false,
      id: "00000000-0000-0000-0000-000000000000",
    },
    {
      name: "item3",
      isDone: false,
      id: "00000000-0000-0000-0000-000000000000",
    },
  ]);
});
