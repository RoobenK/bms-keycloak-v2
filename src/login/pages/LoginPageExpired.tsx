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

export default function LoginPageExpired(
  props: PageProps<Extract<KcContext, { pageId: 'login-page-expired.ftl' }>, I18n>,
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
            {msg('pageExpiredTitle')}
          </>
        }
        subtitle={
          <>
            {/* @ts-ignore */}
            {msg('pageExpiredSubTitle')}
          </>
        }
        formContentNode={
          <div className='mt-16 flex flex-col gap-8 md:mt-24 md:flex-row'>
            <a
              href={url.loginRestartFlowUrl}
              className='flex flex-col items-center gap-4 rounded-lg border border-grey-3 p-6 text-xl shadow hover:border-grey-4 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2 active:bg-grey-2 md:p-12'
            >
              <svg className='h-10 w-10' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                />
              </svg>
              <span className='text-center text-grey-9'>{msg('pageExpiredMsg1')}</span>
            </a>
            <a
              href={url.loginUrl}
              className='flex flex-col items-center gap-4 rounded-lg border border-grey-3 p-12 text-xl shadow hover:border-grey-4 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2 active:bg-grey-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z'
                />
              </svg>
              <span className='max-w-[180px] text-center leading-8 text-grey-9'> {msg('pageExpiredMsg2')}</span>
            </a>
          </div>
        }
      />
    </Template>
  )
}
