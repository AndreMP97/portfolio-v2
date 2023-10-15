import { forwardRef } from "react";
import { SiGmail } from "react-icons/si";

const NewContact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="flex flex-col w-full text-white pt-24">
      <h2 className="font-semibold text-center text-2xl lg:text-3xl">
        Let's get in touch
      </h2>
      <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
      <p className="mt-5 lg:mt-6 text-base lg:text-lg">
        Even though I'm not actively looking for any new opportunities, my inbox
        is always open. Feel free to reach out if you have any questions, a
        proposal, or simply want to connect.
      </p>
      <button className="flex w-44 self-center border-2 rounded-md py-2 px-4 text-white lg:hover:text-green-500 lg:hover:border-green-500 mt-5 lg:mt-6">
        <a
          href="mailto:andre.m.pacheco.97@gmail.com"
          className="flex w-full justify-center items-center no-underline "
          target="_blank"
        >
          <SiGmail size={24} className="mr-2" />
          Contact me
        </a>
      </button>
    </section>
  );
});

NewContact.displayName = "NewContact";

export default NewContact;
