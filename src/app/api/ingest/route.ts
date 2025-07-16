import { serve } from "inngest/next";
import { inngest } from "@/services/inngest/client";
import {
  clerkCreateUser,
  clerkDeleteUser,
  clerkUpdateUser,
  clerkCreateOrganization,
  clerkUpdateOrganization,
  clerkDeleteOrganization,
} from "@/services/inngest/functions/clerk";
// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    clerkCreateUser,
    clerkDeleteUser,
    clerkUpdateUser,
    clerkCreateOrganization,
    clerkDeleteOrganization,
    clerkUpdateOrganization,
  ],
});
