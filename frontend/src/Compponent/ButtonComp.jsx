import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function ButtonComp() {
  
    const [count, setCount] = useState(0)
    const [isReached, setReached] = useState(false)

    const countHandler = ()=>{

       
        if(isReached){

            setCount((prev)=> prev - 1)
        }
        else{
            setCount((prev)=> prev + 1)

        }
        
    }

    useEffect(()=>{

        if(count >= 10){
            setReached(true)
        }
        else if(count <= 0){
            setReached(false)
        }

    }, [count])

    return (
        <>
            <div>Counter: {count}</div>
            <Button colorScheme='blue' onClick = {countHandler}>Button</Button>
        </>
    )
}
