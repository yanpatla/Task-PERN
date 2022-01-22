import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return res.status(200).json("getting   task");
    case "POST":
      return res.status(200).json("Creatting Task");
    default:
      return res.status(400).json("Invalid Method");
  }
};
