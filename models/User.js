const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const { Schema } = mongoose;

const UserSchema = new Schema({
    is_active: {
        type: Boolean,
        default: true,
    },
    first_name: {
        type: String,
        require: true,
        trim: true,
    },

    last_name: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});



UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    return bcrypt.genSalt(SALT_WORK_FACTOR, function (errSalt, salt) {
        if (errSalt) return next(errSalt);

        return bcrypt.hash(user.password, salt, function (errHash, hash) {
            if (errHash) return next(errHash);

            user.password = hash;
            return next();
        });
    });
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

