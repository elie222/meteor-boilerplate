AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: true,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    // continuousValidation: false,

    // must all be negative for ionic:
    negativeFeedback: false,
    negativeValidation: false,
    positiveValidation: false,
    positiveFeedback: false,
    
    // showValidating: false,

    // Privacy Policy and Terms of Use
    // privacyUrl: 'privacy',
    // termsUrl: 'terms-of-use',

    // Redirects
    // homeRoutePath: '/',
    // redirectTimeout: 2000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,

    // // Texts
    // texts: {
    //   button: {
    //       signUp: "Register Now!"
    //   },
    //   socialSignUp: "Register",
    //   // socialIcons: {
    //   //     "meteor-developer": "fa fa-rocket"
    //   // },
    //   title: {
    //       forgotPwd: "Recover Your Password"
    //   },
    // },
});

// AccountsTemplates.addField({
//     _id: 'firstName',
//     type: 'text',
//     displayName: "First name",
//     placeholder: "First name",
//     required: true,
// });

// AccountsTemplates.addField({
//     _id: 'lastName',
//     type: 'text',
//     displayName: "Last name",
//     placeholder: "Last name",
//     required: true,
// });