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
import LoginLeftNode from '../components/Login/LoginLeftNode'
import Layout from 'login/components/common/Layout'

export default function LoginResetPassword(
  props: PageProps<Extract<KcContext, { pageId: 'login-reset-password.ftl' }>, I18n>,
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false)
  const { msg, msgStr } = i18n

  const { url, auth } = kcContext

  return (
    <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} headerNode={msg('emailForgotTitle')}>
      <Layout
        i18n={i18n}
        title={
          <>
            {/* @ts-ignore */}
            {msg('resetPasswordTitle')}
          </>
        }
        subtitle={msg('emailInstruction')}
        MessageNode={
          <>
            {!!kcContext.message && kcContext.message.type !== WARNING && !kcContext.isAppInitiatedAction && (
              <Box marginBottom={3}>
                <Alert severity={getStatus(kcContext.message.type)}>
                  {kcContext.message.summary.replace('<br>', ' ')}
                </Alert>
              </Box>
            )}
          </>
        }
        formContentNode={
          <form id='kc-form-login' action={url.loginAction} method='post'>
            {/* Username or E-mail */}
            <div className='mt-24 mb-12 flex flex-col'>
              <label htmlFor='username' className='text-lg text-label'>
                {msg('email')}
              </label>

              <StyledInputBase
                id='username'
                name='username'
                autoComplete='email'
                type='email'
                fullWidth
                autoFocus
                required
                defaultValue={auth !== undefined && auth.showUsername ? auth.attemptedUsername : undefined}
              />
            </div>

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
                {msg('resetPasswordTitle')}
              </StyledPrimaryLoginButton>
            </div>
          </form>
        }
      />
    </Template>
  )
}
