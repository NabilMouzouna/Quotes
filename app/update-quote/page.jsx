'use client'
import {useState,useEffect} from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import Form from '@components/Form'
import { useSession } from 'next-auth/react'


const UpdatePost = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const quoteId = searchParams.get('id')
  const {data:session} = useSession()
  const [submitting,setSubmit] = useState(false)
  const [post,setPost] = useState({
    quote : '',
    tag : ''
  })
  const handleSubmit =async (e) => { 
    e.preventDefault()
    setSubmit(true)

    if(!quoteId) return alert('id NOT FOUND')
    try {
      const response = await fetch(`/api/quote/${quoteId}`,{
        method: 'PATCH',
        body: JSON.stringify({
          quote : post.quote,
          tag : post.tag,
        })})
        if(response.ok) router.push('/')
    } catch (error) {
      console.log(error)
    }
   }

   useEffect(() => { 
    const getQuoteDetails = async () => { 
        const response = await fetch(`/api/quote/${quoteId}`)
        const data = await response.json()
        setPost({
            quote: data.quote,
            tag : data.tag
        })
     }

     if(quoteId) getQuoteDetails()
    },[quoteId])
  return (
    <Form 
    type = "Edit"
    post = {post}
    setPost = {setPost}
    submitting = {submitting}
    handleSubmit = {handleSubmit}
    />
  )
}

export default UpdatePost