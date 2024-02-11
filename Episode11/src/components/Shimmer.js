const Shimmer = () => {
  return (
    <div className="w-full py-8 px-28 relative top-20 flex flex-wrap gap-5">
        {Array(50).fill(" ").map((x,index)=>(
            <div key={index} className="w-[21%] mb-8 rounded-xl">
                <img className="w-full h-[180px] bg-[#aaa] object-cover rounded-xl" alt="" />
                <div className="w-full py-3 px-2">
                    <h3></h3>
                    <h4 className="mb-2 h-2 w-full bg-[#aaa]"></h4>
                    <p className="mb-2 whitespace-nowrap overflow-x-hidden bg-[#aaa] h-2 w-4"></p>
                    <h6></h6>
                </div>
            </div>))
        }
    </div>
  )
}

export default Shimmer;