let data = [
  {
    name: "Ashish",
    age: "22",
  },
  {
    name: "Binit",
    age: "60",
  },
  {
    name: "Candace",
    age: "100",
  },
  {
    name: "Denish",
    age: "29",
  },

  {
    name: "Eren",
    age: "42",
  },
  {
    name: "Fidel",
    age: "2",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return "<div>" + item.name + "(" + item.age + ")" + "</div>";
});

info.innerHTML = details.join("\n");
