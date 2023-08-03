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

export default function LoginVerifyEmail(props: PageProps<Extract<KcContext, { pageId: 'login-verify-email.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { msg, msgStr } = i18n

  const { url } = kcContext

  const socialLinks = [
    {
      name: 'Gmail',
      link: 'https://mail.google.com/mail/u/0/#all',
      imgSrc: 'https://static.cdnlogo.com/logos/g/93/gmail.svg',
    },
    {
      name: 'Outlook',
      link: 'https://outlook.live.com/mail/allitems',
      imgSrc: 'https://static.cdnlogo.com/logos/m/25/microsoft-outlook.svg',
    },
  ]


   return(
  <Template
  {...{ kcContext, i18n, doUseDefaultCss, classes }}
  headerNode={msg('emailForgotTitle')}
>
 <Layout
 i18n={i18n}
 title={
    <span className='mt-12 mb-2 flex flex-col items-center justify-center gap-8 text-center'>
      <picture>
        <img
          src='https://ik.imagekit.io/4aodhblzt6h/email-template_CXlZ3-2Na.svg?updatedAt=1681210713571'
          alt='Email Confirmation'
          className='h-60 w-60'
        />
      </picture>
      {/* @ts-ignore */}
      {msg('welcome')}
    </span>
  }
  subtitle={
    <p className='text-center'>
      {/* @ts-ignore */}
      {msg('verifyEmailInstruction')}
    </p>
  }
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
    <div className='flex flex-col items-center justify-center'>
      <div className='my-12 flex w-full flex-col gap-4'>
        {socialLinks.map(({ imgSrc, link, name }) => (
          <a
            href={link}
            target='_blank'
            className='flex w-full items-center justify-center gap-1 rounded-md border border-grey-3 p-1 hover:bg-grey-2 active:shadow'
          >
            <img className='w-14' src={imgSrc} alt={`${name}-logo`} />
            {name}
          </a>
        ))}
      </div>
      <div className='flex flex-col items-center gap-1'>
        <span className='mt-8 text-center text-lg'>{msg('emailVerifyInstruction2')}</span>
        <a
          href={url.loginAction}
          className='p-1 font-medium text-geekBlue-6 focus:ring-2 focus:ring-geekBlue-6 focus:ring-offset-2'
        >
          &nbsp; {msg('doClickHere')}
        </a>
      </div>
    </div>
  }
    />
</Template>)
}