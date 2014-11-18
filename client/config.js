Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

//Fix translation bug
accountsUIBootstrap3.map("fr", {
    loginFields: {
        usernameOrEmail: "Nom d'utilisateur ou email",
        username: "Nom d'utilisateur",
        email: "Email",
        password: "Mot de passe"
    }
});

accountsUIBootstrap3.setLanguage('fr');