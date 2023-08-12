'use client'
import {useState} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'
const CreatePost = () => {
  const router = useRouter()
  const {data:session} = useSession()
  const [submitting,setSubmit] = useState(false)
  const [post,setPost] = useState({
    quote : '',
    tag : ''
  })
  const handleSubmit =async (e) => { 
    e.preventDefault()
    setSubmit(true)
    try {
      const response = await fetch('/api/quote/new',{
        method: 'POST',
        body: JSON.stringify({
          quote : post.quote,
          tag : post.tag,
          userId : session?.user.id,
        })})
        if(response.ok) router.push('/')
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <Form 
    type = "Create"
    post = {post}
    setPost = {setPost}
    submitting = {submitting}
    handleSubmit = {handleSubmit}
    />
  )
}

export default CreatePost