import { ContactForm } from "../contact-form";

const blockDescription = `I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.`;

export function ContactBlock() {
  return (
    <div className="container flex gap-6">
      <div className="flex flex-1 flex-col gap-9">
        <h3 className="text-heading-xl">Contact</h3>
        <p className="text-body">{blockDescription}</p>
      </div>
      <div className=" flex-1">
        <ContactForm />
      </div>
    </div>
  );
}
