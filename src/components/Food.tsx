"use client"
import Image from 'next/image'
import { it } from 'node:test'
import React from 'react'

const Food = ({data}:{data: any}) => {
    
  return (
    <div>
        {
            data?.recipes?.map((item:any) => (
                <div key={item.id}>
                    <Image src={item.image} alt='' width={300} height={300}/>
                    <h2>{item.name}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default Food