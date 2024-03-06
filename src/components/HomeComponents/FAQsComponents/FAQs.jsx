import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

const FAQs = () => {
  return (
    <section className="w-full md:con__height bg-white  px-8  md:px-16 lg:px-20 2xl:px-32  relative poppins-regular  pt-20 pb-12">
      <h1 className="poppins-bold text-3xl text-center mb-28">
        Frequently Asked Questions
      </h1>
      <div className="w-full ">
        <div className="md:w-[70%] 2xl:w-1/2 flex item-center justify-center mx-auto">
          <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="item-1" className="border-none mb-8">
              <AccordionTrigger className="border border-gray-100 p-4 no-underline hover:no-underline">
                What is Fairshop about?
              </AccordionTrigger>
              <AccordionContent className="border p-4 border-gray-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis minus eos neque, et est recusandae dignissimos eum
                eveniet nihil officia quidem corrupti, sapiente voluptatum
                beatae. Quidem porro placeat animi eaque.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none mb-8">
              <AccordionTrigger className="border border-gray-100 p-4 no-underline hover:no-underline">
                How can I sell on Fairshop?
              </AccordionTrigger>
              <AccordionContent className="border border-gray-100 p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis minus eos neque, et est recusandae dignissimos eum
                eveniet nihil officia quidem corrupti, sapiente voluptatum
                beatae. Quidem porro placeat animi eaque.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-none mb-8">
              <AccordionTrigger className="border border-gray-100 p-4 no-underline hover:no-underline">
                How does Payment work on Fairshop?
              </AccordionTrigger>
              <AccordionContent className="border border-gray-100 p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis minus eos neque, et est recusandae dignissimos eum
                eveniet nihil officia quidem corrupti, sapiente voluptatum
                beatae. Quidem porro placeat animi eaque.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-none mb-8">
              <AccordionTrigger className="border border-gray-100 p-4 no-underline hover:no-underline">
                How can i reach your customer service support?
              </AccordionTrigger>
              <AccordionContent className="border border-gray-100 p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis minus eos neque, et est recusandae dignissimos eum
                eveniet nihil officia quidem corrupti, sapiente voluptatum
                beatae. Quidem porro placeat animi eaque.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
