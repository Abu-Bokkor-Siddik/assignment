
import { useLoaderData } from 'react-router-dom'
import Pdf from './Pdf'
import Swal from 'sweetalert2'

const Mark = () => {
    const data = useLoaderData()
    
    console.log(data)
    console.log(data?.url)
    
    const marksubmit =(e)=>{
        e.preventDefault()
        const note =e.target.note.value 
        const mark =e.target.mark.value 
        const textarea =e.target.textarea.value 
        const stutas = 'complete'
        const updatemark = {note,mark,textarea,stutas}
        console.log(updatemark)

        fetch(`https://assignment-pink-eight.vercel.app/submits/${data._id}`,{
        method:'PUT',
        headers:{
        'content-type':'application/json'
            },
            body:JSON.stringify(updatemark)
            })
            .then(result => result.json())
        .then(datass =>{

          if(datass.acknowledged){
            return Swal.fire({
              title: "Good job!",
              text: "successfully ",
              icon: "success"
            });
          }
         console.log(datass)
         })

    }

    
  return (
    <div>
    <div className="hero min-h-[600px] bg-base-200">
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
            <input name='note' defaultValue={data.textarea}  type="text" placeholder="Pdf url" className="input input-bordered"  />

          <label className="label">
              <span className="label-text">Mark</span>
            </label>
            <input name='mark'  type="text" placeholder="mark" className="input input-bordered"  />



          <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <textarea  name='textarea' className="textarea textarea-secondary" placeholder="write some note here"></textarea>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>

        
      </div>
    </div>
  </div>

  {/**test  */}
  <Pdf></Pdf>
  
  
    </div>
  )
}

export default Mark
