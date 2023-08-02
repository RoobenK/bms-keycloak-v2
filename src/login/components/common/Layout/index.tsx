import type { ReactNode } from 'react'
import Header from '../Header'
import RegisterKeypoints from '../../Register/RegisterKeypoints'

export type LayoutProps = {
  title?: ReactNode | string
  subtitle?: ReactNode | string
  MessageNode?: ReactNode
  formContentNode: ReactNode
  LoginContent?: ReactNode
  tryAnotherWayNode?: ReactNode
  layout?: 'login' | 'register'
  i18n:any
}

const Layout = ({
  title,
  subtitle,
  MessageNode,
  formContentNode,
  LoginContent,
  tryAnotherWayNode,
  layout = 'register',
  i18n
}: LayoutProps) => {
  const { msg } = i18n

  switch (layout) {
    case 'login':
      return (
        <div className='grid min-h-screen grid-cols-12'>
          <div className='relative col-span-12 flex h-full flex-col items-center justify-center bg-grey-2 bg-[url("https://ik.imagekit.io/4aodhblzt6h/gray-abstract-bg_uExjJhsNns.svg?updatedAt=1681135513569")] bg-cover bg-no-repeat p-4 lg:col-span-6 lg:p-8'>
            <div className='md:absolute md:right-8 md:top-8'>
              <Header i18n={i18n}/>
            </div>

            <div className='z-10 mx-auto mt-8 flex w-full max-w-xl flex-col justify-center rounded-lg border border-grey-3 bg-white p-8 font-poppins md:mt-24'>
              {MessageNode}
              <h1 className='mt-8 text-3xl font-semibold text-grey-9 lg:mt-0'>{title}</h1>
              <p className='mt-4 text-lg text-grey-9'>{subtitle}</p>
              {formContentNode}
              {tryAnotherWayNode}
            </div>
            <div className='mt-8 flex w-full items-center justify-center'>
              <a
                href='https://sso.boostmyshop.com/auth/realms/boostmyshop/login-actions/authenticate?client_id=boostmyshop-app'
                className='hidden items-end md:flex md:flex-col'
              >
                {/* @ts-ignore */}
                <span className='text-label'>{msg('poweredBy')}</span>
                <picture>
                  <img
                    src='https://www.boostmyshop.com/media/sso/boostmyshop-logo_fyxl4o.svg'
                    alt='logo of boostmyshop'
                    width={160}
                  />
                </picture>
              </a>
            </div>
          </div>
          {LoginContent}
        </div>
      )

    case 'register':
      return (
        <div className='grid min-h-screen grid-cols-12'>
          <div className='relative col-span-12 flex h-full flex-col bg-grey-2 bg-[url("https://ik.imagekit.io/4aodhblzt6h/gray-abstract-bg_uExjJhsNns.svg?updatedAt=1681135513569")] bg-cover bg-no-repeat p-4 lg:col-span-8 lg:p-8'>
            <Header i18n={i18n}/>

            <div className='z-10 mx-auto mt-8 flex w-full max-w-xl flex-col justify-center rounded-lg border border-grey-3 bg-white p-8 font-poppins'>
              {MessageNode}

              <h1 className='mt-8 text-3xl font-semibold text-grey-9 lg:mt-0'>{title}</h1>
              <p className='mt-4 text-lg text-grey-9'>{subtitle}</p>
              {formContentNode}
            </div>
            <div className='mt-8 flex w-full items-center justify-center'>
              <a
                href='https://sso.boostmyshop.com/auth/realms/boostmyshop/login-actions/authenticate?client_id=boostmyshop-app'
                className='hidden items-end md:flex md:flex-col'
              >
                {/* @ts-ignore */}
                <span className='text-label'>{msg('poweredBy')}</span>
                <picture>
                  <img
                    src='https://www.boostmyshop.com/media/sso/boostmyshop-logo_fyxl4o.svg'
                    alt='logo of boostmyshop'
                    width={160}
                  />
                </picture>
              </a>
            </div>
          </div>
          <RegisterKeypoints i18n={i18n} />
        </div>
      )
  }
}

export default Layout
