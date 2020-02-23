function verify(input) {

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

  let loginStatus = ''
  let errorMsg = ``
  let verifiedAcct = users.filter(user => user.email === input.email && user.password === input.password)

  if (verifiedAcct.length > 0) {
    loginStatus = 'verified'
    return { loginStatus, verifiedAcct, errorMsg }
  }
  else {
    loginStatus = 'false'
    verifiedAcct = []
    errorMsg = `帳號或密碼錯誤!`
    return { loginStatus, verifiedAcct, errorMsg }
  }
}

// set verifyAccount function
module.exports = verify