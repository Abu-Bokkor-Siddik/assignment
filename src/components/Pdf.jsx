import { useState } from "react"
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const Pdf = () => {
    const [pdfFile,setpdfFile]=useState(null)
    const [pdfFileE,setpdfFileE]=useState('')
    const allowfiles =['application/pdf']
    const handle=(e)=>{
        e.preventDefault()
        const selectPdf = e.target.files[0]
        console.log('here pdf',selectPdf)
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
    <div className="max-w-[1000px] mx-auto">
    <form >
    <label ><p> Previews pdf</p></label>
    <input onChange={handle} type="file" name="" id="" />
    {pdfFileE&& <span>{pdfFileE}</span>}
    </form>

 <h1>view</h1>
    <div className="h-[600px]">
    {pdfFile&&(
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={pdfFile}></Viewer>
        
        </Worker>
    )}
    </div>
      
    </div>
  )
}

export default Pdf
