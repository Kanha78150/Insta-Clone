var express = require('express');
var router = express.Router();

// requier the user.js
const userModel = require("./users");
const postModel = require("./post");

// Export Passport
const passport = require('passport');
const LocalStrategy = require("passport-local");
passport.use(new LocalStrategy(userModel.authenticate()));

const upload = require('./multer');
const post = require('./post');

router.get('/', function (req, res) {
  res.render('index', { footer: false });
});

router.get('/login', function (req, res) {
  res.render('login', { footer: false });
});

router.get('/upload', function (req, res) {
  res.render('upload', { footer: true });
});

router.get('/feed', Isloggdin, async function (req, res) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  });
  const posts = await postModel.find().populate("user").populate("user");
  res.render('feed', { footer: true, posts, user });
});

router.get('/profile', Isloggdin, async function (req, res) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  }).populate("posts")
  res.render('profile', { footer: true, user });
});

router.get('/search', Isloggdin, function (req, res) {
  res.render('search', { footer: true });
});

router.get('/username/:username', Isloggdin,
  async function (req, res) {
    const regex = new RegExp(`^${req.params.username}`, 'i');
    const users = await userModel.find({ username: regex })
    res.json(users)
  });

router.get('/edit', Isloggdin, async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user })
  res.render('edit', { footer: true, user });
});


router.get('/like/posts/:id', Isloggdin, async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user });

  const post = await postModel.findOne({ _id: req.params.id });

  if (post.Likes.indexOf(user._id) === -1) {
    post.Likes.push(user._id);
  }
  else {
    post.Likes.splice(post.Likes.indexOf(user._id), 1);
  }

  await post.save();
  res.redirect("/feed");
});

// Login code
router.post('/register', function (req, res, next) {
  let userdata = new userModel({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email
  });

  // resgister(first:usermodelname, second:password) helps us to create our account. It return a promiss
  userModel.register(userdata, req.body.password)
    .then(function () {
      passport.authenticate("local")(req, res, function () {
        res.redirect('/profile');
      });
    });
});

// Login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}), function (req, res) { });


// Logout route
router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect('/login');
  });
});

// Islogdin code
function Isloggdin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

// update route in  multer code
router.post('/update', Isloggdin, upload.single('image'), async (req, res) => {
  // who loggedin to know
  const user = await userModel.findOneAndUpdate(
    { username: req.session.passport.user },
    // user details upadte like username, bio, name on the basic of usernmae
    {
      username: req.body.username,
      name: req.body.name,
      bio: req.body.bio
    },
    { new: true }
  );
  // user profile image update
  if (req.file) {
    user.profileImage = req.file.filename;
  }

  await user.save();
  res.redirect('/profile');
});

// Post
router.post('/upload', Isloggdin, upload.single("image"), async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user });

  const posteduser = await postModel.create({
    picture: req.file.filename,
    user: user._id, // logedin user id
    caption: req.body.caption,
  })
  user.posts.push(posteduser._id);
  await user.save();
  res.redirect("/feed");
});

module.exports = router;
