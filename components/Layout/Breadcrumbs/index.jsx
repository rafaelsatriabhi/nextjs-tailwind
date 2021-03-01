import { useRouter } from 'next/router'

const BreadCrumbs = () => {

  const router = useRouter()

  const currentUrlInArray = router.pathname.split('/')
  currentUrlInArray[0] = 'Home'
  return (

    <ul className="flex flex-row overflow-x-auto bg-gray-100 mt-20 py-10 pb-6 md:px-10">

      {currentUrlInArray.map((el, index)=>{
        if(index === currentUrlInArray.length-1) {
          if(el.includes('-')){
            return <li className="inline-block mx-3 font-extrabold" role="button">{el.split('-').join(' ')}</li>
          } else {
            return <li className="inline-block mx-3 font-extrabold" role="button">{el}</li>
          }
        } else {
          if(el.includes('-')){
           return (
           <>
            <li className="flex-shrink-0 inline-block mx-3" role="button">{el.split('-').join(' ')}</li>
            {'/'}
          </>
          )
          } else {
           return (
            <>
             <li className="flex-shrink-0 inline-block mx-3" role="button">{el}</li>
             {'/'}
           </>
           )
          }
        }
      })}
    </ul>
  )
}

export default BreadCrumbs
