import {BankUsers} from "../models/user.models.js"

export const addUserToMongo = async (userObj) => {
    const newUser = await BankUsers.create(userObj);
    
    return newUser;
  };