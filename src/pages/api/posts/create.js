import dbConnect from "../../../../utils/dbConnect";
import Post from "../../../../models/Post"; // Create a Post model

dbConnect();

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { title, content, topic } = req.body;
      console.log("Received request body:", req.body, topic);
      const post = new Post({ title, content, topic });
      // console.log("Received request body:", post);
      const savedPost = await post.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Errorsss" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
