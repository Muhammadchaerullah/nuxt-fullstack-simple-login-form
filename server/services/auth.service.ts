import { getUser } from '../repositories/user'

export async function loginService(username: string, password: string) {
  const isValid = await getUser(username, password)
  if (!isValid) return null

  const role = username === 'admin' ? 'admin' : 'employee'
  return {
    username,
    role,
  }
}
