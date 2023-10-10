import dbConnect from "../../../../../utils/dbConnect";
import Post from "../../../../../models/Post";

dbConnect();

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      // Extract the post's ID from the request query parameters
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ error: "ID parameter is missing" });
      }

      // Find the post by ID
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
