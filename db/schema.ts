// import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
// import {
//     boolean,
//     int,
//     mysqlTable,
//     primaryKey,
//     varchar,
//   } from "drizzle-orm/mysql-core"
//   import mysql from "mysql2/promise"
//   import { drizzle } from "drizzle-orm/mysql2"
//   import type { AdapterAccountType } from "next-auth/adapters"


//   export const connection = await mysql.createConnection({
//     host: "host",
//     user: "user",
//     password: "password",
//     database: "database",
//   })

//   export const db = drizzle(connection)
  

// export const users = pgTable('users', {
//   id: serial('id').primaryKey(),
//   name: text('name'),
//   email: text('email').notNull(),
//   emailVerified: timestamp('emailVerified', { mode: 'date' }),
//   image: text('image'),
//   role: text('role').default('user'),
// });

// export const accounts = pgTable('accounts', {
//   id: serial('id').primaryKey(),
//   userId: serial('userId').references(() => users.id),
//   type: text('type').notNull(),
//   provider: text('provider').notNull(),
//   providerAccountId: text('providerAccountId').notNull(),
//   refresh_token: text('refresh_token'),
//   access_token: text('access_token'),
//   expires_at: serial('expires_at'),
//   token_type: text('token_type'),
//   scope: text('scope'),
//   id_token: text('id_token'),
//   session_state: text('session_state'),
// });

// export const sessions = pgTable('sessions', {
//   id: serial('id').primaryKey(),
//   userId: serial('userId').references(() => users.id),
//   expires: timestamp('expires', { mode: 'date' }).notNull(),
//   sessionToken: text('sessionToken').notNull(),
// });

// export const verificationTokens = pgTable('verificationToken', {
//   identifier: text('identifier').notNull(),
//   token: text('token').notNull(),
//   expires: timestamp('expires', { mode: 'date' }).notNull(),
// });