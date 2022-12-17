import mongoose from "mongoose"; 

const userSchema=new mongoose.Schema({
    name: { type: String },
  idNumber: { type: String, required: true, unique: true },
  cash: { type: Number, required: true },
  credit: { type: Number, required: true },
})

const BankUsers = mongoose.model("BankUsers", userSchema);

export { BankUsers };
