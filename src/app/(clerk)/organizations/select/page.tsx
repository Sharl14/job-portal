"use client";
import { OrganizationList } from "@clerk/nextjs";

type Props = {
  searchParams: { redirect?: string };
};

export default function OrganizationSelectPage({ searchParams }: Props) {
  const redirectUrl = searchParams?.redirect ?? "/employer";
  return (
    <OrganizationList
      hidePersonal
      hideSlug
      skipInvitationScreen
      afterSelectOrganizationUrl={redirectUrl}
      afterCreateOrganizationUrl={redirectUrl}
    />
  );
}
