import { forwardRef } from "react";
import { SiGmail } from "react-icons/si";

const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col justify-center items-center w-full pt-24 pb-24"
    >
      <div className="flex flex-col justify-center items-center prose prose-invert prose-sm md:prose-base 2xl:prose-xl max-w-none w-full md:w-10/12 lg:w-8/12">
        <h2 className="flex flex-col justify-center items-center">
          Let&#39;s get in touch
          <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
        </h2>
        <p className="text-center">
          Even though I&#39;m not actively looking for any new opportunities, my
          inbox is always open. Feel free to reach out if you have any
          questions, a proposal, or simply want to connect.
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
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
