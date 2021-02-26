const BreadCrumbs = () => {
  return (
    <ul className="flex flex-row overflow-x-auto bg-gray-100 mt-20 py-10 pb-6">
        <li className="inline-block mx-3" role="button">Home</li>
        /
        <li className="flex-shrink-0 inline-block mx-3" role="button">Office Room</li>
        /
        <li className="inline-block mx-3 font-extrabold" role="button">Details</li>
    </ul>
  )
}

export default BreadCrumbs
