import { forwardRef } from "react";
import { SiGmail } from "react-icons/si";

const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col w-full pt-24 pb-24"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="prose prose-invert prose-sm md:prose-base 2xl:prose-xl max-w-none md:w-[600px]">
          <div className="flex flex-col justify-center items-center">
            <h2 className="flex justify-center items-center border-b-4 border-zinc-500 pb-2 w-80">
              Let&#39;s get in touch
            </h2>
            <p>
              Even though I&#39;m not actively looking for any new
              opportunities, my inbox is always open. Feel free to reach out if you
              have any questions, a proposal, or simply want to connect.
            </p>
            <a
              href="mailto:andre.m.pacheco.97@gmail.com"
              className="flex justify-center items-center border-2 rounded-md py-2 px-4 text-white no-underline lg:hover:text-green-500 lg:hover:border-green-500"
              target="_blank"
            >
              <SiGmail size={24} className="mr-2" />
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
