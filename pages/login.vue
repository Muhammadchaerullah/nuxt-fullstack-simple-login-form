<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import { useRouter } from 'vue-router'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = object({
  username: string().min(4, 'Must be at least 4 characters').required('Username is required'),
  password: string().min(4, 'Must be at least 4 characters').required('Password is required')
})

type Schema = InferType<typeof schema>


const username = ref('')
const password = ref('')

const toast = useToast()
const router = useRouter()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    // Sending data to backend API
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event.data)
    })
    
    if (!response.ok) {
      throw new Error('Failed to login, please try again')
    }

    const data = await response.json()
    
    if (data.status === 'success') {
      toast.add({ title: 'Login Successful', description: 'Welcome!', color: 'success' })
      router.push('/home')
    } else {
      toast.add({ title: 'Login Failed', description: data.message || 'Invalid credentials', color: 'error' })
    }
  } catch (error) {
    toast.add({ title: 'Error', description: error.message, color: 'error' })
    console.error(error)
  }
}

onMounted(() => {
  const userCookie = useCookie('user')
  if (userCookie.value) {
    userCookie.value = null
  }
})

</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <UForm :schema="schema" :state="{ username, password }" class="space-y-4" @submit="onSubmit">
        <UFormField label="Username" name="username">
          <UInput v-model="username" class="w-full pt-2" style="padding: 12px;"/>
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput v-model="password" type="password" class="w-full pt-2" style="padding: 12px;"/>
        </UFormField>
        <div class="pt-2">
          <UButton type="submit" class="w-full py-3 text-center flex justify-center cursor-pointer text-white font-bold">
            Submit
          </UButton>
        </div>
      </UForm>
    </div>
  </div>
</template>
