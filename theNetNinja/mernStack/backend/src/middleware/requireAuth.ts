import { response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

interface JwtPayLoad {
  _id: string;
}

export const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return response.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET) as JwtPayLoad;
    console.log(_id);

    req.user = await User.findOne({ _id }).select("_id");

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};
