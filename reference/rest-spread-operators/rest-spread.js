// Rest & Spread operators
// 2 names for three dots that look the same

function printArgs(first, second, ...rest) {
  console.log(first, second, rest);
}

printArgs(1, 2, 3, 4);

const user = {
  username: "ddeverel",
  firstName: "Daniel",
  lastName: "Deverell",
};
console.log({
  ...user,
  // adding a new property
  fullName: `${user.firstName} ${user.lastName}`,
});
