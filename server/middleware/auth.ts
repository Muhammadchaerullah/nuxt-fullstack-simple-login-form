import { defineEventHandler, getCookie } from 'h3'

export default defineEventHandler(async (event) => {
  const user = getCookie(event, 'user')
  const path = event.req.url || ''

  if (!user && !path.includes('/login')) {
    return sendRedirect(event, '/login')
  }

  if (user === 'employee' && path.includes('/admin')) {
    return sendRedirect(event, '/home')
  }
})
