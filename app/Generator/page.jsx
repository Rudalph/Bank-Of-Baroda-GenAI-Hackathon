"use client"
import React, { useState } from 'react'
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { PDFDocument, rgb } from 'pdf-lib';

const PAGE_WIDTH = 800; 
const PAGE_HEIGHT = 800; 
const MARGIN = 50; 
const LINE_HEIGHT = 14; 

const page = () => {

    const [doc, setDoc] = useState("The document will be displayed here...");

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
                setDoc(formatResponse(data.response));
                console.log('Response from Flask API:', data);
            } else {
                console.error('Error sending question to Flask API:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending question to Flask API:', error);
        }
    }

    const formatResponse = (response) => {
        const boldText = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        const formatted = boldText
            .replace(/[\n\r]+/g, '<br /><br />')
            .replace(/\s{2,}/g, ' ')
            .replace(/(\.\.\.\.)+/g, '...')
            .replace(/[\(\)\[\]\{\}]+/g, '')
            .trim();
        return formatted;
    }

    const handleGeneratePDF = async () => {
        const pdfDoc = await PDFDocument.create();
        let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
        let yPosition = PAGE_HEIGHT - MARGIN; // Start near the top of the page

        const pageContent = document.querySelector('.pdf-content')
       
        // Sample content
        const content = pageContent.innerText;; // Replace this with your actual content
        const lines = content.split('\n'); // Split content into lines for easier handling
    
        // Function to add a line of text to the page
        const addTextToPage = (text) => {
            page.drawText(text, {
                x: MARGIN,
                y: yPosition,
                size: 12,
                color: rgb(0, 0, 0),
            });
            yPosition -= LINE_HEIGHT;
        };
    
        // Add content to the page
        for (const line of lines) {
            // Check if the current line fits on the page
            if (yPosition < MARGIN) {
                // Add a new page if content does not fit
                page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
                yPosition = PAGE_HEIGHT - MARGIN; // Reset y position for new page
            }
            addTextToPage(line);
        }
    
        // Save the PDF
        const pdfBytes = await pdfDoc.save();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([pdfBytes], { type: 'application/pdf' }));
        link.download = 'generated.pdf';
        link.click();
    };

    return (
        <div>
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
            <div className='flex justify-center align-middle items-center pt-10 pb-10 px-40 mx-20 mt-10 mb-10 text-justify bg-[#FCE0D3] relative rounded-2xl pdf-content' contentEditable suppressContentEditableWarning>
                <div dangerouslySetInnerHTML={{ __html: doc }} />
            </div>
            <div className='flex justify-center mt-10'>
            <Button className="bg-[#F86E23] m-2" onClick={handleGeneratePDF}>Generate PDF</Button>
            </div>
        </div>
    )
}

export default page