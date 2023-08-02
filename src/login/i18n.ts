import { createUseI18n } from 'keycloakify/login'

export const { useI18n } = createUseI18n({
  // NOTE: Here you can override the default i18n messages
  // or define new ones that, for example, you would have
  // defined in the Keycloak admin UI for UserProfile
  // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
  en: {
    alphanumericalCharsOnly: 'Only alphanumerical characters',
    gender: 'Gender',
    // Here we overwrite the default english value for the message "doForgotPassword"
    // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
    doForgotPassword: 'I forgot my password',
    invalidUserMessage: 'Invalid username or password. (this message was overwrite in the theme)',
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
    /* spell-checker: disable */
    alphanumericalCharsOnly: 'Caractère alphanumérique uniquement',
    gender: 'Genre',
    doForgotPassword: "J'ai oublié mon mot de passe",
    invalidUserMessage: "Nom d'utilisateur ou mot de passe invalide. (ce message a été écrasé dans le thème)",
    /* spell-checker: enable */
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
})

export type I18n = NonNullable<ReturnType<typeof useI18n>>
