# Configuration EmailJS - Guide pour Débutants

Ce guide explique comment configurer **EmailJS** gratuitement pour recevoir les messages du formulaire de contact sur votre email `bensmail.fatimazahra.pro@gmail.com`.

## 📧 Qu'est-ce qu'EmailJS ?

EmailJS est un service **gratuit** qui permet d'envoyer des emails directement depuis votre site web sans avoir besoin d'un serveur backend. Parfait pour les débutants !

## 🚀 Étapes de Configuration

### 1. Créer un Compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up"** (Inscription)
3. Créez un compte avec votre email `bensmail.fatimazahra.pro@gmail.com`
4. Vérifiez votre email et confirmez votre compte

### 2. Ajouter un Service Email

1. Dans le tableau de bord EmailJS, cliquez sur **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Sélectionnez **"Gmail"**
4. Connectez votre compte Gmail `bensmail.fatimazahra.pro@gmail.com`
5. Autorisez EmailJS à envoyer des emails depuis votre compte
6. **Notez votre Service ID** (ex: `service_xxxxxxx`) - vous en aurez besoin !

### 3. Créer un Template d'Email

1. Cliquez sur **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez le template comme suit :

**Subject (Sujet)** :
```
Nouveau message de {{from_name}}
```

**Content (Corps de l'email)** :
```
Vous avez reçu un nouveau message de votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Dans **Settings** :
   - **To Email** : `bensmail.fatimazahra.pro@gmail.com`
   - **From Name** : `Portfolio Contact Form`
   
5. Cliquez sur **"Save"**
6. **Notez votre Template ID** (ex: `template_xxxxxxx`)

### 4. Obtenir votre Public Key

1. Cliquez sur **"Account"** dans le menu
2. Allez dans l'onglet **"General"**
3. Trouvez votre **Public Key** (ex: `xxxxxxxxxxxx`)
4. **Copiez cette clé**

### 5. Mettre à Jour le Code

Ouvrez le fichier `src/components/Contact.jsx` et remplacez les valeurs :

```javascript
emailjs
  .send(
    "VOTRE_SERVICE_ID",     // Remplacez par votre Service ID
    "VOTRE_TEMPLATE_ID",    // Remplacez par votre Template ID
    {
      from_name: form.name,
      to_name: "Fatima Zahra Bensmail",
      from_email: form.email,
      to_email: "bensmail.fatimazahra.pro@gmail.com",
      message: form.message,
    },
    "VOTRE_PUBLIC_KEY"      // Remplacez par votre Public Key
  )
```

### 6. Tester le Formulaire

1. Démarrez votre projet : `npm run dev`
2. Allez sur la section Contact
3. Remplissez et envoyez un message test
4. Vérifiez votre boîte email `bensmail.fatimazahra.pro@gmail.com`

## ✅ Vérifications

- [ ] Compte EmailJS créé avec `bensmail.fatimazahra.pro@gmail.com`
- [ ] Service Gmail configuré
- [ ] Template d'email créé avec le bon destinataire
- [ ] Service ID, Template ID et Public Key copiés
- [ ] Code mis à jour avec vos IDs
- [ ] Message test reçu dans votre Gmail

## 🆓 Plan Gratuit EmailJS

Le plan gratuit d'EmailJS permet :
- **200 emails/mois**
- Parfait pour un portfolio personnel
- Pas de carte bancaire requise

## 🔒 Sécurité

⚠️ **Important** : Ne partagez jamais votre Private Key publiquement. Seule la Public Key peut être dans votre code.

## 💡 Conseils pour Débutants

1. **Testez d'abord** : Envoyez-vous un message test avant de partager votre portfolio
2. **Vérifiez les spams** : Le premier email peut arriver dans les spams
3. **Gardez vos IDs** : Sauvegardez vos IDs dans un fichier texte sécurisé
4. **Lisez la documentation** : [Documentation EmailJS](https://www.emailjs.com/docs/)

## ❓ Problèmes Courants

**Le formulaire ne fonctionne pas** :
- Vérifiez que vous avez bien remplacé TOUS les IDs
- Vérifiez votre connexion internet
- Regardez la console du navigateur (F12) pour les erreurs

**Pas d'email reçu** :
- Vérifiez vos spams
- Vérifiez que l'email dans le template est correct
- Assurez-vous d'avoir autorisé EmailJS sur votre compte Gmail

**Erreur 403** :
- Votre Public Key est incorrecte
- Recopiez-la depuis votre compte EmailJS

## 📞 Support

Si vous avez des questions :
1. Documentation EmailJS : https://www.emailjs.com/docs/
2. Support EmailJS : https://www.emailjs.com/support/

---

✨ **Bon courage dans votre apprentissage du développement web !**
