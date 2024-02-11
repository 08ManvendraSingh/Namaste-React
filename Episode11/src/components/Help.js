import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import IssuesList from './IssuesList';

const Help = () => {

  const [support,setSupport]=useState([]);
  const [issue,setIssue]=useState([]);

  useEffect(()=>{
    fetchSupport();
  },[])

  const fetchSupport=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/support?");
    const json=await data.json();

    const data2=await fetch("https://www.swiggy.com/dapi/support/issues/partner-onboarding?");
    const json2=await data2.json();

    setSupport(json?.data?.issueTypes);
    console.log(json.data.issueTypes);

    setIssue(json2?.data?.issues);
    console.log(json2?.data?.issues);
  }

  return (
    <div className="w-full px-28 py-8 relative top-20 bg-[#37718e]">
      <h2 className='text-white font-bold text-3xl mb-2'>Help & Support</h2>
      <p className='text-white text-sm'>Let's take a step ahead and help you better.</p>
      <div className='w-full bg-white mt-8 flex p-5'>
        <div className='w-2/12 bg-[#edf1f7]'>
          <ul>
            {support?.data?.map((x)=><Link key={x.title} to={'/support/issues/'+x.type}><li className='ml-5 py-6 px-5 font-bold text-[#535665] cursor-pointer hover:text-black'>{x.title}</li></Link>)}
          </ul>
        </div>
        <div className='w-10/12 min-h-[80vh] pt-9 pl-12 bg-white'>
          {/* <h3>{issue}</h3> */}
          <div>
            {issue?.data?.map((x)=><IssuesList key={x.id} info={x}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help;