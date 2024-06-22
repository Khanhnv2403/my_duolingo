import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/flags/es.svg",
      },
      {
        id: 2,
        title: "Vietnamese",
        imageSrc: "/flags/vn.svg",
      },
      {
        id: 3,
        title: "Croatian",
        imageSrc: "/flags/hr.svg",
      },
      {
        id: 4,
        title: "Italian",
        imageSrc: "/flags/it.svg",
      },
      {
        id: 5,
        title: "France",
        imageSrc: "/flags/fr.svg",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
