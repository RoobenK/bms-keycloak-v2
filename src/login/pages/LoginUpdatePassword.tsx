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
import PasswordStrengthBar from 'react-password-strength-bar'


export default function LoginUpdatePassword(props: PageProps<Extract<KcContext, { pageId: 'login-update-password.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { msg, msgStr } = i18n

  const { url } = kcContext

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)

  const onSubmit = useConstCallback((event: FormEvent<HTMLFormElement>) => {
    setIsLoginButtonDisabled(true)
    return true
  })

  const [values, setValues] = useState({
    passwordNew: '',
    passwordConfirm: '',
  })
  const [password, setPassword] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


   return(
  <Template
  {...{ kcContext, i18n, doUseDefaultCss, classes }}
  headerNode={msg('emailForgotTitle')}
>
 <Layout
 i18n={i18n}
 title={<>{msg('updatePasswordTitle')}</>}
          MessageNode={
            <Box marginBottom={3}>
              {!!kcContext.message && kcContext.message.type !== WARNING && !kcContext.isAppInitiatedAction && (
                <Alert severity={getStatus(kcContext.message.type)}>
                  {kcContext.message.summary.replace('<br>', ' ')}
                </Alert>
              )}
            </Box>
          }
          formContentNode={
            <>
              <form id='kc-passwd-update-form' action={url.loginAction} onSubmit={onSubmit} method='post'>
                {/* Username or E-mail */}
                <div className='mt-16 flex flex-col'>
                  <label htmlFor='password-new' className='text-lg text-label'>
                    {/* @ts-ignore */}
                    {msg('newPassword')}
                  </label>

                  <div className='relative'>
                    <StyledInputBase
                      id='password-new'
                      name='password-new'
                      defaultValue={values?.passwordNew ?? ''}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        onChange(event)
                        setPassword(event.target.value)
                      }}
                      fullWidth
                      margin='dense'
                      required
                      type='password'
                    />
                  </div>
                </div>

                <div className='mt-8 mb-8 flex flex-col'>
                  <label htmlFor='password-confirm' className='text-lg text-label'>
                    {/* @ts-ignore */}
                    {msg('confirmPassword')}
                  </label>

                  <div className='relative'>
                    <StyledInputBase
                      id='password-confirm'
                      name='password-confirm'
                      defaultValue={values?.passwordConfirm ?? ''}
                      onChange={onChange}
                      fullWidth
                      margin='dense'
                      required
                      type='password'
                    />
                  </div>
                </div>

                <PasswordStrengthBar
                  className='pass_strength mt-2'
                  scoreWordClassName='text-label mt-2'
                  password={password}
                  // @ts-ignore
                  scoreWords={[msg('tooShort'), msg('weak'), msg('okay'), msg('good'), msg('strong')]}
                  // @ts-ignore
                  shortScoreWord={msg('tooShort')}
                />

                <div className='flex justify-between gap-8'>
                  <a
                    href={url.loginUrl}
                    className='my-4 mr-16 flex flex-shrink-0 items-center rounded-lg border border-grey-3 px-6 text-grey-9 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2 active:text-geekBlue-6'
                  >
                    {/* @ts-ignore */}
                    {msg('BacktoLogin')}
                  </a>
                  <StyledPrimaryLoginButton
                    disabled={isLoginButtonDisabled}
                    type='submit'
                    fullWidth
                    variant='contained'
                    disableRipple
                  >
                    {/* @ts-ignore */}
                    {msg('updatePasswordTitle')}
                  </StyledPrimaryLoginButton>
                </div>
              </form>
            </>
          }
    />
</Template>)
}