// Do not edit below this line
const user = {
  name: 'Jane',
  level: 'admin'
}

// TODO: Make city an object with a name key set to 'London' and a population key set to 9000000
const city = {
  name: 'London',
  population: 9000000
}

// TODO: Set name equal to the name key of the user object
const name = user.name

// TODO: Update the level key on the user object to 'view-only'
user.level = 'view-only'

// TODO: Add a email key of with the value 'jane@gmail.com' to the user object
user.email = 'jane@gmail.com'

// Do not edit this exported object
module.exports = {
  a: city,
  b: name,
  c: user
}
