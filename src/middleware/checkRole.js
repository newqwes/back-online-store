import passport from 'passport';

const { GUEST_ROLE } = process.env;

const checkRole = roles => (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      res.status(403).send('Not authorized to access');

      return;
    }

    if (roles.includes(GUEST_ROLE) && !user) {
      next();

      return;
    }

    if (roles.includes(user.type)) {
      req.user = user;
      next();

      return;
    }

    res.status(403).send('Not authorized to access');
  })(req, res, next);
};

export default checkRole;
