const express = require('express')
// const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth20').Strategy
// const keys = require('./config/keys')

const app = express()

app.get('/', (req, res)=> {
   res.send({ hi: 'there' });
});

// passport.use(new GoogleStrategy({
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: '/auth/google/callback'
//    }, (accessToken) => {
//       console.log(accessToken)
//    })
// )

// app.get('/auth/google', passport.authenticate('google', {
//    scope: ['profile', 'email']
// }))

const PORT = process.env.PORT || 5000
app.listen(PORT)

// http://localhost:5000/



















/* 
http://localhost:5000/auth/google/callback?code=4%2F0AbUR2VMO0qiQszPgEzbulxgG8UTKZfCAbGvH3io8uXycNsgv35mAuyqmVgnE7Qf3mMYg2A&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent






*/ 