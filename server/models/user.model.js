import * as crypto from 'crypto';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name:            { type: String, trim: true, required: 'Name is required' },
  email:           { type: String, trim: true, unique: 'Email already exists',
                     match: [/.+\@.+\..+/, 'Please fill a valid email address'],
                     required: 'Email is required' },
  salt:            { type: String },
  hashed_password: { type: String, required: 'Password is required' },
  created:         { type: Date,   default: Date.now },
  updated:         { type: Date,   default: Date.now }
});

// Virtual for clear‑text password
UserSchema.virtual('password')
  .set(function (pwd) {
    this._password = pwd;
    this.salt = this.makeSalt();                   // generate salt first
    this.hashed_password = this.encryptPassword(pwd);
  })
  .get(function () {
    return this._password;
  });

// Instance methods
UserSchema.methods.makeSalt = function () {
  return crypto.randomBytes(16).toString('base64');
};

UserSchema.methods.encryptPassword = function (password) {
  if (!password || !this.salt) return '';
  return crypto
    .createHmac('sha256', this.salt)
    .update(password)
    .digest('hex');
};

UserSchema.methods.authenticate = function (plainText) {
  return this.hashed_password;
};

export default mongoose.model('User', UserSchema);
