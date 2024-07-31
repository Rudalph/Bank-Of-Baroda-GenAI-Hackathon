"use client"
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from '@/Components/firebase'
import React, { useEffect, useState } from 'react'
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const page = () => {

    const [amount, setAmount] = useState({
        travel: '',
        health: '',
        education: '',
        lifestyle: '',
        food: '',
        shopping: '',
        entertainment: ''
    });

    const [travels, setTravels] = useState([]);

    const handleSubmitData = async () => {
        console.log(amount);
        await addDoc(collection(db, "cities"), {
            travel: amount.travel,
            health: amount.health,
            education: amount.education,
            lifestyle: amount.lifestyle,
            food: amount.food,
            shopping: amount.shopping,
            entertainment: amount.entertainment,
            timestamp: Timestamp.now()
        });
        alert("data added!")
        try {
            const response = await fetch('http://localhost:5006/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...amount  // Send the entire amount object
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('API Response:', data.TravelOffer);
            setTravels(data.TravelOffer)
            console.log("travels is here",travels);
            alert("Data added and API called successfully!");
        } catch (error) {
            console.error('Error making API call:', error);
            alert("Failed to make API call");
        }
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "cities"));
            const fetchedData = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                // Convert Timestamp to a readable format
                if (data.timestamp) {
                    data.timestamp = data.timestamp.toDate().toLocaleString(); // Converts to a readable string format
                }
                fetchedData.push(data);
            });
            setData(fetchedData);
        };
        fetchData();
    }, []);
    

    return (
        <div>
            <div>
                <div className='flex justify-center align-middle items-center content-center flex-wrap mt-28'>
                    <Card className="w-[350px] border-[#F86E23] m-5">
                        <CardHeader>
                            <CardTitle><p className='text-[#F86E23]'>Travel</p></CardTitle>
                            <CardDescription>Expenditure on travelling in a month?</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Amount</Label>
                                        <Input id="name" placeholder="Enter amount in rupees" type="number" onChange={(e) => setAmount((prev) => ({ ...prev, travel: e.target.value }))} />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="framework">More Details</Label>
                                        <Select>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="next">Travel daily</SelectItem>
                                                <SelectItem value="sveltekit">Multiple times a week</SelectItem>
                                                <SelectItem value="astro">Once in a month</SelectItem>
                                                <SelectItem value="nuxt">None</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>


                    <Card className="w-[350px] border-[#F86E23] m-5">
                        <CardHeader>
                            <CardTitle><p className='text-[#F86E23]'>Health & Insurance</p></CardTitle>
                            <CardDescription>Expenditure on medicines in a month</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Amount</Label>
                                        <Input id="name" placeholder="Enter amount in rupees" type="number" onChange={(e) => setAmount((prev) => ({ ...prev, health: e.target.value }))} />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="framework">More details</Label>
                                        <Select>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="next">Need daily medicine</SelectItem>
                                                <SelectItem value="sveltekit">No Medication required</SelectItem>
                                                <SelectItem value="astro">Multiple times a week</SelectItem>
                                                <SelectItem value="nuxt">Once in a month</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>


                    <Card className="w-[350px] border-[#F86E23] m-5">
                        <CardHeader>
                            <CardTitle><p className='text-[#F86E23]'>Education</p></CardTitle>
                            <CardDescription>Expenditure on education in a month</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Amount</Label>
                                        <Input id="name" placeholder="Enter amount in rupees" type="number" onChange={(e) => setAmount((prev) => ({ ...prev, education: e.target.value }))} />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="framework">More details</Label>
                                        <Select>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="next">1 Student</SelectItem>
                                                <SelectItem value="sveltekit">2 Students</SelectItem>
                                                <SelectItem value="astro">More than 2 students</SelectItem>
                                                <SelectItem value="nuxt">No Students</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>


                <div className='flex justify-center align-middle items-center content-center flex-wrap'>
                    <Card className="w-[350px] border-[#F86E23] m-5">
                        <CardHeader>
                            <CardTitle><p className='text-[#F86E23]'>Home & Lifestyle</p></CardTitle>
                            <CardDescription>Expenditure on Lifestyle in a month.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Amount</Label>
                                        <Input id="name" placeholder="Enter amount in rupees" type="number" onChange={(e) => setAmount((prev) => ({ ...prev, lifestyle: e.target.value }))} />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="framework">More details</Label>
                                        <Select>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="next">Low Lifestyle</SelectItem>
                                                <SelectItem value="sveltekit">Moderate Lifestyle</SelectItem>
                                                <SelectItem value="astro">High Lifestyle</SelectItem>
                                                <SelectItem value="nuxt">None</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>


                    <Card className="w-[350px] border-[#F86E23] m-5">
                        <CardHeader>
                            <CardTitle><p className='text-[#F86E23]'>Food & Beverages</p></CardTitle>
                            <CardDescription>Expenditure on Food in a month.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Amount</Label>
                                        <Input id="name" placeholder="Enter amount in rupees" type="number" onChange={(e) => setAmount((prev) => ({ ...prev, food: e.target.value }))} />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="framework">More details</Label>
                                        <Select>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="next">High</SelectItem>
                                                <SelectItem value="sveltekit">Low</SelectItem>
                                                <SelectItem value="astro">Moderate</SelectItem>
                                                <SelectItem value="nuxt">None</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>


                    <Card className="w-[350px] border-[#F86E23] m-5">
                        <CardHeader>
                            <CardTitle><p className='text-[#F86E23]'>Shopping</p></CardTitle>
                            <CardDescription>Expenditure on Shopping in a month.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Ammount</Label>
                                        <Input id="name" placeholder="Enter amount in rupees" type="number" onChange={(e) => setAmount((prev) => ({ ...prev, shopping: e.target.value }))} />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="framework">More details</Label>
                                        <Select>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="next">High</SelectItem>
                                                <SelectItem value="sveltekit">Moderate</SelectItem>
                                                <SelectItem value="astro">Low</SelectItem>
                                                <SelectItem value="nuxt">None</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>


                <div className='flex justify-center align-middle items-center content-center flex-wrap'>
                    <Card className="w-[350px] border-[#F86E23] m-5">
                        <CardHeader>
                            <CardTitle><p className='text-[#F86E23]'>Entertainment</p></CardTitle>
                            <CardDescription>Expenditure on Entertainment in a month.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name">Amount</Label>
                                        <Input id="name" placeholder="Enter amount in rupees" type="number" onChange={(e) => setAmount((prev) => ({ ...prev, entertainment: e.target.value }))} />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="framework">More details</Label>
                                        <Select>
                                            <SelectTrigger id="framework">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent position="popper">
                                                <SelectItem value="next">High</SelectItem>
                                                <SelectItem value="sveltekit">Low</SelectItem>
                                                <SelectItem value="astro">Moderate</SelectItem>
                                                <SelectItem value="nuxt">None</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className='flex justify-center align-middle items-center'><Button className="bg-[#F86E23] m-2" onClick={handleSubmitData}>Submit Data</Button></div>
            <div className='flex justify-center align-middle items-center mt-32'>
                <ResponsiveContainer width="80%" height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="timestamp"/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="travel" fill="#F86E23" />
                        <Bar dataKey="health" fill="#82ca9d" />
                        <Bar dataKey="education" fill="#8884d8" />
                        <Bar dataKey="lifestyle" fill="#ff7300" />
                        <Bar dataKey="food" fill="#00C49F" />
                        <Bar dataKey="shopping" fill="#FF8042" />
                        <Bar dataKey="entertainment" fill="#d0ed57" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <section className="mx-auto w-full max-w-7xl px-4 py-4 mt-32">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Employees</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all employees. You can add new employees, edit or delete existing
                            ones.
                        </p>
                    </div>

                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-[#F86E23] md:rounded-lg">
                                <table className="min-w-full divide-y divide-[#F86E23]">
                                    <thead className="bg-[#FCE0D3]">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                <span>Offers</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Details
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Validity
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Code
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Link
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                    {travels.map((offer, index) => (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="">
                                                        <div className="text-sm font-medium text-gray-900">{offer.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4">
                                                <div className="text-sm text-gray-900 ">details</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="text-sm text-gray-900 ">validity</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                code
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4  text-sm font-medium">
                                                <a href="#" className="text-gray-700">
                                                    link
                                                </a>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page