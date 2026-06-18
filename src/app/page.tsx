import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "RaverCloud — Virtual DJ Residency",
  description:
    "Launch your own virtual DJ residency. Host premium virtual shows, sell tickets, bring fans on-screen, and build a replay archive from every set.",
  openGraph: {
    title: "RaverCloud — Virtual DJ Residency",
    description:
      "Apply for a Founding DJ Residency. Premium recurring virtual shows for DJs, collectives, and labels.",
    type: "website",
  },
};

export default function Home() {
  return <LandingPage />;
}
