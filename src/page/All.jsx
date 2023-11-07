import  { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'

const All = () => {
const [selectdata,setselectdata]=useState('')

console.log("here in my select..",selectdata)
// const [datas,setdatas]=useState([])


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
  
  console.log('data',data,'data2',data2)

  const url = `http://localhost:3000/my?selectdata=${selectdata}&page=${currentpage}`
  useEffect(()=>{
    fetch(url)
    .then(result => result.json())
    .then(data => setdata2(data))
  },[url])

// count ass

  useEffect(()=>{
    fetch('http://localhost:3000/myc')
    .then(result => result.json())
    .then(data => setcount(data.count))

  },[])

  

  // testing all data get 

  useEffect(()=>{
    fetch('http://localhost:3000/my')
    .then(result => result.json())
    .then(data => setdata(data))

  },[])

  // testing

  useEffect(()=>{
    fetch(`http://localhost:3000/my?page=${currentpage}`)
    .then(result => result.json())
    .then(data => setdata2(data))

  },[currentpage])
 
 console.log(count)
  const selects = (e)=>{
    const values = e.target.value
    setselectdata(values)
  
  }
  return (
    <div>

    <div className='w-52 max-w-[1200px] mx-auto my-28'>
    <label  className='h-auto ' >Select One</label>
          <select onChange={selects} name="cars" id="cars">
          <option value="None">None</option>
            <option value="Easy">Easy</option>
            
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            
          </select>
    
    </div>
    <div className='max-w-[1200px] grid grid-cols-2 gap-7 pl-40 mx-auto  my-6'>

   


      {
        data2?.map(item =><div key={item._id} className="card w-96 bg-base-100 shadow-xl">
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
