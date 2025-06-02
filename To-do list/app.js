let action = prompt("What would you like to do? (add, delete, list, quit)");
const todos = ["Wash the dishes", "Do homework"];

while (action !== "quit" && action !== "q") {
  if (action === "add") {
    const addItem = prompt("Input your to-do...");
    todos.push(addItem);
  } else if (action === "delete") {
    const deletedIndex = parseInt(prompt("Enter the index...to delete"));
    if (!Number.isNaN(deletedIndex)) {
      console.log(`deleted ${todos[deletedIndex]}`);
      todos.splice(deletedIndex, 1);
    } else {
      console.log("Unknown Index");
    }
  } else if (action === "list") {
    console.log("***********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("***********");
  }
  action = prompt("What would you like to do? (add, delete, list, quit)");
}
