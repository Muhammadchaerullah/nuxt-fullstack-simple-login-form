# Instruction
Create simple login form with nuxt framework that will be validate using yup on client side and zod on server side.
After login, application will be redirect into landing page (home page)
- If user is admin then he can access admin page, use server middleware to handle pages permission
- If user is employee then he cannot access admin page

# Code specification:
1. Implement nuxt framework (https://nuxt.com/)
2. Write your code in typescript (https://www.typescriptlang.org/)
3. Implement authentication with H3 Session (https://h3.unjs.io/)
4. Implement tailwind (https://tailwindcss.com/)
5. Implement headless ui with NuxtUI (https://ui.nuxt.com/)
6. Validation for client side (https://github.com/jquense/yup)
7. Validation for server side (https://zod.dev/ or https://github.com/colinhacks/zod)
8. Show your work on stackblitz https://stackblitz.com/

# Expected Result:
1. When application started, show login page
2. When user not yet login, user cannot access /home, if user try to access /home, redirect to /login
3. On login page, when user input username: admin and password admin, then redirect to /home
4. Admin can access /admin page from /home
5. On login page, when user input username: employee and password employee, then redirect to /home
6. Employee cannot access /admin page, handle it with server middleware

this my first test from another company. i will passed it hihihi.

