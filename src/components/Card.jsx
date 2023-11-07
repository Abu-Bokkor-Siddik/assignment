


const Card = () => {
  return (
    <div>
    <p className="text-center text-4xl my-10">Frequently Asks Question</p>
    <div className="hero lg:w-[1200px] mx-auto my-11 bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/cJVhdY7/faq-full-form.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    {/**start  */}

    <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2"  /> 
  <div className="collapse-title text-xl font-medium">
  How do I create a new project or assignment?
  </div>
  <div className="collapse-content"> 
    <p>At frist you have to login in this page and you can see create assignment option to create an assignment project.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How do I invite team members to a project?
  </div>
  <div className="collapse-content"> 
    <p>After creating a project, you can invite team members by entering their email addresses or usernames. They will receive an invitation and can accept to join the project.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
   who can see our assignment  and you can delete assignment?
  </div>
  <div className="collapse-content"> 
    <p>Every user can see your all assignment and only this user can delete this assignment who has create assignment.</p>
  </div>
</div>
      
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Card
