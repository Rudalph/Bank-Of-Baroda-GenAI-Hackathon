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
        window.location.reload();
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "cities"));
            const fetchedData = [];
            querySnapshot.forEach((doc) => {
                fetchedData.push(doc.data());
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
            <div className='flex justify-center align-middle items-center mt-10'>
                <ResponsiveContainer width="80%" height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="timestamp" />
                        <YAxis/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="travel" fill="#F86E23"/>
                        <Bar dataKey="health" fill="#82ca9d" />
                        <Bar dataKey="education" fill="#8884d8" />
                        <Bar dataKey="lifestyle" fill="#ff7300" />
                        <Bar dataKey="food" fill="#00C49F" />
                        <Bar dataKey="shopping" fill="#FF8042" />
                        <Bar dataKey="entertainment" fill="#d0ed57" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default page