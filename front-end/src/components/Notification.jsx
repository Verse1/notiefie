import {FaTimes} from 'react-icons/fa'
const Notification = ({notif}) => {
    return(
      <div className="flex items-center justify-center grid grids-cols-1 mt-6">
      
         <div className = "bg-white p-3 rounded-2xl drop-shadow-xl hover:bg-white/75">
           <h1>
             <div className="flex gap-8">
               {notif.title}
               <button className="hover:cursor-pointer">
                 <FaTimes />
               </button> 
             </div>
           </h1>
           <p>
             {notif.date}
           </p>
         </div>
       
      </div>
      
    )
}

export default Notification
 