var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: { type: String, minLength: 8, maxLength: 80 }
});

userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.hash(user.password, 10).then(hashedPassword => {
    user.password = hashedPassword;
    next();
  });
});

module.exports = mongoose.model("user", userSchema);
