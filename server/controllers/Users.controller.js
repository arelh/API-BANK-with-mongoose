import { BankUsers } from "../models/user.models.js";


export const getUser = async (req, res) => {
  try {
    const users = await BankUsers.find({});
    res.status(200).send(users);
  } catch {}
};

export const addUser = async (req, res) => {
  try {
    const body = req.body;
    const newUser = await BankUsers.create(body);
    res.status(201).send(newUser);
  } catch (err) {
    res.send(err.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToDelete = await BankUsers.findByIdAndDelete(id);
    res.status(200).send(userToDelete);
  } catch (err) {
    res.send(err.message);
  }
};

export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToEdit = await BankUsers.findByIdAndUpdate(
      id,
      { name: req.body.name, cash: req.body.cash, credit: req.body.credit },
      { new: true }
    );

    res.status(200).send(userToEdit);
  } catch (err) {
    res.send(err.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userById = await BankUsers.findById(id);
    res.status(200).send(userById);
  } catch (err) {
    res.send(err.message);
  }
};

export const deposite = async (req, res) => {
  const { id } = req.params;
  const depositCash = +req.body.cash;
  try {
    let userToDeposite = await BankUsers.findById(id);
    userToDeposite = await BankUsers.findByIdAndUpdate(
      id,
      { cash: userToDeposite.cash + depositCash },
      { new: true }
    );

    res.status(200).send(userToDeposite);
  } catch (err) {
    res.send(err.message);
  }
};

export const transferCash = async (req, res) => {
  const { firstId } = req.params;
  const { secondId } = req.params;
  const moneyToTransfer = +req.body.cash;
  try {
    let userPass = await BankUsers.findById(firstId);
    let userGet = await BankUsers.findById(secondId);
    userPass = await BankUsers.findByIdAndUpdate(
      firstId,
      { cash: userPass.cash - moneyToTransfer },
      { new: true }
    );
    userGet = await BankUsers.findByIdAndUpdate(
      secondId,
      { cash: userGet.cash + moneyToTransfer },
      { new: true }
    );
    res.status(200).send(userPass);
  } catch (err) {
    res.send(err.message);
  }
};
