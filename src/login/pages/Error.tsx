import type { PageProps } from 'keycloakify/login/pages/PageProps'
import { useGetClassName } from 'keycloakify/login/lib/useGetClassName'
import type { KcContext } from '../kcContext'
import type { I18n } from '../i18n'
import { StyledPrimaryLoginButton } from '../../styles/BasicStyles'
import Layout from 'login/components/common/Layout'

export default function Error(props: PageProps<Extract<KcContext, { pageId: 'error.ftl' }>, I18n>) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props

  const { getClassName } = useGetClassName({
    doUseDefaultCss,
    classes,
  })

  const { msg, msgStr } = i18n

  const { message, client } = kcContext

  return (
    <Template {...{ kcContext, i18n, doUseDefaultCss, classes }} headerNode={msg('emailForgotTitle')}>
      <Layout
        i18n={i18n}
        title={
          <div className='flex flex-col items-start gap-6'>
            <img
              src='https://www.boostmyshop.com/wp-content/uploads/2022/03/404-error-page-boostmyshop-2.svg'
              alt='error image'
              width={280}
              height={280}
            />

            <div className='-mt-4'>{msg('errorTitle')}</div>
          </div>
        }
        subtitle={message.summary}
        formContentNode={
          <div className='mt-8'>
              <StyledPrimaryLoginButton href={client.baseUrl} fullWidth variant='contained' disableRipple>
                {/* @ts-ignore */}
                {msg('backToApplication')}
              </StyledPrimaryLoginButton>
          </div>
        }
      />
    </Template>
  )
}
