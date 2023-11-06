import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Mark = () => {
    const data = useLoaderData()
    console.log(data)
    const marksubmit =(e)=>{
        e.preventDefault()
    }

    
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      
      <div className="card flex-shrink-0  shadow-2xl bg-red-400 w-auto ">
        <form onSubmit={marksubmit} className="card-body ">
        <p className='text-center text-3xl'>Mark</p>

        

          <label className="label">
              <span className="label-text">Google drive link</span>
            </label>
            <input name='pdf' defaultValue={data.url} type="text" placeholder="Pdf url" className="input input-bordered" readOnly />

          <label className="label">
              <span className="label-text">Note</span>
            </label>
            <input name='pdf' defaultValue={data.textarea}  type="text" placeholder="Pdf url" className="input input-bordered" readOnly />

          <label className="label">
              <span className="label-text">Mark</span>
            </label>
            <input name='pdf'  type="text" placeholder="mark" className="input input-bordered"  />



          <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <textarea name='textarea' className="textarea textarea-secondary" placeholder="write some note here"></textarea>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Mark