import { forwardRef } from "react";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";

const Contact = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col justify-center items-center w-full pt-24 pb-24"
    >
      <div className="flex flex-col justify-center items-center prose prose-invert prose-base lg:prose-lg 2xl:prose-xl max-w-none w-full md:w-10/12 lg:w-8/12">
        <motion.h2
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            delay: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="flex flex-col justify-center items-center"
        >
          Let&#39;s get in touch
          <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
        </motion.h2>
        <motion.p
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="text-center"
        >
          Even though I&#39;m not actively looking for any new opportunities, my
          inbox is always open. Feel free to reach out if you have any
          questions, a proposal, or simply want to connect.
        </motion.p>
        <motion.a
          initial={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          href="mailto:andre.m.pacheco.97@gmail.com"
          className="flex justify-center items-center border-2 rounded-md py-2 px-4 text-white no-underline lg:hover:text-green-500 lg:hover:border-green-500"
          target="_blank"
        >
          <SiGmail size={24} className="mr-2" />
          Contact me
        </motion.a>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
