import db from "@/database";
import task_table from "@/database/schema/task";

export async function GET(_request: Request) {
  const all_tasks = await db.select().from(task_table);
  return new Response(JSON.stringify(all_tasks, null, 2), {
    headers: { "Content-Type": "application/json" },
    status: 200
  });
}

export async function POST(request: Request) {
  const { todo }: { todo: string } = await request.json();
  const new_task = await db
    .insert(task_table)
    .values({ todo: todo })
    .returning();
  return new Response(JSON.stringify(new_task, null, 2), {
    headers: { "Content-Type": "application/json" },
    status: 201
  });
}
