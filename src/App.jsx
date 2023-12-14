import { useState } from "react";
import ListItems from "./components/items";
import { data } from "./constant";

const App = () => {
  const [list,SetList] = useState(data);

  // function
  const clearAll = ()=>{
    SetList(()=>[]);
  }

  const deleteItem = (id)=>{
    SetList((arr)=> arr.filter((ele)=>{
      return ele.id !== id
    }))
  }

  return (
    <main className="w-screen min-h-screen bg-[#f28ab2] flex flex-col justify-center items-center font-roboto">
      <div className="w-[35rem] bg-[#ffffff] px-[2rem] py-[1rem] rounded-md flex flex-col gap-4">
        <h2 className="text-[1.8rem] font-bold tracking-wider pb-2 border-b-[1px] border-[#c2c4c5]">{list.length <= 1 ? `${list.length} Birthday Today` : `${list.length} Birthdays Today`}</h2>
        <ListItems data={list} deleteId = {deleteItem}/>
        <div>
          <button className="bg-[#dc3545] text-[#ffffff] w-full font-bold py-2 rounded-md" onClick={()=>clearAll()}>Delete</button>
        </div>
      </div>
    </main>
  );
}
 
export default App;