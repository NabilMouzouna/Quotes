import Link from 'next/link'
import React from 'react'

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aut odit, quidem nisi, aperiam id, deserunt corrupti qui unde veniam libero labore? Doloribus delectus cum numquam repudiandae, dolor voluptatibus explicabo.</p>
      <form
       onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
       >
        <label htmlFor="">
          <span className='font-semibold text-base text-gray-700'>Your Quotes</span>
        <textarea
        value={post.quote}
        onChange={e =>setPost({...post,quote:e.target.value})}
        placeholder='Write Your Quotes'
        className='form_textarea'
        required
        />

        </label>
        <label htmlFor="">
          <span className='font-semibold text-base text-gray-700'>
            Tag {'  '}
            <span className='font-normal'>(#happiness ,#life ,#wisedom)</span>
          </span>
        <input
        value={post.tag}
        onChange={e =>setPost({...post,tag:e.target.value})}
        placeholder='Write Your Tag'
        required
        className='form_input'
        />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href="/" className='text-gray-500'>Cancel</Link>

          <button 
          type='submit'
          disabled={submitting}
          className='px-5 py-1.5 text-sm bg-orange-500 rounded-full text-white'
          >
            {submitting? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form