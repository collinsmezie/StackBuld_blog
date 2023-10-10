import dbConnect from "../../../../../utils/dbConnect";
import Post from "../../../../../models/Post";

dbConnect();

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const post = await Post.find();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
