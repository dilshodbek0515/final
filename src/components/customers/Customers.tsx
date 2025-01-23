import React, { useState } from 'react'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { request } from '../../api'
import { FaStar } from 'react-icons/fa'
import { Comment } from '../../types'
import { useParams } from 'react-router-dom'
// mui
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Loading from '../loading/Loading'
import toast, { Toaster } from 'react-hot-toast'
import { IoTrash } from 'react-icons/io5'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  borderRadius: '5px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

const Customers: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [newComment, setNewComment] = useState({
    star: 0,
    author: '',
    text: ''
  })
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const queryClient = useQueryClient()
  const { id } = useParams()

  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments', id],
    queryFn: async () => {
      const response = await request.get(`/${id}/comments`)
      return response.data
    },
    enabled: !!id
  })

  const addMutation = useMutation({
    mutationFn: async (newComment: Partial<Comment>) => {
      const response = await request.post(`/${id}/comments`, newComment)
      return response.data
    },
    onSuccess: newComment => {
      queryClient.setQueryData(['comments', id], (old: Comment[] | undefined) =>
        old ? [...old, newComment] : [newComment]
      )
      setOpen(false)
      setNewComment({ star: 0, author: '', text: '' })
      toast.success('Successfully added')
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewComment(prev => ({
      ...prev,
      [name]: name === 'star' ? Number(value) : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.star && newComment.author && newComment.text) {
      addMutation.mutate(newComment)
    }
  }
  const deleteMutation = useMutation({
    mutationFn: async (commentId: string) => {
      const response = await request.delete(`/${id}/comments/${commentId}`)
      return response.data
    },
    onSuccess: (_, variables) => {
      queryClient.setQueryData(['comments', id], (old: Comment[] | undefined) =>
        old ? old.filter(comment => comment.id !== variables) : []
      )
      toast.success('Successfully deleted')
    },
    onError: () => {
      toast.error('Failed to delete comment')
    }
  })
  const handleDelete = (id: string) => {
    deleteMutation.mutate(id)
  }

  const commentStar = (star: number) => {
    return Array.from({ length: star }, (_, index) => (
      <span key={index}>
        <FaStar className='text-yellow-400' />
      </span>
    ))
  }

  return (
    <div className='container h-auto flex flex-col gap-10'>
      <div className='w-full h-auto flex justify-between items-center gap-5'>
        <h2 className='text-3xl text-black font-bold text-nowrap max-sm:text-xl'>
          All Reviews
        </h2>
        <button
          onClick={handleOpen}
          className='w-52 h-14 rounded-full bg-black text-white cursor-pointer max-sm:px-5'
        >
          Write a Review
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : comments && comments.length > 0 ? (
        <div className='grid grid-cols-2 grid-rows-1 max-lg:grid-cols-1'>
          {comments.map((comment: Comment) => (
            <div
              className='h-80 border-2 p-7 rounded-2xl flex flex-col gap-5 max-sm:gap-2'
              key={comment.id}
            >
              <div className='w-full flex justify-between items-center'>
                <strong className='flex gap-3 text-xl'>
                  {commentStar(comment.star)}
                </strong>
                <IoTrash
                  onClick={() => handleDelete(comment.id)}
                  className='text-2xl text-red-500 cursor-pointer'
                />
              </div>
              <h2 className='text-primary text-2xl font-bold'>
                {comment.author}
              </h2>
              <p className='text-lg text-gray-500 w-[90%] max-sm:text-[16px]'>
                {comment.text}
              </p>
              <p className='text-xl text-gray-500 mt-5 max-sm:mt-0'>
                {comment.createdAt}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-500 text-2xl text-center'>No Comments</p>
      )}
      <Modal
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form
              onSubmit={handleSubmit}
              className='w-full flex items-center justify-between gap-5 flex-col cursor-pointer'
            >
              <h2 className='text-4xl text-black font-bold'>Sharh qo‘shish</h2>
              <input
                type='number'
                name='star'
                placeholder='Yulduzlar sonini kiriting (1-5)'
                value={newComment.star}
                onChange={handleChange}
                className='w-full h-12 px-2 border-2 outline-none rounded-md text-lg'
                required
              />
              <input
                type='text'
                name='author'
                placeholder='Ismingizni kiriting'
                value={newComment.author}
                onChange={handleChange}
                className='w-full h-12 px-2 border-2 outline-none rounded-md text-lg'
                required
              />
              <input
                type='text'
                name='text'
                placeholder='Sharhingizni kiriting'
                value={newComment.text}
                onChange={handleChange}
                className='w-full h-12 px-2 border-2 outline-none rounded-md text-lg'
                required
              />
              <button
                type='submit'
                className='w-full h-12 rounded-md bg-gray-200 duration-300 text-black text-xl hover:bg-slate-300'
              >
                Qo‘shish
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default Customers
