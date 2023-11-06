import { useState } from "react"


const Pdf = () => {
    const [pdfFile,setpdfFile]=useState(null)
    const [pdfFileE,setpdfFileE]=useState('')
    const allowfiles =['application/pdf']
    const handle=(e)=>{
        e.preventDefault()
        const selectPdf = e.target.files[0]
        // console.log(selectPdf)
        if(selectPdf){
            if(selectPdf&&allowfiles.includes(selectPdf.type)){
                let render =new FileReader();
                render.readAsDataURL(selectPdf)
                render.onloadend=(e)=>{
                    setpdfFileE('');
                    setpdfFile(e.target.result)
                    console.log(e.target.result)
                }
            }else{
                setpdfFileE('only pdf ')
            }

        }else{
            console.log('provide pdf')
        }

    }
  return (
    <div>
    <form >
    <label ><p>pdf</p></label>
    <input onChange={handle} type="file" name="" id="" />
    {pdfFileE&& <span>{pdfFileE}</span>}
    </form>

 <h1>view</h1>
    <div className="h-[600px]">
    {pdfFile&&(
        <p>pdf fil will here</p>
    )}
    </div>
      
    </div>
  )
}

export default Pdf
