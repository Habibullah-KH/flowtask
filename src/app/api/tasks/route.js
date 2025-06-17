import dbConnect from "@/lib/dbConnent";

export async function GET(req){
    const {searchParams} = new URL(req.url);
    const email = searchParams.get('email')

    if (!email) {
    return Response.json({ tasks: [] });
  }
    const collection = await dbConnect('tasks');
    const tasks =  await collection.find({}).toArray();
    return Respons.json({tasks});
}

export async function POST(req) {
    const body = await req.json()
    const newTask = {
        ...body,
        createdAt: new Date(),
    };

    const collection = await dbConnect("tasks");
    const result = await collection.insertOne(newTask);

    return Response.json({task: {_id: result.insertedId, ...newTask}});
}