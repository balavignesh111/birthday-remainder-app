import {BiSolidTrashAlt} from 'react-icons/bi';

const ListItems = ({data,deleteId}) => {
  console.log(data)
  return ( 
    <ul className="w-full flex flex-col gap-4 py-[0.75rem]">
      {
        data.map((ele)=>{
          return(
            <li key={ele.id} className="w-full flex flex-row justify-between items-center">
              <div className="flex flex-row justify-center items-center gap-8">
                <div>
                  <img src={ele.imgUrl} alt={ele.name} className="w-[4rem] h-[4rem] rounded-full"/>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-black">{ele.name}</span>
                  <span>{ele.age} yrs</span>
                </div>
              </div>
              <button className='text-xl' onClick={()=>deleteId(ele.id)}><BiSolidTrashAlt/></button>
            </li>
          )
        })
      }
    </ul>
    );
}

export default ListItems;