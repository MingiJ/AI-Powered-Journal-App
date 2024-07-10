import { prisma } from '@/utils/db'
import { auth, currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  })

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.clerkId,
        email: user.email,
        createdAt: user.createdAt,
      },
    })
  }

  redirect('/journal')
}
const NewUser = () => {
  return <div>hi</div>
}

export default NewUser
