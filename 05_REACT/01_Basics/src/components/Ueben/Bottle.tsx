import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from './Button'
import Bottlepage from './Bottlepage'

type Props = { name: string, price: string, amount?:number, Orders:number, setOrders: React.Dispatch<React.SetStateAction<number>>, imgUri?: string }

export default function Bottle({ name, price, amount, imgUri, Orders, setOrders }: Props) {
    const [Buy, setBuy] = useState(0);
    const [currentAmount, setcurrentAmount] = useState(100);

    //useEffect(() => {
      //  setcurrentAmount(currentAmount - 1);
    //},[Buy])

    return (
        <div className='flex border-1 p-2 rounded-2xl shadow-2xl h-full w-full items-center'>
            <div className=''>
                <div className='m-2 text-2xl font-bold grid grid-cols-1 mb-12 ml-12'>{name}</div>
                <div className='m-2 ml-4 grid grid-cols-1'>
                    <div className=''>{price}</div>
                    <div className=''>{currentAmount}</div>
                </div>
                <div className='ml-4' onClick={() => {
                        if (currentAmount == 0){
                            alert("Out of Stock");
                        }
                        else
                        {
                            setBuy(Buy + 1);
                            setcurrentAmount(currentAmount - 1);
                            setOrders(Orders => Orders + 1);
                        }
                    }}>
                        
                    <Button text={'Buy: ' + Buy}/>
                </div>
            </div>

                <div className='flex justify-end w-full'>
                    <div className='border-neutral-700 border-10 w-50 rounded-3xl m-5 p-2'>
                        <img src={imgUri} alt=''/>
                    </div>
                </div>
        </div>
    )
}