import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.json("GETTINg A UNIQUE TASK");
    case "PUT":
      return res.json("UPDATTING TASK");
    case "DELETE":
      return res.json("ELIMINATE TASK");
    default:
      return res.status(400).json("ERRor")
  }
};
