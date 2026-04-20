import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is AI employee?",
    answer:
      "An AI employee is a role-based digital worker designed to handle real business tasks. It operates inside your tools, follows your workflows, learns your business over time, and takes ownership of specific functions - like marketing, support, or operations - so work gets done consistently without constant supervision.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a money-back guarantee scheme to ensure your satisfaction with Sintra AI services. If you're not happy with the platform, we allow a specified guarantee period, when you can request a full refund.",
  },
  {
    question: "Can I invite my team to use Sintra?",
    answer:
      "Absolutely! Sintra allows you to collaborate with your team by inviting them to the platform. You can work together seamlessly - all in one place. It's perfect for boosting team productivity and coordination without any additional handovers.",
  },
  {
    question: "What can I use Sintra's AI employees for?",
    answer:
      "Sintra is designed to boost productivity and simplify your business operations. You can use it for tasks like administrative work, lead generation, content creation, email outreach, social media management, project management, and much more. It's like having an AI Helper that completes your day-to-day tasks.",
  },
  {
    question: "How to use Sintra's AI employees?",
    answer:
      "Using Sintra AI is very intuitive and simple. Every AI worker runs as a chatbot. We also provide a variety of resources to help you make the most of our platform. Browse our blog, case studies, or the help center. For developer users, we also offer guides and documentation to assist in building and customizing AI agents. These materials are designed to guide you through using the platform effectively and answer any questions you may have.",
  },
  {
    question: "Can AI employees replace human employees?",
    answer:
      "No. AI employees are designed to support and extend your team, not replace it. They handle repetitive and operational work, so human employees can focus on strategy, creativity, and decision-making where people add the most value.",
  },
];

const Faq = () => {
  return (
    <section className="bg-black w-full px-[20px] md:px-[44px] lg:px-[76px] py-20 md:py-28">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[79px]">
        <div className="lg:w-[38%] xl:w-[38%] shrink-0 xl:px-11">
          <h2 className="text-white text-[36px] md:text-[48px] lg:text-[56px] font-walsham tracking-tight leading-[1.1]">
            AI Employee FAQs. Let&apos;s clear things up.
          </h2>
          <p className="text-neutral-400 text-[15px] md:text-[17px] font-walsham leading-[1.5] mt-6">
            Yes, we understand - AI-powered solutions, business automation
            tools, AI workers, digital AI staff... a lot of big words can get
            confusing.
          </p>
          <p className="text-neutral-400 text-[15px] md:text-[16px] font-walsham leading-[1.5] mt-4">
            We&apos;re here to clear the air - and if you still feel the need to
            ask AI questions - Cassie is ready to answer 24/7.
          </p>
        </div>

        <div className="flex-1 lg:px-11">
          <Accordion type="single" collapsible className="flex flex-col ">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-neutral-600 rounded-none!"
              >
                <AccordionTrigger className="py-[21px] text-white text-[17px] md:text-[18px] font-walsham font-medium hover:no-underline cursor-pointer **:data-[slot=accordion-trigger-icon]:size-8! **:data-[slot=accordion-trigger-icon]:text-white!">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400 text-[17px] font-walsham leading-[1.6] pb-[21px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
