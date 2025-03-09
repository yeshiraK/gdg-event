import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
  const { name, email, year_of_study, college_name, github_link, twitter_link } = await req.json();

  console.log("Received data:", { name, email, year_of_study, college_name, github_link, twitter_link });

  if (!name || !email || !year_of_study || !college_name || !github_link || !twitter_link) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("myDatabase"); 
    const collection = db.collection("users");

    console.log("Inserting data into 'users' collection...");
    await collection.insertOne({
      name,
      email,
      year_of_study,
      college_name,
      github_link,
      twitter_link,
    });

    return new Response(JSON.stringify({ message: "User data collected successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error inserting data:", error);
    return new Response(JSON.stringify({ error: "Error inserting data" }), { status: 500 });
  }
}
