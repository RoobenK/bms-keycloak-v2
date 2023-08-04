export type ProviderProps = {
  loginUrl: string
  alias?: string
  providerId?: string
  displayName?: string
}

export const SocialLoginButton = ({ provider, i18n }: { provider: ProviderProps; i18n: any }) => {
  const { msg } = i18n

  const { loginUrl, alias } = provider

  switch (alias) {
    case 'google':
      return (
        <div className='flex flex-col items-center justify-center'>
          <span className='mb-3 w-full text-center text-grey-6'>
            {/* @ts-ignore */}
            {msg('or')}
          </span>

          <button
            onClick={() => (window.location.href = loginUrl)}
            className='flex w-full items-center justify-center gap-4 rounded-lg border border-grey-3 bg-white p-4 text-label shadow-sm transition-shadow ease-in-out hover:shadow active:shadow-md '
          >
            <picture>
              <img
                className='ml-4 w-6'
                src='https://www.boostmyshop.com/media/sso/google_logo.webp'
                alt='google logo'
              />
            </picture>
            {/* @ts-ignore */}
            {msg('signInWithGoogle')}
          </button>
        </div>
      )

    case 'mirakl':
      return (
        <div className='flex flex-col items-center justify-center'>
          <span className='mb-3 w-full text-center text-grey-6'>
            {/* @ts-ignore */}
            {msg('or')}
          </span>

          <button
            onClick={() => (window.location.href = loginUrl)}
            className='flex h-[49.59px] w-full items-center justify-center gap-4 rounded-lg border border-grey-3 bg-white p-4 text-label shadow transition-shadow ease-in-out hover:shadow-sm active:shadow-md'
          >
            <picture>
              <img
                className='h-6 w-6 overflow-hidden rounded-full'
                src='https://www.boostmyshop.com/media/sso/darty_logo.webp'
                alt='darty logo'
              />
            </picture>
            {/* @ts-ignore */}
            {msg('signInWithDarty')}
          </button>
        </div>
      )

    default:
      return null
  }
}
