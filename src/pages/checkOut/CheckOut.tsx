const CheckOut = () => {
  return (
    <section className='w-full h-auto p-5'>
      <div className='container flex items-center justify-center flex-col gap-20'>
        <h2 className='text-5xl text-black font-bold'>Check Out</h2>
        <div className='w-full flex justify-between gap-2'>
          <form className='w-[50%] flex flex-col'>
            <div className='w-full p-10 border-2 rounded-2xl flex flex-col gap-5'>
              <h3 className='text-2xl text-primary font-bold'>
                Contact Infomation
              </h3>
              <div className='w-full flex justify-between'>
                <div className='w-auto flex flex-col gap-5'>
                  <h5 className='uppercase text-lg text-primary font-lg'>
                    First Name
                  </h5>
                  <input
                    className='outline-none border border-black w-80 h-10 rounded-md px-2'
                    type='text'
                    placeholder='First name'
                    required
                  />
                </div>
                <div className='w-auto flex flex-col gap-5'>
                  <h5 className='uppercase text-lg text-primary font-lg'>
                    Last Name
                  </h5>
                  <input
                    className='outline-none border border-black w-80 h-10 rounded-md px-2'
                    type='text'
                    placeholder='Last name'
                    required
                  />
                </div>
              </div>
              <div className='w-full flex flex-col gap-5'>
                <h5 className='uppercase text-lg text-primary font-lg'>
                  First Name
                </h5>
                <input
                  className='outline-none border border-black w-full h-10 rounded-md px-2'
                  type='text'
                  placeholder='Phone number'
                  required
                />
              </div>
              <div className='w-full flex flex-col gap-5'>
                <h5 className='uppercase text-lg text-primary font-lg'>
                  Your Email
                </h5>
                <input
                  className='outline-none border border-black w-full h-10 rounded-md px-2'
                  type='text'
                  placeholder='First name'
                  required
                />
              </div>
            </div>
            <button className='w-full h-14 bg-primary mt-5 rounded-xl text-white text-xl hover:opacity-75 mb-20'>
              Place Order
            </button>
          </form>
          <div className='w-[40%]'>
            <textarea
              className='w-full min-h-96 border-2 outline-none p-5 text-2xl'
              placeholder='Old Summary'
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckOut
