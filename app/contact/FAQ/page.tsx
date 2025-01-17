import React from "react";

const FAQSection = () => {
  const faqData = [
    {
      question: "What's the best thing about Switzerland?",
      answer: "I don’t know, but the flag is a big plus.",
    },
    {
      question: "How do you make holy water?",
      answer: "You boil the hell out of it.",
    },
    {
      question: "Why do you never see elephants hiding in trees?",
      answer: "Because they're so good at it.",
    },
    {
      question: "What do you call someone with no body and no nose?",
      answer: "Nobody knows.",
    },
    {
      question: "Why can't you hear a pterodactyl go to the bathroom?",
      answer: "Because the pee is silent.",
    },
    {
      question: "Why did the invisible man turn down the job offer?",
      answer: "He couldn’t see himself doing it.",
    },
  ];

  return (
    <div className="py-32 px-6 lg:px-12">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
        Looking for genuine questions? Sorry, no contact from the visitors, let alone frequent! Anyway, if you have any queries or questions, send me an email and I’ll get back to you as soon as I can. In the meantime, enjoy some jokes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {faqData.map((faq, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {faq.question}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
