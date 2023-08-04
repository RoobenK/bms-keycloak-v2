import { createContext, ChangeEvent } from 'react'

// Creating the context object and passing the default values.
const RegisterContext = createContext({
  FormValues: {
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    password: '',
  },
  onChange: (e: ChangeEvent<HTMLInputElement>) => {},
  handleChangePhoneNumber: (data: { phoneNumber: string }) => {},
})

export default RegisterContext
