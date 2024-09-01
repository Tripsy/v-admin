import routes from 'lib/routes'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      Dashboard
      <br/>
      <br/>
      <Link
        href={routes.get('project-listz')}
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        Projects
      </Link>
    </main>
  );
}
