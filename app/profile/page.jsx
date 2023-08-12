"use client"
import {useState,useEffect} from 'react'
import { useSession } from 'next-auth/react'
import {  useRouter  } from 'next/navigation'
import Profile from '@components/Profile'

const myProfile = () => {
  const router = useRouter()
    const { data: session } = useSession()
    const [posts, setPosts] = useState([])
    const handleEdit = (post) => { 
        router.push(`/update-quote?id=${post._id}`)
     }
     const handleDelete =async (post) => { 
        const hasConfirmed = confirm("Are you sure you want to delete this Quote?!!")
        if(hasConfirmed){
          try {
            await fetch(`/api/quote/${post._id}`,{method:"DELETE"})
            const filteredPost = posts.filter(p => p._id !== post._id)
            setPosts(filteredPost)
          } catch (error) {
            console.log(error)
          }
        }
      }
      useEffect(() => { 
        const fetchPosts = async () => { 
          try {
            const response = await fetch(`/api/users/${session?.user.id}/posts`,{method:'GET'}
          )
          const data = await response.json()
          setPosts(data)
          
          } catch (error) {
            console.log(error)
          }
         }
        if(session?.user.id) fetchPosts()
        },[])
  return (
   <Profile
   name = "my"
   desc = "welcome to your personalized profile page"
   data={posts}
   handleEdit = {handleEdit}
   handleDelete={handleDelete}
   />
  )
}

export default myProfile