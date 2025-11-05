import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | CV`,
  description: `One-page resume for ${RESUME_DATA.name}`,
};

export default function CvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
