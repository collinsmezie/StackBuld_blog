import dbConnect from "../../../../utils/dbConnect";
import Post from "../../../../models/Post";

dbConnect();

export default async (req, res) => {
  if (req.method === "PUT") {
    try {
      const { id, title, content } = req.body;
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { title, content },
        { new: true }
      );
      if (!updatedPost) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
