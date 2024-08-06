// // Main File OG.
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');

// passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//   User.findOne({ email })
//     .then(user => {
//       if (!user) {
//         return done(null, false, { message: 'Account does not exist' });
//       }
//       bcrypt.compare(password, user.password, (err, isMatch) => {
//         if (err) throw err;
//         if (isMatch) {
//           return done(null, user);
//         } else {
//           return done(null, false, { message: 'Password incorrect' });
//         }
//       });
//     })
//     .catch(err => console.log(err));
// }));

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: '/auth/google/callback'
// }, (accessToken, refreshToken, profile, done) => {
//   User.findOne({ googleId: profile.id })
//     .then(user => {
//       if (user) {
//         return done(null, user);
//       } else {
//         const newUser = new User({
//           googleId: profile.id,
//           email: profile.emails[0].value,
//           name: profile.displayName
//         });
//         newUser.save()
//           .then(user => done(null, user))
//           .catch(err => console.log(err));
//       }
//     });
// }));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'Account does not exist' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Password incorrect' });
    }
  } catch (err) {
    return done(err);
  }
}));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOne({ googleId: profile.id });
    if (user) {
      return done(null, user);
    } else {
      const newUser = new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName
      });
      await newUser.save();
      return done(null, newUser);
    }
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

