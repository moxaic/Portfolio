import type { NextApiRequest, NextApiResponse } from "next";

const formHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(400).send("Bad request");
  }
  const { name, email, message } = req.body;
  console.log(name, email, message);
  res.status(200).json({ msg: "Your request has been processed" });
};

export default formHandler;
