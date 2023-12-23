import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={className+" px-3 md:px-8 lg:px-10 w-[100%]"}>
{
     children
}
    </div>
  )
}

export default Container