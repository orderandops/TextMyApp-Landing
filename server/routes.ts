import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSignupSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/signups", async (req, res) => {
    try {
      const data = insertSignupSchema.parse(req.body);

      const existing = await storage.getSignupByEmail(data.email);
      if (existing) {
        return res.status(409).json({ message: "This email is already on the list!" });
      }

      const signup = await storage.createSignup(data);
      return res.status(201).json(signup);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ message: fromZodError(error).message });
      }
      throw error;
    }
  });

  app.get("/api/signups", async (_req, res) => {
    const signups = await storage.getSignups();
    return res.json(signups);
  });

  return httpServer;
}