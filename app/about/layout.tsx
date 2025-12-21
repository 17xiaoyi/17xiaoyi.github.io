import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: "Learn about Yiqi Huang",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
