export default async function IssueLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ id: string }>
}) {
  return <main>{children}</main>
}
