import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

const task_table = sqliteTable("task", {
  id: int().primaryKey({ autoIncrement: true }),
  todo: text().notNull()
});

export default task_table;
