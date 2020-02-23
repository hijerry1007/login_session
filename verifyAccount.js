function verify(input) {

  console.log(input)
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  // show feedback
  let feedback = ''

  // verify email and password
  for (let i = 0; i < users.length; i++) {
    if (input.email === users[i].email && input.password === users[i].password) {
      feedback += `Welcome Back! ${users[i].firstName}!`
    }
    else {
      continue
    }
  }

  if (feedback.length === 0) {
    return `Username/Password 錯誤`
  }
  else {
    return feedback
  }
  console.log('verify!')
}

// set verifyAccount function
module.exports = verify