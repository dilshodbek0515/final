import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { request } from '../../api'
import { HiDotsVertical } from 'react-icons/hi'
import { FaStar, FaTrash } from 'react-icons/fa'
import { Comment } from '../../types'
import { useParams } from 'react-router-dom'
// mui
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

const Customers: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const commenrStar = (star: number) => {
    return Array.from({ length: star }, (_, index) => (
      <span key={index}>
        <FaStar className='text-yellow-400' />
      </span>
    ))
  }
  const { id } = useParams()
  const { data: comments } = useQuery({
    queryKey: ['comments', id],
    queryFn: async () => {
      const response = await request.get(`/${id}/comments`)
      return response.data
    },
    enabled: !!id
  })
  return (
    <div className='container h-auto flex flex-col gap-10'>
      <div className='w-full h-auto flex justify-between items-center gap-5'>
        <h2 className='text-3xl text-black font-bold text-nowrap max-sm:text-xl'>
          All Reviews
        </h2>
        <button
          onClick={handleClose}
          className='w-52 h-14 rounded-full bg-black text-white cursor-pointer max-sm:px-5'
        >
          Write a Review
        </button>
      </div>
      {comments && comments.length > 0 ? (
        <div className='grid grid-cols-2 max-lg:grid-cols-1'>
          {comments?.map((comment: Comment) => (
            <div
              className='h-80 border-2 p-7 rounded-2xl flex flex-col gap-5 max-sm:gap-2'
              key={comment.id}
            >
              <div className='w-full flex justify-between items-center'>
                <strong className='flex gap-3 text-xl'>
                  {commenrStar(comment.star)}
                </strong>
                <HiDotsVertical
                  onClick={handleOpen}
                  className='text-xl text-primary cursor-pointer'
                />
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
                      <div
                        onClick={handleClose}
                        className='flex items-center justify-between cursor-pointer'
                      >
                        <p className='text-2xl text-red-500'>Delete</p>
                        <FaTrash className='text-red-500 text-2xl' />
                      </div>
                    </Box>
                  </Fade>
                </Modal>
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
        <p>No Comments</p>
      )}
    </div>
  )
}

export default Customers
