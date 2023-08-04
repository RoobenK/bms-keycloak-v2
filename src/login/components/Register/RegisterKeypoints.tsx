const RegisterKeypoints = ({ i18n }) => {
  const { msg, currentLanguageTag } = i18n

  const isEnglishLangSelected = currentLanguageTag === 'en'

  const keyPoints = [
    {
      id: 0,
      // @ts-ignore
      name: msg('registerKeypoint1'),
    },
    {
      id: 1,
      // @ts-ignore
      name: msg('registerKeypoint2'),
    },
    {
      id: 2,
      // @ts-ignore
      name: msg('registerKeypoint3'),
    },
  ]

  return (
    <div className='relative col-span-4 mt-16 hidden min-h-screen items-center justify-start bg-[#030723] p-4 font-arial text-white md:p-8 lg:col-span-4 lg:mt-0 lg:flex lg:p-8  xl:p-8 2xl:p-16'>
      <div className='z-10 mt-36 h-full max-w-5xl flex-wrap'>
        <img
          src='https://www.boostmyshop.com/wp-content/uploads/2023/04/mypricing-repricing-tool-ecommerce-1.svg'
          alt='mypricing logo'
          className='mb-4 w-[35%]'
        />
        <h2
          className={`my-8 text-2xl font-semibold md:text-5xl xl:my-6 2xl:my-8 ${
            isEnglishLangSelected ? 'max-w-2xl' : ''
          }`}
        >
          {/* @ts-ignore */}
          {msg('registerKeypointsTitle')}
        </h2>
        <ul className='flex flex-col gap-8'>
          {keyPoints?.map(({ name, id }) => {
            return (
              <li key={id}>
                <span className='inline-flex items-start gap-3 p-2 pr-4'>
                  <svg
                    className='h-8 w-8 flex-shrink-0 rounded-full text-green-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                  </svg>
                  <span className='text-md font-poppins text-white xl:text-sm 2xl:text-lg'>{name}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      <picture className='absolute left-0 bottom-0 h-full w-full object-cover'>
        <img
          className='absolute top-0 w-full object-contain'
          src='https://www.boostmyshop.com/media/sso/sso-texture.png'
          alt=''
        />
        <img
          className='absolute bottom-0 left-8 -translate-x-1/2 -scale-x-100 transform'
          src='https://www.boostmyshop.com/media/sso/cheerful-business-woman-make-winner-gesture.svg'
          alt=''
        />
      </picture>
    </div>
  )
}

export default RegisterKeypoints
