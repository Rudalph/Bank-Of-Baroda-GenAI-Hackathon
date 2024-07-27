"use client"
import React from 'react'
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";

const page = () => {

    const handleFormType = async (event) => {
        const question = event.currentTarget.querySelector('.card-body p').textContent;
        console.log(question);
        try {
            const response = await fetch('http://localhost:5003/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Response from Flask API:', data);
            } else {
                console.error('Error sending question to Flask API:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending question to Flask API:', error);
        }
    }

    return (
        <div className='mt-28 flex justify-center'>
            <Button className="bg-[#F86E23] m-4" onClick={() => document.getElementById('my_modal_4').showModal()}>Submit Data</Button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-7xl">
                    <h3 className="font-bold text-lg text-[#F86E23]">Add your data to our database</h3>
                    <div className="py-4 flex justify-evenly">
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                    </div>

                    <div className="py-4 flex justify-evenly">
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                    </div>


                    <div className="py-4 flex justify-evenly">
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                    </div>



                    <div className="py-4 flex justify-evenly">
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                    </div>


                    <div className="py-4 flex justify-evenly">
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                        <Input type="email" placeholder="Email" className="m-2" />
                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            <div>
                                <Button className="bg-[#F86E23] m-2">Submit</Button>
                                <Button className="bg-[#F86E23] m-2">Close</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>



            <Button className="bg-[#F86E23] m-4" onClick={() => document.getElementById('my_modal_5').showModal()}>Generate Form</Button>
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box w-11/12 max-w-7xl">
                    <h3 className="font-bold text-lg text-[#F86E23]">Generate Below Forms</h3>
                    <div className="py-4 flex justify-evenly">

                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>Aadhar Seeding Form</p>
                            </div>
                        </div>
                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>Customer Request Form</p>
                            </div>
                        </div>
                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>RTGS / NEFT Paying Slip </p>
                            </div>
                        </div>
                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>Net Banking form for Retail users</p>
                            </div>
                        </div>

                    </div>


                    <div className="py-4 flex justify-evenly">

                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>Net Banking form for Corporate users</p>
                            </div>
                        </div>
                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>Debit cum ATM Card</p>
                            </div>
                        </div>
                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>Credit Card - Application Form</p>
                            </div>
                        </div>
                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>Baroda Gift Card - Application Form</p>
                            </div>
                        </div>

                    </div>


                    <div className="py-4 flex justify-evenly">

                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>Account Opening Form for Individuals</p>
                            </div>
                        </div>
                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>Account Opening Form for Non-Individuals</p>
                            </div>
                        </div>
                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>CKYC Declaration form for Individuals</p>
                            </div>
                        </div>
                        <div className="card bg-[#FCE0D3] w-96 shadow-xl cursor-pointer m-2" onClick={handleFormType}>
                            <div className="card-body">
                                <p>CKYC Declaration Form for Corporate / Non-Individuals</p>
                            </div>
                        </div>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <div>
                                <Button className="bg-[#F86E23] m-2">Close</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default page