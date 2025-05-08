import { defineEventHandler, readBody, setCookie } from 'h3'
import * as z from 'zod'
import { loginService } from '../services/auth.service'

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

    const result = await loginService(body.username, body.password)

    if (!result) {
      throw new Error('Invalid credentials')
    }

    setCookie(event, 'user', result.role, {
      httpOnly: false,
      maxAge: 60 * 60 * 24,
      path: '/',
    })

    return {
      status: 'success',
      user: result.role,
      message: 'Login successful',
    }
  } catch (error) {
    return {
      status: 'error',
      message: error.message || 'An error occurred',
    }
  }
})