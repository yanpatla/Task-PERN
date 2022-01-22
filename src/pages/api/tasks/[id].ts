import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "src/utils/database";
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;

  switch (method) {
    case "GET":
      try {
        const text = "SELECT * FROM tasks WHERE id  = $1";
        const values = [query.id];
        const results = await connect.query(text, values);
        if (results.rows.length === 0)
          return res.status(404).json({ message: "Task not Found" });
        return res.json(results.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }

    case "PUT":
      try {
        const { title, description } = body;
        const text =
          "UPDATE tasks SET title =$1, description =$2 WHERE id  = $3 RETURNING *";
        const values = [title, description, query.id];
        const results = await connect.query(text, values);
        if (results.rows.length === 0)
          return res.status(404).json({ message: "Task not Found" });
        return res.json(results.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }
    case "DELETE":
      try {
        const text = "DELETE FROM tasks WHERE id  = $1 RETURNING *";
        const values = [query.id];
        const results = await connect.query(text, values);
        console.log(results);

        if (results.rowCount === 0)
          return res.status(404).json({ message: "Task not Found" });
        return res.json(results.rows[0]);
      } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }
    default:
      return res.status(400).json("ERRor");
  }
};
