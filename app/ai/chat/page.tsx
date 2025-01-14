"use client";

import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Image from "next/image";

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

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        setMessages([...messages, userMessage]);
        setInput("");
        setBotTyping(true);

        try {
            const response = await fetch("/api/huggingface?type=comp", {
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

    return (
        <div className="flex flex-col h-screen p-6 -pt-48">
            {/* Messages Section */}
            <div id="messages" className="flex flex-col space-y-4 p-4 overflow-y-auto flex-1">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.from === "bot" ? "items-start" : "justify-end"}`}
                    >
                        {/* Bot Avatar */}
                        {message.from === "bot" && (
                            <div className="flex-shrink-0 mt-10">
                                <Image
                                    src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
                                    alt="Bot Avatar"
                                    className="w-6 h-6 rounded-full"
                                    width={24}
                                    height={24}
                                />
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
                            <Image
                                src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
                                alt="Bot Avatar"
                                className="w-6 h-6 rounded-full"
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="ml-3 flex space-x-1">
                            <span className="animate-pulse bg-gray-400 h-2 w-2 rounded-full"></span>
                            <span className="animate-pulse bg-gray-400 h-2 w-2 rounded-full"></span>
                            <span className="animate-pulse bg-gray-400 h-2 w-2 rounded-full"></span>
                        </div>
                    </div>
                )}
            </div>
    
            {/* Input Section */}
            <div className="sticky bottom-0 px-4 pb-2 flex flex-col items-center bg-white dark:bg-dark">
                <div className="relative w-full max-w-screen-sm lg:max-w-screen-lg">
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Say something..."
                        autoComplete="off"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        className="
                            text-md w-full
                            focus:outline-none focus:placeholder-gray-400
                            text-gray-600 placeholder-gray-600
                            pl-5 pr-12 py-3
                            bg-gray-100
                            border-2 border-gray-300
                            focus:border-blue-500 rounded-full"
                    />

                    {/* Send Button */}
                    <button
                        type="button"
                        className="
                            absolute right-2 top-1/2 transform -translate-y-1/2
                            flex items-center justify-center
                            h-8 w-8
                            text-white bg-blue-500
                            hover:bg-blue-600
                            rounded-full
                            transition duration-200 ease-in-out
                            focus:outline-none"
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
