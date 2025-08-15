import { NextRequest } from "next/server";

import { eq } from "drizzle-orm";

import db from "@/database";
import task_table from "@/database/schema/task";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const task = await db
    .select()
    .from(task_table)
    .where(eq(task_table.id, Number(id)));
  return new Response(JSON.stringify(task, null, 2), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const { todo }: { todo: string } = await request.json();
  const updated_task = await db
    .update(task_table)
    .set({ todo: todo })
    .where(eq(task_table.id, Number(id)))
    .returning();
  return new Response(JSON.stringify(updated_task, null, 2), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const deleted_task = await db
    .delete(task_table)
    .where(eq(task_table.id, Number(id)))
    .returning();
  return new Response(JSON.stringify(deleted_task, null, 2), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}
