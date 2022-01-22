/* eslint-disable import/no-anonymous-default-export */
//* Este archivo/end-point  es muy recurrente cuando se crea app para poder verificar si la base d datos esta funcionando, es muy commun

import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../utils/database";
//* Defino el Tipo de dato que espero Devolver
type Data = {
  message: string;
  time: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await connect.query("SELECT NOW()");
  return res.json({ message: "pong", time: response.rows[0].now });
};
