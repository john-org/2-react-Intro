// Destructuring arrays and objects

const nums = [1, 2, 3, 4, 5];

const [a, b, ...others] = nums;
console.log(a, b, others);
console.log(nums);

const user = {
  username: "ddeverell",
  firstName: "Daniel",
  lastName: "Deverell",
  fullName: "D D",
};
const { username: uname, firstName } = user;
console.log(uname, firstName);

const { fullName = "MISSING" } = user;
console.log(fullName);

const { username, ...name } = user;
console.log(name);
console.log(user);

/// multi-level destructuring

const user2 = {
  username: "ddeverell",
  firstName: "Daniel",
  lastName: "Deverell",
  posts: [
    { id: 1, title: "Best Post Ever" },
    { id: 2, title: "Second Post Ever" },
  ],
};

const {
  posts: [{ title }, { title: t2 }],
} = user2;

console.log(title);
console.log(t2);
// console.log(posts);

// common React usage:
let props = { initialCount: 0 };

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
}
