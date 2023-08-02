// ejected using 'npx eject-keycloak-page'
import { useState, FormEvent, memo, ChangeEvent } from 'react'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { clsx } from 'keycloakify/tools/clsx'
import { useConstCallback } from 'keycloakify/tools/useConstCallback'
import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { getStatus, WARNING } from '../../utils/status'
import { Typography, Alert, FormControlLabel, Box, Link, Checkbox } from '@mui/material'
import { StyledInputBase, StyledPrimaryLoginButton } from '../../styles/BasicStyles'
import { SocialLoginButton } from '../components/common/SocialLoginButton'
import LoginLeftNode from "../components/Login/LoginLeftNode"
import Layout from 'login/components/common/Layout'

export default function Login(props: PageProps<Extract<KcContext, { pageId: 'login.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { social, realm, url, usernameEditDisabled, login, auth, registrationDisabled } = kcContext

  const { msg, msgStr } = i18n

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)

  const [values, setValues] = useState({
    username: '',
    password: '',
  })

  const onSubmit = useConstCallback((event: FormEvent<HTMLFormElement>) => {
    setIsLoginButtonDisabled(true)

    return true
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [showPassword, setShowPassword] = useState(false)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Template
      {...{ kcContext, i18n, doUseDefaultCss, classes }}
      displayInfo={social.displayInfo}
      displayWide={realm.password && social.providers !== undefined}
      headerNode={msg('doLogIn')}
    >
     <Layout i18n={i18n} title={<>{msg('loginAccountTitle')}</>}
        MessageNode={
          <>
          {!!kcContext.message && kcContext.message.type !== WARNING && !kcContext.isAppInitiatedAction && (
            <Box marginBottom={2}>
              <Alert severity={getStatus(kcContext.message.type)}>
                {kcContext.message.summary.replace('<br>', ' ')}
              </Alert>
            </Box>
          )}
        </>
        } LoginContent={<LoginLeftNode  i18n={i18n}/>}
        formContentNode={ <>
          <form action={url.loginAction} id='kc-form-login' onSubmit={onSubmit} method='post'>
            <div className='my-4'>
              <div className='flex flex-col'>
                <label htmlFor='username' className='text-lg text-label'>
                  {!realm.loginWithEmailAllowed
                    ? msg('username')
                    : !realm.registrationEmailAsUsername
                    ? msg('usernameOrEmail')
                    : msg('email')}
                </label>
                <StyledInputBase
                  id='username'
                  name='username'
                  defaultValue={login.username ?? ''}
                  onChange={onChange}
                  autoComplete='email'
                  fullWidth
                  margin='dense'
                  autoFocus
                  required
                />
              </div>
              <div className='mt-8 flex flex-col'>
                <label htmlFor='password' className='text-lg text-label'>
                  {/* @ts-ignore */}
                  {msg('password')}
                </label>
                <div className='relative'>
                  <StyledInputBase
                    id='password'
                    name='password'
                    defaultValue={values?.password ?? ''}
                    onChange={onChange}
                    fullWidth
                    margin='dense'
                    required
                    type={showPassword ? 'text' : 'password'}
                  />
                  <div className='absolute inset-y-0 right-0 mr-2 mt-1 flex items-center'>
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </div>
                </div>
              </div>
              <Box
                display='flex'
                className='font-poppins'
                justifyContent={realm.rememberMe && !usernameEditDisabled ? 'space-between' : 'end'}
                alignItems='center'
                marginTop={4}
              >
                {/* Remember Me */}
                {realm.rememberMe && !usernameEditDisabled && (
                  <div className='flex items-center'>
                    <Checkbox className=' text-geekBlue-6' id='rememberMe' name='rememberMe' color='primary' />
                    <label htmlFor='rememberMe' style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {msg('rememberMe')}
                    </label>
                  </div>
                )}

                {/* Forgot Password */}
                {realm.resetPasswordAllowed && (
                  <Box display='flex' justifyContent='center'>
                    <Link
                      className='font-poppins text-geekBlue-6 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2'
                      href={url.loginResetCredentialsUrl}
                      underline='none'
                    >
                      {msgStr('doForgotPassword')}
                    </Link>
                  </Box>
                )}
              </Box>
            </div>

            <StyledPrimaryLoginButton
              disabled={isLoginButtonDisabled}
              type='submit'
              fullWidth
              variant='contained'
              disableRipple
            >
              {msg('doLogIn')}
            </StyledPrimaryLoginButton>
          </form>
          {/* social logins */}
          <div className='flex flex-col gap-3'>
            {realm.password && social.providers && (
              <>
                {social.providers.map((provider) => (
                  <SocialLoginButton i18n={i18n} key={provider.providerId} provider={provider} />
                ))}
              </>
            )}
          </div>
        </>}
        layout='login'  tryAnotherWayNode={
          <div className='mt-8 flex flex-col items-center gap-2'>
            <Typography className='text-center font-poppins text-label' mr={1}>
              {/* @ts-ignore */}
              {msg('createAccount')}
            </Typography>
            <a
              href={url.registrationUrl}
              className='text-geekBlue-6 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2'
            >
              {/* @ts-ignore */}
              {msg('createNow')}
            </a>
          </div>
        }/>
    
    </Template>
  )
}
