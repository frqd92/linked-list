import { LinkedList } from "./list-factory.js";
console.clear()
  
const newList = LinkedList();

newList.append("one");
newList.append("two");
newList.prepend("This is the head")
newList.append("four")
newList.insertAt("three",3);
newList.append("Pop this off")
newList.pop()
newList.appendMultiple(["five", "six", "seven", "eight"]);

newList.append("This is the tail")

console.log(newList.head().value); // "This is the head"
console.log(newList.tail().value); // "This is the tail"
console.log(newList.at(2).value); // "two"
console.log(newList.contains("nine")); // false
console.log(newList.contains("three")); // true
console.log(newList.find("four")); //4

console.log(newList.toString()); // This is the head -> one -> two -> three -> four -> five -> six -> seven -> eight -> This is the tail -> null
console.log(newList.size()); //10



