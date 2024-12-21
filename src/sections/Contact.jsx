import { useTranslation } from 'react-i18next';
import portfolioData from '../db/local.js';
const Contact = () => {
      const { t, i18n } = useTranslation();
  
  return (
    <section className="contact mt-20"> {/* Yuqoridan 100px pastga tushish */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-accent mb-5 text-left">{t("contact") }</h2>
        <div className="overflow-x-auto"> {/* Kichik ekranlarda skroll uchun */}
          <table className="table-auto w-full shadow-md rounded-md">
            <tbody>
              <tr>
                <td className="px-4 py-2 text-left border border-accent">
                  <i className="bi bi-telephone text-accent mr-2"></i> {/* Telefon ikonasini qo'shish */}
                </td>
                <td className="px-4 py-2 text-left border border-accent">
                  <a href={`tel:${portfolioData.contact.phone}`} className="hover:underline hover:text-white">
                    {portfolioData.contact.phone}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left border border-accent">
                  <i className="bi bi-envelope text-accent mr-2"></i> {/* Email ikonasini qo'shish */}
                </td>
                <td className="px-4 py-2 text-left border border-accent">
                  <a href={`mailto:${portfolioData.contact.email}`} className="hover:underline hover:text-white">
                    {portfolioData.contact.email}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left border border-accent">
                  <i className="bi bi-linkedin text-accent mr-2"></i> {/* LinkedIn ikonasini qo'shish */}
                </td>
                <td className="px-4 py-2 text-left border border-accent">
                  <a href={portfolioData.contact.linkedin} className="hover:underline hover:text-white" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left border border-accent">
                  <i className="bi bi-instagram text-accent mr-2"></i> {/* Instagram ikonasini qo'shish */}
                </td>
                <td className="px-4 py-2 text-left border border-accent">
                  <a href={portfolioData.contact.instagram} className="hover:underline hover:text-white" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left border border-accent">
                  <i className="bi bi-telegram text-accent mr-2"></i> {/* Telegram ikonasini qo'shish */}
                </td>
                <td className="px-4 py-2 text-left border border-accent">
                  <a href={portfolioData.contact.telegram} className="hover:underline hover:text-white" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-left border border-accent">
                  <i className="bi bi-pen text-accent mr-2"></i> {/* Blog ikonasini qo'shish */}
                </td>
                <td className="px-4 py-2 text-left border border-accent">
                  <a href={portfolioData.contact.telegramBlog} className="hover:underline hover:text-white" target="_blank" rel="noopener noreferrer">
                    My personal blog
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contact;
