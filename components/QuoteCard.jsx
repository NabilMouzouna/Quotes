'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

const QuoteCard = ({post,handleTagClick,handleDelete,handleEdit}) => {
  const {data:session} = useSession()
  const pathName = usePathname()
  const router = useRouter
  const [copied, setCopied] = useState('')
  const handleCopy = () => { 
    navigator.clipboard.writeText(post.quote).then(() => { alert('Quote is copied') })
    setTimeout(() => { setCopied('') },3000)
   }
  return (
    <div className='prompt_card'>
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
        <Image
        src={post.creator.image}
        alt="user_image"
        width={40} 
        height={40}
        className='rounded-full object-contain' 
        />
        <div className="flex flex-col">
          <h3 className='font-semibold text-gray-900'>{post.creator.username}</h3>
          <p className='text-sm text-gray-500'>{post.creator.email}</p>
        </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
          src = {(copied === post.quote)? '/assets/icons/tick.svg':'/assets/icons/copy.svg'}
          alt='icon'
          width={12}
          height={12}
          />
        </div>
      </div>

      <p className='my-4 text-sm text-gray-700'>{post.quote}</p>
      <p 
      onClick={() =>  handleTagClick && handleTagClick(post.tag) }
      className='text-sm blue-gradient cursor-pointer'>{post.tag}</p>

      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p 
          onClick={handleEdit}
          className="text-sm text-green-500 cursor-pointer">
            Update
          </p>
          <p 
          onClick={handleDelete}
          className="text-sm text-red-500 cursor-pointer">
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default QuoteCard