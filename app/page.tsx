import { auth } from '@clerk/nextjs'
import Link from 'next/link'
export default async function Home() {
  const { userId } = await auth()

  let href = userId ? '/journal' : '/new-user'
  return (
    <div className="text-white w-screen h-screen bg-black flex justify-center items-center">
      <div className="max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best journal app, period</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is the best app for traking your mood throughout your life. All
          you have to do is be honest
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
