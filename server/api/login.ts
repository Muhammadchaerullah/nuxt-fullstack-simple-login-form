import { defineEventHandler, readBody, setCookie } from 'h3'
import * as z from 'zod'

const ZodSchema = z.object({
  username: z
    .string({
      required_error: "Username is required"
    })
    .min(4, { message: "Invalid username" }),
  password: z
    .string({
      required_error: "Password is required"
    })
    .min(4, { message: "Password must be at least 4 characters" })
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  try {
    ZodSchema.parse(body)

    if (body.username === 'admin' && body.password === 'admin') {
      setCookie(event, 'user', 'admin', { 
        httpOnly: false,
        maxAge: 60 * 60 * 24,
        path: '/',
      })
      return { status: 'success', user: 'admin', message: 'Login successful' }
    } else if (body.username === 'employee' && body.password === 'employee') {
      setCookie(event, 'user', 'employee', { 
        httpOnly: false,
        maxAge: 60 * 60 * 24,
        path: '/',
      })
      return { status: 'success', user: 'employee', message: 'Login successful' }
    } else {
      throw new Error('Invalid credentials')
    }
  } catch (error) {
    return { status: 'error', message: error.message || 'An error occurred' }
  }
})
