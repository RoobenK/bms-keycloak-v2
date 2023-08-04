// ejected using 'npx eject-keycloak-page'
import { useState, FormEvent,useEffect, memo, ChangeEvent } from 'react'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { clsx } from 'keycloakify/tools/clsx'
import { useConstCallback } from 'keycloakify/tools/useConstCallback'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { getStatus, WARNING } from '../../utils/status'
import { getGeoLocation } from '../../utils/GetGeoLocation'

import { Typography, Alert, FormControlLabel, Box, Link, Checkbox } from '@mui/material'
import { StyledInputBase, StyledPrimaryLoginButton } from '../../styles/BasicStyles'
import { SocialLoginButton } from '../components/common/SocialLoginButton'
import LoginLeftNode from "../components/Login/LoginLeftNode"
import Layout from 'login/components/common/Layout'
import PasswordStrengthBar from 'react-password-strength-bar'


export default function LoginUpdateProfile(props: PageProps<Extract<KcContext, { pageId: 'login-update-profile.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { msg, msgStr } = i18n

  const [geoCoutry, setGeoCountry] = useState('')

  const { url, user } = kcContext

  useEffect(() => {
    fetchGeoLocation()
  }, [])

  const fetchGeoLocation = async () => {
    const country = await getGeoLocation()
    setGeoCountry(country)
  }


   return(
  <Template
  {...{ kcContext, i18n, doUseDefaultCss, classes }}
  headerNode={msg('emailForgotTitle')}
>
 <Layout
 i18n={i18n}
 title={<>{msg('loginProfileTitle')}</>}
 formContentNode={
   <>
     <form id='kc-update-profile-form' action={url.loginAction} method='post'>
       <div className='mt-16 mb-4 flex flex-col gap-8'>
         <div className='flex items-center gap-8'>
           {/* Email */}
           <div className='hidden w-full flex-col'>
             <label htmlFor='email' className='w-full text-lg text-label'>
               {/* @ts-ignore */}
               {msg('email')}
             </label>
             <StyledInputBase
               id='email'
               name='email'
               type='email'
               defaultValue={user.email || ''}
               fullWidth
               margin='dense'
               required
             />
           </div>

           {/* First Name */}
           <div className='flex w-full flex-col'>
             <label htmlFor='firstName' className='w-full text-lg text-label'>
               {/* @ts-ignore */}
               {msg('registerFirstName')}
             </label>
             <StyledInputBase id='firstName' name='firstName' fullWidth margin='dense' required type='text' />
           </div>

           {/* Last Name */}
           <div className='flex w-full flex-col'>
             <label htmlFor='lastName' className='w-full text-lg text-label'>
               {/* @ts-ignore */}
               {msg('registerLastName')}
             </label>
             <StyledInputBase id='lastName' name='lastName' fullWidth margin='dense' required type='text' />
           </div>
         </div>

         <div className='flex flex-col'>
           <label htmlFor='phoneNumber' className='text-lg text-label'>
             {/* @ts-ignore */}
             {msg('registerPhoneNumber')}
           </label>
           <PhoneInput
             inputProps={{
               required: true,
               name: 'user.attributes.phone',
               id: 'phone',
             }}
             enableSearch
             disableSearchIcon
             preferredCountries={['fr', 'it', 'es', 'us', 'uk']}
             country={geoCoutry.toLowerCase() || 'fr'}
           />
         </div>

         <div className='flex justify-between gap-8'>
           <button
             type='submit'
             name='cancel-aia'
             value='true'
             className='my-4 mr-16 flex flex-shrink-0 items-center rounded-lg border border-grey-3 px-6 text-grey-9 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2 active:text-geekBlue-6'
           >
             {/* @ts-ignore */}
             {msg('doCancel')}
           </button>
           <StyledPrimaryLoginButton type='submit' fullWidth variant='contained' disableRipple>
             {/* @ts-ignore */}
             {msg('doSubmit')}
           </StyledPrimaryLoginButton>
         </div>
       </div>
     </form>
   </>
 }
    />
</Template>)
}