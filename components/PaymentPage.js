"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"
import Image from 'next/image'

const PaymentPage = ({ username }) => {
    // const {data : session} = useSession()
    const [paymentform, setPaymentform] = useState({name : ""})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()
    

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('Payment has been made 💸!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }

        router.push(`${username}`)

    }, [])


    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })

    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const pay = async (amount) => {
        // Get the order id
        let a = await initiate(amount, username, paymentform);
        let orderId = a.id

        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount,
            "currency": "INR",
            "name": "GetMeAChai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }



    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                 />

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full bg-red-50 relative'>
                <img className='object-cover w-full h-48 md:h-[350px]'  src={currentUser.coverpic} alt="" />
                <div className='absolute -bottom-20 md:right-[45%] right-[38%] border-white border-2 overflow-hidden rounded-full size-36'>
                    <img className='rounded-full object-cover size-36' width={128} height={128} src={currentUser.profilepic} alt="" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-24 flex-col gap-2">
                <div className='font-bold flex flex-col items-center text-lg'>
                    {username}
                </div>
                <div className='text-slate-300'>
                    Lets help {username} get a Coffee!
                </div>
                <div className='text-slate-300'>
                    {payments.length} Payments . ₹{payments.reduce((a,b) => a + b.amount, 0)} raised
                </div>

                <div className="payment flex gap-3 w-[80%] mt-11 flex-col md:flex-row">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show the list of all the supporters as a leaderboard */}
                        <h2 className='my-5 text-center text-2xl font-bold'>Top 10 Supporters</h2>
                        <ul className='mx-5 text-lg '>
                            {payments.length == 0 && <li className='text-center'>No payments yet</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <Image width={35} height={35} src="avatar.gif" alt="user avatar" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message &ldquo;{p.message}&rdquo;
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className="makePayment  w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className="my-5 text-2xl font-bold">Make a Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            {/* input for name and message */}
                            <div>
                                <input onChange={handleChange} value={paymentform.name} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            </div>
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={() => pay(Number.parseInt(paymentform.amount * 100))} className='text-white bg-gradient-to-br from-purple-700 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-purple-100' disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount < 1}>Pay</button>
                        </div>

                        {/* Or choose from these amounts */}
                        <div className="flex flex-col md:flex-row gap-2 mt-5">
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800" onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800" onClick={() => pay(5000)}>Pay ₹50</button>
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800" onClick={() => pay(10000)}>Pay ₹100</button>
                            <button className="bg-slate-800 p-3 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-900 from-blue-700 to-purple-800" onClick={() => pay(50000)}>Pay ₹500</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PaymentPage


