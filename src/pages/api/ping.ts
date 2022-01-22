/* eslint-disable import/no-anonymous-default-export */
//* Este archivo/end-point  es muy recurrente cuando se crea app para poder verificar si la base d datos esta funcionando, es muy commun

import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
 const response = await connect.query("SELECT NOW()");
 console.log(response);
 
 return res.json({ message: "pong" });
};
