
import Bennar from '../components/Bennar'
import Card from '../components/Card'
import { Link, useLoaderData } from 'react-router-dom'



const Home = () => {
  const data = useLoaderData()
  
  return (
    <div className=''>
    <Bennar></Bennar>

    
    <div className='max-w-[1200px] mx-auto mt-10'>
    <p className='text-center text-4xl '>Feature</p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto gap-20 py-20 my-7'>
    {
      data?.map(item => <div key={item.id} className="card card-compact h-[300px] w-[400px] mx-auto md:w-auto lg:w-auto bg-base-100 shadow-xl">
      <figure><img className='w-full h-[200px]' src={item.img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        
        
      </div>
    </div>)
    }
    </div>
    </div>
    <Card></Card>


   {/** extra feature  */}

   <div className='max-w-[1000px] mx-auto lg:mx-64  flex justify-center  flex-col '>
   <h1 className='text-center text-4xl my-10'>Extra feature</h1>

   <img src="https://i.ibb.co/mT1trZQ/features.png" alt="" />
   <Link to="/extra" className='flex justify-center my-10'><button className='btn btn-neutral '>Click here</button></Link>
   </div>

{/** extra feature  */}


    </div>
  )
}

export default Home
