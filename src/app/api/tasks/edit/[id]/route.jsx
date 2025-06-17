// app/api/tasks/edit/[id]/route.jsx - FOR GENERAL TASK EDITING (title, description, etc.)

import dbConnect from '@/lib/dbConnent';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  try {
    const collection = await dbConnect('tasks');
    const body = await req.json();

    const { id } = params;

    const updates = {};
    if (body.title !== undefined) updates.title = body.title;
    if (body.description !== undefined) updates.description = body.description;
    if (body.dueDate !== undefined) updates.dueDate = new Date(body.dueDate);
r
    if (Object.keys(updates).length === 0) {
        return NextResponse.json({ message: 'No valid fields provided for update' }, { status: 400 });
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updates }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    }

    const updatedTask = await collection.findOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true, task: updatedTask });

  } catch (error) {
    console.error('Error updating task details:', error);
    return NextResponse.json({ message: 'Failed to update task details', error: error.message }, { status: 500 });
  }
}