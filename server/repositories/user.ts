export async function getUser(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      return true
    } else if (username === 'employee' && password === 'employee') {
      return true
    } else {
      return false
    }
  }
  