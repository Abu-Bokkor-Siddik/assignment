import React from 'react'

const Create = () => {
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      
      <div className="card flex-shrink-0  shadow-2xl bg-red-400 w-auto ">
        <form className="card-body ">
        <p className='text-center text-3xl'>Create Assignment</p>

        <div className='grid grid-cols-2 w-auto gap-6 '>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input  name='title' type="text" placeholder="title" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mark</span>
            </label>
            <input name='mark' type="text" placeholder="mark" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input name='description' type="text" placeholder="Description" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Thumbnail</span>
            </label>
            <input name='thumbnail' type="email" placeholder="thumbnail" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select</span>
            </label>
            <input name='image' type="text" placeholder="Image URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input name='date' type="text" placeholder="Date" className="input input-bordered" required />
            
          </div>



          
          </div>

          <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input name='image' type="text" placeholder="Image" className="input input-bordered" required />
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Create
