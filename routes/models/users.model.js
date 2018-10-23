import mongoose, { Schema } from 'mongoose';
import validator from 'validator';

const UserSchema = new Schema({
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true, unique: true},
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    activation_code: { type: Boolean },
    status: { type: Boolean, required: true },
    profile_picture: { type: String },
    token: { type: Boolean },
    date_created: { type: Date },
    date_updated: { type: Date }
})

UserSchema.path('fistname').validate(function (v) {
    return v.length > 15;
  }, 'Your fistname is too long'); 

UserSchema.path('lastname').validate(function (v) {
    return v.length > 15;
  }, 'Your lastname is too long');

UserSchema.path('username').validate(function (v) {
    return v.length > 15;
  }, 'Your username is too long'); 

UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
    }
    next();
  });

UserSchema.methods = {
    hashPassword(password) {
        return hashSync(password);
    },
    addUser(userData) {
        var newUser = User({
            firstname: userData.firstname,
            username: 'starlord55',
            password: 'password',
            admin: true
          });
        newUser.save(function(err) {
            if (err) 
                res.sendStatus(500);
            else {
                res.status(200).json({
                    message: 'New user created',
                    data: newUser
                });
            }
        });  
    },
    editUser(userData) {
        user.save(function(err) {
            if (err) 
                res.sendStatus(500);
            else {
                res.status(200).json({
                    message: 'User info updated',
                    data: user
                });
            }
        })
    }

}

module.exports = mongoose.model('User', UserSchema);