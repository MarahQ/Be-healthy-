var username = prompt("What is your name?");
alert(username + 'welcome to the best place for your health')
var weight = prompt("enter weight in Kg")
if (weight <= 45) {
  alert('you need to gain weight')
}
else if (weight <= 75) {
  alert('your healthy')
}
else alert('you need to lose weight')
var age = prompt("your age please (above 18 only)")
while (age < 18) {
  age = prompt("please enter the right age")
}

var favSport = prompt("what is your favorit sport KickBoxing or Running?")

if (favSport === "Running") {
  var times = Number (prompt("How many times do you exercise in a week?"))
  for (var i = 0; i < times; i++) {
    document.write("<div>" + "<h3>" + favSport + "</h3>" + "<img src='https://image.shutterstock.com/image-photo/young-woman-runner-running-on-260nw-359568020.jpg'alt='Running'" + "</div>")
  }
}
else if (favSport ==="KickBoxing") {
  var times = prompt("How many times do you exercise in a week?")


  for (var i = 0; i <Number(times); i++) {
    document.write("<div>" + "<h3>" + favSport + "</h3>" + "<img src='https://image.shutterstock.com/image-photo/asian-girl-kick-sand-bag-600w-1524514220.jpg'alt='KickBoxing'" + "</div>")
  }
}