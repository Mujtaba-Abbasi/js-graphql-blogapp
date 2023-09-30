import User from "../models/user.js";

export const createNewUser = async function (input) {
  try {
    const { email } = input.email;

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      throw new Error("User already exists with this email.");
    }

    const user = new User(input);

    const token = user.generateAuthToken(user);

    await user.save();

    return { user: user.toObject(), token: token };
  } catch (error) {
    throw new Error(
      error.message || "There was some error creating the new User."
    );
  }
};

export const login = async function (input) {
  try {
    const user = await User.getUserCredentials(input.email, input.password);

    if (!user) {
      throw new Error("Invalid email or password.");
    }

    const token = user.generateAuthToken(input.email, input.password);

    return { user: user.toObject(), token };
  } catch (error) {
    console.log(error);
    throw new Error(error.message || "There was some error during the login.");
  }
};
