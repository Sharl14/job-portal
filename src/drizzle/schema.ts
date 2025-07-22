import * as jobListing from "./schema/jobListing";
import * as jobListingApplication from "./schema/jobListingApplication";
import * as organization from "./schema/organization";
import * as organizationUserSettings from "./schema/organizationUserSettings";
import * as user from "./schema/user";
import * as userNotificationSettings from "./schema/userNotificationSettings";
import * as userResume from "./schema/userResume";

export const schema = {
  ...jobListing,
  ...jobListingApplication,
  ...organization,
  ...organizationUserSettings,
  ...user,
  ...userNotificationSettings,
  ...userResume,
};
