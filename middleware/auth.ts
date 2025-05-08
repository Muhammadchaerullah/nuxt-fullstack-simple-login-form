export default defineNuxtRouteMiddleware((to) => {
    const user = useCookie('user').value
    if (!user) {
      return navigateTo('/login')
    }

    if (to.path === '/admin' && user !== 'admin') {
      return navigateTo('/home')
    }
  })
  