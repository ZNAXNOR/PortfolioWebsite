"use client";

import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { useState, useEffect, useRef } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

// Define the type for the API response
type BotResponse = {
    message: {
        content: string;
    };
};

const Chat = () => {
    const [messages, setMessages] = useState<{ from: string; text: string }[]>([
        { from: "bot", text: "Hello! This is OBot. How can I assist you today?" },
    ]);
    const [input, setInput] = useState("");
    const [botTyping, setBotTyping] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement | null>(null); // Create ref for scrolling
    const messagesContainerRef = useRef<HTMLDivElement | null>(null); // Create ref for message container

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        setMessages([...messages, userMessage]);
        setInput("");
        setBotTyping(true);

        try {
            const response = await fetch("/api/huggingface?type=chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch response.");
            }

            const data: BotResponse = await response.json();
            const botResponse = { from: "bot", text: data.message.content };

            setMessages((prev) => [...prev, botResponse]);
        } catch (error) {
            console.error("Error fetching bot response:", error);
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: "Sorry, something went wrong. Please try again later." },
            ]);
        }

        setBotTyping(false);
    };

    // Scroll to bottom whenever messages change or bot stops typing
    useEffect(() => {
        if (messagesEndRef.current && messagesContainerRef.current) {
            // Scroll the container to the last message
            messagesContainerRef.current.scrollTop = messagesEndRef.current.offsetTop;
        }
    }, [messages, botTyping]); // Dependency array includes both `messages` and `botTyping`

    return (
        <div className="flex flex-col h-screen p-6 -pt-48 bg-light dark:bg-dark transition-colors duration-300 ease-in-out">
            {/* Banner Section */}
            <div className="inline-block bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-600 text-white py-4 rounded-lg sm:rounded-full px-10 mb-4 shadow-lg">
                <h1 className="text-xl font-semibold flex items-center space-x-3">
                    <i className="bi bi-robot shadow-lg"></i>
                    <span>Ask questions and get insightful answers with this AI-powered chatbot.</span>
                </h1>
            </div>

            {/* Messages Section */}
            <div
                id="messages"
                ref={messagesContainerRef}
                className="flex flex-col space-y-4 p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-indigo-200 scrollbar-rounded-lg"
                style={{ maxHeight: "calc(100vh - 120px)" }} // Adjust height to leave room for the input field
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.from === "bot" ? "items-start" : "justify-end"}`}
                    >
                        {/* Bot Avatar */}
                        {message.from === "bot" && (
                            <div className="flex-shrink-0 mt-10">
                                <i className="bi bi-robot text-black dark:text-white text-xl"></i>
                            </div>
                        )}

                        {/* Message Content */}
                        <div
                            className={`text-md leading-tight max-w-3xl ${
                                message.from === "bot"
                                    ? "ml-3 my-10" // Bot Response
                                    : "px-4 py-3 rounded-xl bg-blue-500 text-white rounded-br-none" // User Bubble
                            }`}
                            style={{
                                whiteSpace: "pre-line", // Preserve newlines in bot responses
                            }}
                            dangerouslySetInnerHTML={{ __html: message.text }}
                        ></div>
                    </div>
                ))}

                {/* Typing Animation */}
                {botTyping && (
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <i className="bi bi-robot text-black dark:text-white text-xl"></i>
                        </div>
                        <div className="ml-3 flex space-x-1">
                            <span className="animate-pulse bg-gray-400 h-2 w-2 rounded-full"></span>
                            <span className="animate-pulse bg-gray-400 h-2 w-2 rounded-full"></span>
                            <span className="animate-pulse bg-gray-400 h-2 w-2 rounded-full"></span>
                        </div>
                    </div>
                )}

                {/* Scroll Target */}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Section */}
            <div className="sticky bottom-0 px-4 pb-2 flex flex-col items-center">
                <div className="relative w-full max-w-screen-sm lg:max-w-screen-lg">
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Say something..."
                        autoComplete="off"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        className="text-md w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-5 pr-12 py-3 bg-gray-100 border-2 border-gray-300 focus:border-indigo-500 rounded-full"
                    />

                    {/* Send Button */}
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-8 w-8 text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200 ease-in-out focus:outline-none"
                        onClick={handleSend}
                    >
                        <ArrowUpIcon />
                    </button>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 mt-2 text-center">
                    This chatbot can make mistakes.
                </p>
            </div>
        </div>
    );
};

export default Chat;
