import dbConnect from "../../../../../../utils/dbConnect";
import Post from "../../../../../../models/Post";

dbConnect();

// export default async (req, res) => {
//   if (req.method === "GET") {
//     console.log("Received request body Here:", req.body);
//     try {
//       const { topic } = req.body; // Extract the topic from the request body
//       const posts = await Post.find({ topic }); // Query the database by topic
//       res.status(200).json(posts);
//     } catch (error) {
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// };

export default async (req, res) => {
    const { topic } = req.query; // Extract the 'topic' parameter from the URL
    if (req.method === "GET") {
      try {
        // Query the database by 'topic'
        const posts = await Post.find({ topic });
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  };


