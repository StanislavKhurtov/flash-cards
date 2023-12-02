import { useController, useForm } from 'react-hook-form'

import { Checkbox, TextField } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, 'Too short password bitch '),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { onChange, value },
  } = useController({
    control,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <TextField
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <Checkbox checked={value} label={'remember me'} onChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
