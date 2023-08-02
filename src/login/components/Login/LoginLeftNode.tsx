const LoginLeftNode = ({i18n}) => {

  const {msg, currentLanguageTag} = i18n

  const isEnglishLangSelected = currentLanguageTag === 'en'

  const keyPoints = [
    {
      id: 0,
      // @ts-ignore
      hightlighted: msg('loginTitleHightlighted1'),
      // @ts-ignore
      normal: msg('loginTitleNormal1'),
    },
    {
      id: 1,
      // @ts-ignore
      hightlighted: msg('loginTitleHightlighted2'),
      // @ts-ignore
      normal: msg('loginTitleNormal2'),
    },
    {
      id: 2,
      // @ts-ignore
      hightlighted: msg('loginTitleHightlighted3'),
      // @ts-ignore
      normal: msg('loginTitleNormal3'),
    },
  ]

  return (
    <div className='relative col-span-4 mt-16 hidden min-h-screen items-center justify-center bg-[#030723] p-4 font-arial text-white md:p-8 lg:col-span-6 lg:mt-0 lg:flex lg:p-8  xl:p-8 2xl:p-16'>
      <div className='z-10 mt-36 flex h-full w-full flex-col flex-wrap items-start justify-start gap-2'>
        <img
          src='https://www.boostmyshop.com/wp-content/uploads/2023/04/mypricing-repricing-tool-ecommerce-1.svg'
          alt='mypricing logo'
          className='mb-4 w-[35%]'
        />
        <ul className='mt-24 flex w-full flex-col gap-4'>
          {keyPoints?.map(({ hightlighted, normal, id }) => {
            return (
              <h2 key={id} className='max-w-[80%]'>
                <span className='font-arial text-4xl text-grey-3 lg:text-5xl'>
                  <span className='font-semibold text-white'>{hightlighted}</span>
                  &nbsp;
                  {normal}
                </span>
              </h2>
            )
          })}
        </ul>
      </div>
      <picture className='absolute left-0 bottom-0 h-full w-full object-cover'>
        <img
          className='absolute bottom-0 w-full object-contain'
          src='https://www.boostmyshop.com/media/sso/sso-texture.png'
          alt=''
        />
        <img
          className='absolute bottom-0 right-8 h-[50%] transform'
          src='https://www.boostmyshop.com/media/sso/cheerful-business-woman-make-winner-gesture.svg'
          alt=''
        />
      </picture>
    </div>
  )
}

export default LoginLeftNode
