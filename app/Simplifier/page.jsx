"use client"
import React, { useState } from 'react';
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { RiSendPlaneFill } from "react-icons/ri";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../Components/ui/drawer";
import { RiRobot2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const Page = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSummarizeClick = async () => {
    if (!file) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        console.log(data.summary);
        const cleanedSummary = data.summary.replace(/[*#]/g, '');
        console.log(cleanedSummary);
        setSummary(cleanedSummary);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5001/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      const answer = data;
      setChatHistory([...chatHistory, { question, answer: data.answer}]);
      console.log(answer);
      setQuestion(""); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className='mt-32 flex justify-center gap-10 items-center align-middle flex-wrap'>
        <Input
          id="picture"
          type="file"
          className="w-full max-w-xs border border-[#F86E23] p-2"
          onChange={handleFileChange}
        />
        <Button type="submit" className="bg-[#F86E23]" onClick={handleSummarizeClick}>Upload</Button>
        <Drawer>
          <DrawerTrigger className='bg-[#F86E23] text-white p-2 border rounded-md'>Summarize</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Summary Of Your Document</DrawerTitle>
            </DrawerHeader>
            <div className='p-10'>
              {summary}
            </div>
            <DrawerClose>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerContent>
        </Drawer>
      </div>

      <div className='w-full fixed bottom-0 flex justify-center align-middle items-center mb-10'>
        <div className="flex w-full max-w-3xl items-center space-x-2 relative">
          <Input
            type="text"
            placeholder="Message Zanith AI"
            value={question}
            onChange={handleQuestionChange}
            className="p-6 border border-gray-300 focus:border-gray-300"
          />
          <Button
            type="button"
            onClick={handleSubmit}
            className="absolute right-1 px-2 py-1 bg-transparent hover:bg-transparent text-[#F86E23]"
          >
            <RiSendPlaneFill size={27} />
          </Button>
        </div>
      </div>

      <div className='mt-10'>
        {/* Chat bubbles */}
        <div className="chat chat-start">
          <div className="chat-header">
          </div>
        </div>
        <div className='mt-10 flex justify-center overflow-hidden'>
          <div className='mt-10 w-4/5 items-center align-middle overflow-y-auto style={{ maxWidth: 100%, maxHeight: 100vh }}'>
            {chatHistory.map((chat, index) => (
              <div key={index}>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className=" w-32rounded-full text-[#F86E23]">
                      <RiRobot2Line size={50} />
                    </div>
                  </div>
                  <div className="chat-bubble bg-[#FCE0D3] text-black">{chat.question}</div>
                </div>

                <div className="chat chat-end p-5">
                  <div className="chat-image avatar">
                    <div className=" w-32rounded-full text-[#F86E23]">
                      <FaRegUser size={50} />
                    </div>
                  </div>
                  <div className="chat-bubble bg-[#FCE0D3] text-black">{chat.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
