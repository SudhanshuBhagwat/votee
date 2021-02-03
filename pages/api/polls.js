import db from "../../lib/firebase-admin";

export default async (req, res) => {
  const pollRef = await db.collection("polls").get();
  let polls = [];

  if (!pollRef.exists) {
    console.error("No such collection exists");
  }

  pollRef.forEach((poll) => {
    polls.push({
      id: poll.id,
      ...poll.data(),
    });
  });

  res.status(200).json({ polls });
};
