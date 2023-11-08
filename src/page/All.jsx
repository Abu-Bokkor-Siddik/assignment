import  { useContext, useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { Contexs } from '../components/AuthPro'

const All = () => {
const [selectdata,setselectdata]=useState('')

console.log("here in my select..",selectdata)
// const [datas,setdatas]=useState([])

const {lodings,setloadings}=useContext(Contexs)



  // const data = useLoaderData()


  const [data,setdata]=useState([])
  const [data2,setdata2]=useState(data)
  const [count,setcount]=useState(null)
  const[currentpage,setcurrentpage]=useState(0)
  const perpage = 4;
  const numberp = Math.ceil(count/perpage)
  console.log(numberp)
  const pages = [...Array(numberp).keys()];
  console.log(pages)
  const handelprevi=()=>{
    if(currentpage>0){
      setcurrentpage(currentpage-1)
    }
  }
  const handelnext=()=>{

    if(currentpage<pages.length){
      setcurrentpage(currentpage+1)
    }
  }
  
  

  

  const url = `https://assignment-pink-eight.vercel.app/my?selectdata=${selectdata}&page=${currentpage}`
  useEffect(()=>{
    fetch(url)
    .then(result => result.json())
    .then(data => setdata2(data))
  },[url])

// count ass

  useEffect(()=>{
    fetch('https://assignment-pink-eight.vercel.app/myc')
    .then(result => result.json())
    .then(data => setcount(data.count))

  },[])

  

  // testing all data get 

  useEffect(()=>{
   setloadings(true)
    fetch('https://assignment-pink-eight.vercel.app/my')
    .then(result => result.json())
    .then(data => setdata(data))
     setloadings(false)
  },[setloadings])

  // testing

  useEffect(()=>{
    fetch(`https://assignment-pink-eight.vercel.app/my?page=${currentpage}`)
    .then(result => result.json())
    .then(data => setdata2(data))

  },[currentpage])
 
 console.log(count)
  const selects = (e)=>{
    const values = e.target.value
    setselectdata(values)
  
  }
  if(lodings){
    return( <div><img className='flex justify-center lg:max-w-[1200px] mx-auto' src="https://i.ibb.co/qmMJFf4/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" /></div>)
  }
  return (
    <div>
    <p className='text-center text-4xl font-semibold'>All Assignments</p>
    <div className='w-52 max-w-[1200px] mx-auto my-16'>
    <label  className='h-auto ' >Select One</label>
          <select onChange={selects} name="cars" id="cars">
          <option value="None">None</option>
            <option value="Easy">Easy</option>
            
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            
          </select>
    
    </div>
    <div className='max-w-[1200px] grid md:grid-cols-2  grid-cols-1 lg:grid-cols-2 gap-7 lg:pl-40 mx-5 lg:mx-auto lg:my-6'>

   


      {
        data2?.map(item =><div key={item._id} className="card lg:w-96 bg-base-100 md:w-auto shadow-xl">
        <figure><img className='w-full h-[300px]'  src={item.thumbnail} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{item.titles}</h2>
          <p>Mark : {item.mark}</p>
          <p>{item.selectdata}</p>
          <div className="card-actions justify-between">
          <Link to={`/view/${item._id}`}><button className='btn btn-accent'>view</button></Link>
            <Link to={`/update/${item._id}`}><button   className="btn btn-primary">Update</button></Link>
          </div>
        </div>
      </div>)
      }
    </div>
    <div className='text-center  my-16'>
    <p>current page {currentpage}</p>
    <button className='btn btn-neutral' onClick={handelprevi}>prev</button>
    {
      pages.map((page ,index)=><button className='btn btn-neutral mx-3'
      onClick={()=>setcurrentpage(page)}
      key={page}>{index+1}</button>)
    }
    <button className='btn btn-neutral' onClick={handelnext}>next</button>
    </div>
    </div>
  )
}

export default All
