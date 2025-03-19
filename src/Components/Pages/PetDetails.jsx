import React, { useState } from 'react'

function PetDetails() {
    const [form, setForm] = useState(true)
 
    return (
        <div className='PetForm_details w-full h-screen flex  '>
            <div className='w-[50%]'>
                <img className='h-full w-full object-cover' src='../src/assets/kitty.jpg' alt='not found' />
            </div>
            <div className=' w-[50%] px-10 flex flex-col justify-center'>
                <h1 className='font-semibold text-3xl w-full bg-amber-50 py-1 px-2 rounded-md mb-4'>Pet Information</h1>
                
                 {
                    form ? 
                    <form className='  flex flex-col gap-3 px-2'>
                    <div className='flex gap-2'>
                        <label className='flex flex-col w-full gap-1'>
                            <label className='font-semibold text-[18px] ' for="text" > Pet's Name</label>
                            <input className='p-2 border border-slate-300 w-full rounded-md' type='text' placeholder='Enter Pet Name' />
                        </label>

                        <label className='flex flex-col w-full gap-1'>
                            <label className='font-semibold text-[18px] ' for="text" > Breed Type</label>
                            <input className='p-2 border border-slate-300 w-full rounded-md' type='text' placeholder='Enter Breed Type' />
                        </label>

                    </div>

                    <div className='flex gap-2'>
                        <label className='flex flex-col w-full gap-1'>
                            <label className='font-semibold text-[18px] ' for="text" > Color</label>
                            <input className='p-2 border border-slate-300 w-full rounded-md' type='text' placeholder='Choice Colour' />
                        </label>

                        <label className='flex flex-col w-full gap-1'>
                            <label className='font-semibold text-[18px] ' for="text" > Animal Type</label>
                            <input className='p-2 border border-slate-300 outline-0 w-full rounded-md hover:border hover:border-blue-500' type='text' placeholder='Enter Animal Type' />
                        </label>

                    </div>

                    <div className='flex gap-2'>
                        <label className='flex flex-col w-full gap-1'>
                            <label className='font-semibold text-[18px] ' for="text" > Diet</label>
                            <input className='p-2 border border-slate-300 w-full rounded-md' type='text' placeholder='Enter Diet' />
                        </label>

                        <label className='flex flex-col w-full gap-1'>
                            <label className='font-semibold text-[18px] ' for="text" > Pet's Age</label>
                            <input className='p-2 border border-slate-300 outline-0 w-full rounded-md hover:border hover:border-blue-500' type='text' placeholder='Enter Pets Age' />
                        </label>

                    </div>


                    <label className='flex flex-col w-full gap-1'>
                        <label className='font-semibold text-[18px]' for="text">Description</label>
                        <textarea className='rounded-md border border-slate-300' rows={5} cols={10}></textarea>
                    </label>
                    <div className='w-full flex justify-center'>
                        <button onClick={() => setForm(false)}
                          className='bg-black w-full text-white text-[18px] p-2 rounded-md'>Next</button>
                    </div>
                </form> 
                :
                <form className='form2nd  flex flex-col gap-3 px-2 '>
                <div className='flex gap-2'>
                    <label className='flex flex-col w-full  '>
                        <label for="text">Medication Name</label>
                        <input type='text' className='flex flex-col border border-black w-full  p-2 rounded-md' />
                    </label>
                    <label className='flex flex-col w-full  '>
                        <label for="text">Description</label>
                        <input type='text' className='w-full  p-2 border border-black rounded-md ' />
                    </label>
                    <label className='flex flex-col w-full '>
                        <label for="text">Time</label>
                        <select className=' p-2 border border-black rounded-md' >
                            <option>AM</option>
                            <option>PM</option>

                        </select>
                    </label>
                    <label className='flex flex-col w-full '>
                        <label for="text">Dosage </label>
                        <input type='text' className='w-full p-2  border border-black rounded-md' />
                    </label>
                </div>

                <div className='flex gap-2'>
                    <label className='flex flex-col w-full  '>
                        <label for="text">Medication Name</label>
                        <input type='text' className='flex flex-col border border-black w-full  p-2 rounded-md' />
                    </label>
                    <label className='flex flex-col w-full  '>
                        <label for="text">Description</label>
                        <input type='text' className='w-full  p-2 border border-black  rounded-md' />
                    </label>
                    <label className='flex flex-col w-full '>
                        <label for="text">Time</label>
                        <select className=' p-2 border border-black rounded-md' >
                            <option>AM</option>
                            <option>PM</option>

                        </select>
                    </label>
                    <label className='flex flex-col w-full '>
                        <label for="text">Dosage </label>
                        <input type='text' className='w-full p-2  border border-black rounded-md' />
                    </label>
                </div>

                <section className='flex  flex-col gap-2 '>
                    <h1 className='font-semibold text-xl'>Does the pet have vaccinations? Please indicate the name of the vaccines and when did it received it</h1>
                    <div className='flex gap-2'>
                        <label className='flex flex-col w-full  '>
                            <label for="text">Vaccine Name</label>
                            <input type='text' className='flex flex-col border border-black w-full  p-2 rounded-md' />
                        </label>
                        <label className='flex flex-col w-full  '>
                            <label for="text">Year</label>
                            <select itemType='number' className=' p-2 border border-black rounded-md' >


                            </select>
                        </label>
                    </div>

                    <div className='flex gap-2'>
                        <label className='flex flex-col w-full  '>
                            <label for="text">Vaccine Name</label>
                            <input type='text' className='flex flex-col border border-black w-full  p-2 rounded-md' />
                        </label>
                        <label className='flex flex-col w-full  '>
                            <label for="text">Year</label>
                            <select itemType='number' className=' p-2 border border-black rounded-md' >


                            </select>
                        </label>
                    </div>
                </section>

                <section>
                    <h1>Does the pet have vaccinations? Please indicate the name of the vaccines and when did it received it</h1>
                    <div className='flex gap-2'>
                        <label className='flex flex-col w-full  '>
                            <label for="text">Medication Name</label>
                            <input type='text' className='flex flex-col border border-black w-full  p-2 rounded-md' />
                        </label>
                        <label className='flex flex-col w-full  '>
                            <label for="text">Description</label>
                            <input type='text' className='w-full  p-2 border border-black  rounded-md' />
                        </label>

                        <label className='flex flex-col w-full '>
                            <label for="text">Dosage </label>
                            <input type='text' className='w-full p-2  border border-black rounded-md' />
                        </label>
                    </div>

                </section>
                <button onClick={() => setForm(true)}
                 className='btn w-full p-2 bg-blue-600 text-white font-semibold text-base rounded-md'>Submit</button>

            </form> 
                 }
                      

                  
                
            

       


            </div>



        </div>
    )
}

export default PetDetails