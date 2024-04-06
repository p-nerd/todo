import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
    bar: text("bar").notNull().default("Hey!"),
});
