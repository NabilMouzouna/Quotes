import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Protected = ({ children }) => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") {
      return
    }

    if (!session || !session.user) {
      router.replace('/')
    }
  }, [session, status, router])

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return session?.user && children
}

export default Protected