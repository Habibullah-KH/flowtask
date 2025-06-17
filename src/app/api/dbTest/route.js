import dbConnect from "@/lib/dbConnent";

export async function GET() {
  const collection = await dbConnect('tasks');
  const tasks = await collection.find({}).toArray();

  return Response.json({ tasks });
}
