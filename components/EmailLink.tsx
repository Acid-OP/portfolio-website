export default function EmailLink() {
  const email = "gauravkapur596@gmail.com";
  const mailtoLink = `mailto:${email}`;

  return (
    <a 
      href={mailtoLink}
      className="text-base text-black font-medium font-inter underline decoration-gray-400 decoration-1 underline-offset-6 hover:decoration-black transition-colors duration-200 cursor-pointer"
    >
      {email}
    </a>
  );
}