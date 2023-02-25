import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

interface IUser {
  email: string;
  password: string;
}
interface UserModel extends Model<IUser> {
  signup(
    email,
    password
  ): {
    _id: string;
    email: string;
    password: string;
  };
  login(
    email,
    password
  ): {
    _id: string;
    email: string;
    password: string;
  };
}

const userSchema = new Schema<IUser, UserModel>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email: string, password: string) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.default.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.default.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email: email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email: email,
    password: hash,
  });

  return user;
};
// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("all field must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("invalid email or password");
  }

  const match = bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("invalid email or password");
  }

  return user;
};

export const User = mongoose.model<IUser, UserModel>("User", userSchema);
