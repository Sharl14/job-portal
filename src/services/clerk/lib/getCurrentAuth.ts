import { db } from "@/drizzle/db";
import { schema } from "@/drizzle/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function getCurrentUser({ allData = false } = {}) {
  const { userId } = await auth();

  return {
    userId,
    user: allData && userId != null ? await getUser(userId) : undefined,
  };
}

async function getUser(id: string) {
  return await db.query.UserTable.findFirst({
    where: eq(schema.UserTable.id, id),
  });
}

export async function getCurrentOrganization({ allData = false } = {}) {
  const { orgId } = await auth();

  return {
    orgId,
    organization:
      allData && orgId != null ? await getOrganization(orgId) : undefined,
  };
}

async function getOrganization(id: string) {
  return db.query.OrganizationTable.findFirst({
    where: eq(schema.OrganizationTable.id, id),
  });
}
