import dbConnect from '@/lib/dbConnent';
import { ObjectId } from 'mongodb';

export async function PUT(req, { params }) {
  const collection = await dbConnect('tasks');
  const body = await req.json();

  await collection.updateOne(
    { _id: new ObjectId(params.id) },
    { $set: { status: body.status } }
  );

  return Response.json({ success: true });
}

export async function DELETE(req, { params }) {
  const collection = await dbConnect('tasks');
  try {
    const result = await collection.deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return Response.json({ message: 'Task not found' }, { status: 404 });
    }

    return Response.json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    return Response.json({ message: 'Error deleting task', error: error.message }, { status: 500 });
  }
}