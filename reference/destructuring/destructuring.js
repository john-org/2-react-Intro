// Destructuring arrays and objects

const nums = [1, 2, 3, 4, 5];

// const [a, b] = nums;
// is the same as:
// const a = nums[0]
// const b = nums[1]

// const [a, b, ...others] = nums;
// console.log(a, b, others);
// console.log(nums);

const user = {
  username: "ddeverell",
  firstName: "Daniel",
  lastName: "Deverell",
  fullName: "D D",
};

// renaming a destructured variable
const { username: uname, firstName } = user;
console.log(uname, firstName);

// default name
const { fullName = "MISSING" } = user;
console.log(fullName);

// rest operator
const { username, ...name } = user;
console.log(name);
console.log(username);

// multi-level destructuring

const user2 = {
  username: "ddeverell",
  firstName: "Daniel",
  lastName: "Deverell",
  posts: [
    { id: 1, title: "Best Post Ever" },
    { id: 2, title: "Second Post Ever" },
  ],
};

// rename the second title since we already have a title variable
const {
  posts: [{ title }, { title: t2 }],
} = user2;

console.log(title);
console.log(t2);

// common React usage:
let props = { initialCount: 0 };

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
}
