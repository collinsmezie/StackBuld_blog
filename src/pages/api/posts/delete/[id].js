import dbConnect from "../../../../../utils/dbConnect";
import Post from "../../../../../models/Post";

dbConnect();


export default async (req, res) => {
  if (req.method === "DELETE") {
    try {
      const { id } = req.query; // Ensure the request body is properly parsed and contains the ID
      const deletedPost = await Post.findByIdAndRemove(id);
      if (!deletedPost) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
