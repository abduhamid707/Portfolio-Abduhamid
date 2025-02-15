import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import portfolioData from '../db/local.js';

const Contact = () => {
  const { t } = useTranslation();
  const [activeIcon, setActiveIcon] = useState(null);

  const contacts = [
    { id: 'phone', icon: 'bi-telephone', link: `tel:${portfolioData.contact.phone}`, text: portfolioData.contact.phone },
    { id: 'telegram', icon: 'bi-telegram', link: portfolioData.contact.telegram, text: 'Telegram' },
    { id: 'email', icon: 'bi-envelope', link: `mailto:${portfolioData.contact.email}`, text: portfolioData.contact.email },
    { id: 'instagram', icon: 'bi-instagram', link: portfolioData.contact.instagram, text: 'Instagram' },
    { id: 'linkedin', icon: 'bi-linkedin', link: portfolioData.contact.linkedin, text: 'LinkedIn' },
    { id: 'blog', icon: 'bi-pen', link: portfolioData.contact.telegramBlog, text: 'My personal blog' },
  ];

  return (
    <section className="contact mt-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-5 text-left">{t("contact")}</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full shadow-md rounded-md">
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="px-4 py-2 text-left border border-accent">
                    <i className={`bi ${contact.icon} text-accent mr-2`}></i>
                  </td>
                  <td className="px-4 py-2 text-left border border-accent">
                    <a href={contact.link} className="hover:underline hover:text-white" target="_blank" rel="noopener noreferrer">
                      {contact.text}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ikonchalar */}
      <div className="fixed right-4 top-56 flex flex-col gap-3 items-end">
  {contacts.map((contact) => (
    <a
      key={contact.id}
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center border border-accent bg-accent bg-opacity-5 text-white text-white p-3 rounded-full shadow-md transition-all duration-150 w-[50px] h-[50px] hover:w-max hover:rounded-[40px]"
      // className="group relative flex items-center justify-center border border-accent  text-white p-3 rounded-full shadow-md transition-all duration-150 w-[50px] h-[50px] hover:w-max hover:rounded-[40px]"
    >
      <i className={`bi ${contact.icon} text-lg flex items-center justify-center text-accent `} />
      <span className="ml-2 text-sm whitespace-nowrap hidden group-hover:block">
        {contact.text}
      </span>
    </a>
  ))}
</div>




    </section>
  );
};

export default Contact;
