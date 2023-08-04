import { createUseI18n } from 'keycloakify/login'

export const { useI18n } = createUseI18n({
  // NOTE: Here you can override the default i18n messages
  // or define new ones that, for example, you would have
  // defined in the Keycloak admin UI for UserProfile
  // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
  en: {
  // login page en
  loginAccountTitle: 'Welcome back',
  createAccount: 'You don&#39;t have any Boostmyshop account yet?',
  createNow: 'Create now',
  loginKeypointsTitle1: 'Be master of marketplaces.',
  loginKeypointsTitle2: 'Grow faster your e-business.',
  loginKeypointsTitle3: 'Sell smarter online.',
  loginKeypoint1: 'Competitors price monitoring',
  loginKeypoint2: 'Catalog health indicator',
  loginKeypoint3: 'Buy Box Predictor',
  loginKeypoint4: 'Dynamic pricing',
  loginKeypoint5: 'Smart dashboard',
  loginTitleHightlighted1: 'Be master',
  loginTitleNormal1: 'of marketplace',
  loginTitleHightlighted2: 'Grow faster',
  loginTitleNormal2: 'your e-business',
  loginTitleHightlighted3: 'Sell smarter',
  loginTitleNormal3: 'online',

  // register page1 en
  registerAccountTitle: 'Get Started',
  registerAccountSubTitle: 'Sign up for your free trial',
  registerLetStart: 'Continue',

  // register page2 en
  registerPage2Title: 'Sign up for your free trial',
  registerPage2SubTitle: 'Complete your profile',
  registerFirstName: 'First name',
  registerLastName: 'Last name',
  registerCompany: 'Company',
  registerPhoneNumber: 'Phone number',
  registerPassword: 'Create a password',
  registerGoBack: 'Go back',
  registerCreateAccount: 'Get started',
  registerTerms1: 'By ticking you agree to our ',
  registerTerms2: 'Terms of Service ',
  registerTerms3: 'and ',
  registerTerms4: 'Privacy Policy.',
  registerTerms5:
    'Your data will be processed in order to create your user account. If you don’t want to receive our news and other useful information, please contact our customer service.',
  registerKeypointsTitle: 'Boost your sales performance in all marketplaces',
  registerKeypoint1: 'Try Boostmyshop myPricing free for 15 days',
  registerKeypoint2:
    'Connect to your marketplaces, import your product catalogue and analyze your marketplace performance in one click',
  registerKeypoint3: 'Expert customer service',

  // page expired en
  pageExpiredTitle: 'Page has Expired',
  pageExpiredSubTitle: 'Please choose an action to proceed',

  //reset password en
  resetPasswordTitle: 'Reset Password',

  // update password en
  updatePasswordTitle: 'Update Password',

  // keypoints en
  keypointsHeader: 'Grow your sales on marketplaces with',
  keypointsText1: 'Competitors price monitoring',
  keypointsText2: 'Catalog Health indicator',
  keypointsText3: 'Buy Box predictor',
  keypointsText4: 'Dynamic Pricing',
  keypointsText5: 'Smart dashboard',

  // password strength en
  tooShort: 'Password strength : Too Weak',
  weak: 'Password strength : Weak',
  okay: 'Password strength : Okay',
  good: 'Password strength : Good',
  strong: 'Password strength : Strong',

  // words en
  poweredBy: 'Powered By',
  language: 'Language',
  newPassword: 'New Password',
  confirmPassword: 'Confirm Password',
  BacktoLogin: 'Back to login',
  or: 'or',
  email: 'Email Address',
  signInWithGoogle: 'Sign in with Google',
  signInWithDarty: 'Sign in with Darty',
  freeTrial: 'free trial',
  alreadyHaveAccount: 'Already have an account?',
  welcome: "Welcome! Let's begin our ride.",
  verifyEmailInstruction:
    'Final step to your free trial. Activate your Boostmyshop account by following the instructions sent to your registered email address.',
  },
  fr: {
  // login page fr
  loginAccountTitle: 'Bienvenue de retour',
  createAccount: 'Vous n&#x27;avez pas encore de compte Boostmyshop ?',
  createNow: 'Créer maintenant',
  loginKeypointsTitle1: 'Devenez maître des marketplaces.',
  loginKeypointsTitle2: 'Développez votre e-business plus rapidement.',
  loginKeypointsTitle3: 'Vendez plus intelligemment en ligne.',
  loginKeypoint1: 'Surveillance des prix des concurrents',
  loginKeypoint2: 'Indicateur de santé du catalogue',
  loginKeypoint3: 'Prévision de la Buybox',
  loginKeypoint4: 'Tarification dynamique',
  loginKeypoint5: 'Tableau de bord intelligent',
  loginTitleHightlighted1: 'Devenez le maître',
  loginTitleNormal1: 'du marché',
  loginTitleHightlighted2: 'Développez plus rapidement',
  loginTitleNormal2: 'votre entreprise en ligne',
  loginTitleHightlighted3: 'Vendez plus intelligemment',
  loginTitleNormal3: 'en ligne',

  // register page1 fr
  registerAccountTitle: 'Commencez',
  registerAccountSubTitle: 'Commencer votre essai gratuit',
  registerLetStart: 'Continuer',

  // register page2 fr
  registerPage2Title: 'Commencer votre essai gratuit',
  registerPage2SubTitle: 'Complétez votre profil',
  registerFirstName: 'Prénom',
  registerLastName: 'Nom',
  registerCompany: 'Société',
  registerPhoneNumber: 'Numéro de téléphone',
  registerPassword: 'Créer un mot de passe',
  registerGoBack: 'Retour',
  registerCreateAccount: 'Commencer',
  registerTerms1: 'En cochant, vous acceptez nos ',
  registerTerms2: 'Conditions d&#x27;utilisation ',
  registerTerms3: 'et notre ',
  registerTerms4: 'Politique de confidentialité.',
  registerTerms5:
    'Vos données seront utilisées afin de créer votre compte utilisateur. Si vous ne souhaitez pas recevoir nos actualités, veuillez contacter le service client.',
  registerKeypointsTitle: 'Boostez vos performances de vente sur toutes les marketplaces',
  registerKeypoint1: 'Essayez Boostmyshop myPricing gratuitement pendant 15 jours',
  registerKeypoint2:
    'Connectez-vous à vos marketplaces, importez votre catalogue de produits et analysez votre performance sur les marketplaces en un clic',
  registerKeypoint3: 'Service client expert',

  // page expired fr
  pageExpiredTitle: 'Page expirée',
  pageExpiredSubTitle: 'Veuillez choisir une action pour continuer',

  //reset password fr
  resetPasswordTitle: 'Réinitialiser le mot de passe',

  // update password fr
  updatePasswordTitle: 'Mettre à jour le mot de passe',

  // keypoints fr
  keypointsHeader: 'Développez vos performances commerciales  sur les marketplaces avec',
  keypointsText1: 'Surveillance des prix des concurrents',
  keypointsText2: 'Indicateur de santé de catalogue',
  keypointsText3: 'Prévision de la Buybox',
  keypointsText4: 'Tarification dynamique',
  keypointsText5: 'Tableau de bord intelligent',

  // password strength fr
  tooShort: 'Fiabilité du mot de passe : trop court',
  weak: 'Fiabilité du mot de passe : faible',
  okay: 'Fiabilité du mot de passe : moyen',
  good: 'Fiabilité du mot de passe : bien',
  strong: 'Fiabilité du mot de passe : fort',

  // words fr
  poweredBy: 'Propulsé par',
  language: 'Langue',
  newPassword: 'Nouveau mot de passe',
  confirmPassword: 'Confirmez le mot de passe',
  BacktoLogin: 'Retour à la connexion',
  or: 'ou',
  email: 'Adresse e-mail',
  signInWithGoogle: 'Se connecter avec Google',
  signInWithDarty: 'Se connecter avec Darty',
  freeTrial: 'essai gratuit',
  alreadyHaveAccount: 'Vous avez déjà un compte ?',
  welcome: 'Bienvenue ! Commençons notre voyage.',
  verifyEmailInstruction:
    'Dernière étape pour votre essai gratuit. Activez votre compte Boostmyshop en suivant les instructions envoyées à votre adresse e-mail enregistrée.',
  },
  es: {
// login page es
loginAccountTitle: 'Bienvenido de nuevo',
createAccount: '¿Aún no tienes una cuenta de Boostmyshop?',
createNow: 'Crea una ahora',
loginKeypointsTitle1: 'Sé el maestro de los marketplaces.',
loginKeypointsTitle2: 'Haz crecer tu negocio en línea más rápido.',
loginKeypointsTitle3: 'Vende de forma más inteligente en línea.',
loginKeypoint1: 'Monitoreo de precios de competidores',
loginKeypoint2: 'Indicador de salud del catálogo',
loginKeypoint3: 'Predictor de Buy Box',
loginKeypoint4: 'Precios dinámicos',
loginKeypoint5: 'Tablero inteligente',
loginTitleHightlighted1: 'Sé el maestro',
loginTitleNormal1: 'del mercado',
loginTitleHightlighted2: 'Haz crecer más rápido',
loginTitleNormal2: 'tu negocio en línea',
loginTitleHightlighted3: 'Vende de manera más inteligente',
loginTitleNormal3: 'en línea',

// register page1 es
registerAccountTitle: 'Comienza',
registerAccountSubTitle: 'Comienza tu prueba gratuita en myPricing hoy',
registerLetStart: 'Continuar',

// register page2 es
registerPage2Title: 'Regístrate para tu prueba gratuita',
registerPage2SubTitle: 'Completa tu perfil',
registerFirstName: 'Nombre',
registerLastName: 'Apellido',
registerCompany: 'Empresa',
registerPhoneNumber: 'Número de teléfono',
registerPassword: 'Contraseña',
registerGoBack: 'Regresa',
registerCreateAccount: 'Comenzar',
registerTerms1: 'Al continuar, aceptas nuestros',
registerTerms2: 'Términos de servicio',
registerTerms3: 'y nuestra ',
registerTerms4: 'Política de privacidad.',
registerTerms5:
  'Procesaremos tus datos para crear tu cuenta de usuario. Si no deseas recibir nuestras noticias y otra información útil, comunícate con nuestro servicio de atención al cliente.',
registerKeypointsTitle: 'Mejora el rendimiento de tus ventas en todos los marketplaces',
registerKeypoint1: 'Prueba Boostmyshop myPricing gratis durante 15 días',
registerKeypoint2:
  'Conéctate a tus marketplaces, importa tu catálogo de productos y analiza el rendimiento de tus marketplaces en un solo clic',
registerKeypoint3: 'Servicio al cliente experto',

// page expired es
pageExpiredTitle: 'Página expirada',
pageExpiredSubTitle: 'Por favor, elija una acción para proceder',

//reset password es
resetPasswordTitle: 'Restablecer la contraseña',

// update password es
updatePasswordTitle: 'Actualizar la contraseña',

// keypoints es
keypointsHeader: 'Aumente sus ventas en las marketplaces con',
keypointsText1: 'Monitoreo de precios de la competencia',
keypointsText2: 'Indicador de salud del catálogo',
keypointsText3: 'Predictor de Buy Box',
keypointsText4: 'Precios dinámicos',
keypointsText5: 'Panel de control inteligente',

// password strength es
tooShort: 'Fortaleza de la contraseña: Demasiado débil',
weak: 'Fortaleza de la contraseña: Débil',
okay: 'Fortaleza de la contraseña: Aceptable',
good: 'Fortaleza de la contraseña: Buena',
strong: 'Fortaleza de la contraseña: Fuerte',

// words es
poweredBy: 'Proporcionado por',
language: 'Idioma',
newPassword: 'Nueva contraseña',
confirmPassword: 'Confirmar contraseña',
BacktoLogin: 'Volver a iniciar sesión',
or: 'o',
email: 'Dirección de correo electrónico',
signInWithGoogle: 'Iniciar sesión con Google',
signInWithDarty: 'Iniciar sesión con Darty',
freeTrial: 'prueba gratuita',
alreadyHaveAccount: '¿Ya tiene una cuenta?',
welcome: '¡Bienvenido! Comencemos nuestro viaje.',
verifyEmailInstruction:
  'Último paso para su prueba gratuita. Active su cuenta de Boostmyshop siguiendo las instrucciones enviadas a su dirección de correo electrónico registrada.',

  },



  it: {
     // login page it
  loginAccountTitle: 'Benvenuto di nuovo',
  createAccount: 'Non hai ancora un account Boostmyshop?',
  createNow: 'Crea ora',
  loginKeypointsTitle1: 'Diventa il padrone delle marketplaces.',
  loginKeypointsTitle2: 'Fai crescere il tuo e-commerce più velocemente.',
  loginKeypointsTitle3: 'Vendi in modo più intelligente online.',
  loginKeypoint1: 'Monitoraggio dei prezzi della concorrenza',
  loginKeypoint2: 'Indicatore di salute del catalogo',
  loginKeypoint3: 'Predictor di Buy Box',
  loginKeypoint4: 'Prezzi dinamici',
  loginKeypoint5: 'Pannello di controllo intelligente',
  loginTitleHightlighted1: 'Diventa il padrone',
  loginTitleNormal1: 'del mercato',
  loginTitleHightlighted2: 'Cresci più velocemente',
  loginTitleNormal2: 'il tuo e-business',
  loginTitleHightlighted3: 'Vendi in modo più intelligente',
  loginTitleNormal3: 'online',

  // register page1 it
  registerAccountTitle: 'Iniziamo',
  registerAccountSubTitle: 'Registrati per il tuo periodo di prova gratuito',
  registerLetStart: 'Continua',

  // register page2 it
  registerPage2Title: 'Registrati per il tuo periodo di prova gratuito',
  registerPage2SubTitle: 'Completa il tuo profilo',
  registerFirstName: 'Nome',
  registerLastName: 'Cognome',
  registerCompany: 'Azienda',
  registerPhoneNumber: 'Numero di telefono',
  registerPassword: 'Crea una password',
  registerGoBack: 'Indietro',
  registerCreateAccount: 'Inizia',
  registerTerms1: 'Selezionando questa casella accetti i nostri ',
  registerTerms2: 'Termini di servizio ',
  registerTerms3: 'e la nostra ',
  registerTerms4: 'Informativa sulla privacy.',
  registerTerms5:
    'I tuoi dati saranno elaborati per creare il tuo account utente. Se non desideri ricevere le nostre notizie e altre informazioni utili, contatta il nostro servizio clienti.',
  registerKeypointsTitle: 'Aumenta le prestazioni delle tue vendite su tutte le marketplaces',
  registerKeypoint1: 'Prova Boostmyshop myPricing gratuitamente per 15 giorni',
  registerKeypoint2:
    'Collegati alle tue marketplaces, importa il tuo catalogo prodotti e analizza le tue prestazioni sulle marketplaces con un solo clic',
  registerKeypoint3: 'Assistenza clienti esperta',

  // page expired it
  pageExpiredTitle: 'Pagina scaduta',
  pageExpiredSubTitle: "Seleziona un'azione per procedere",

  //reset password it
  resetPasswordTitle: 'Reimposta la password',

  // update password it
  updatePasswordTitle: 'Aggiorna la password',

  // keypoints it
  keypointsHeader: 'Aumenta le tue vendite sulle marketplaces con',
  keypointsText1: 'Monitoraggio dei prezzi della concorrenza',
  keypointsText2: 'Indicatore di salute del catalogo',
  keypointsText3: 'Predictor di Buy Box',
  keypointsText4: 'Prezzi dinamici',
  keypointsText5: 'Pannello di controllo intelligente',

  // password strength it
  tooShort: 'Forza della password: Troppo debole',
  weak: 'Forza della password: Debole',
  okay: 'Forza della password: Accettabile',
  good: 'Forza della password: Buona',
  strong: 'Forza della password: Forte',

  // words it
  poweredBy: 'Offerto da',
  language: 'Lingua',
  newPassword: 'Nuova password',
  confirmPassword: 'Conferma password',
  BacktoLogin: 'Torna al login',
  or: 'oppure',
  email: 'Indirizzo email',
  signInWithGoogle: 'Accedi con Google',
  signInWithDarty: 'Accedi con Darty',
  freeTrial: 'periodo di prova gratuito',
  alreadyHaveAccount: 'Hai già un account?',
  welcome: 'Benvenuto! Iniziamo il nostro viaggio.',
  verifyEmailInstruction:
    'Ultimo passo per il tuo periodo di prova gratuito. Attiva il tuo account Boostmyshop seguendo le istruzioni inviate al tuo indirizzo email registrato.',
  }
})

export type I18n = NonNullable<ReturnType<typeof useI18n>>
