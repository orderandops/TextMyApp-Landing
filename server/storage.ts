import { type User, type InsertUser, type Signup, type InsertSignup, users, signups } from "@shared/schema";
import { db } from "./db";
import { desc, eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createSignup(signup: InsertSignup): Promise<Signup>;
  getSignups(): Promise<Signup[]>;
  getSignupByEmail(email: string): Promise<Signup | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createSignup(signup: InsertSignup): Promise<Signup> {
    const [result] = await db.insert(signups).values(signup).returning();
    return result;
  }

  async getSignups(): Promise<Signup[]> {
    return db.select().from(signups).orderBy(desc(signups.createdAt));
  }

  async getSignupByEmail(email: string): Promise<Signup | undefined> {
    const [result] = await db.select().from(signups).where(eq(signups.email, email));
    return result;
  }
}

export const storage = new DatabaseStorage();