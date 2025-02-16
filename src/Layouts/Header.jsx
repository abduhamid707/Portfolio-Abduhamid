
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value); // Tilni o'zgartirish
  };

  return (
    <header className="fixed top-0 left-0 right-0 py-4 shadow-md bg-primary z-50">
      <div className="container mx-auto flex justify-between items-center">

        <h1 className="text-2xl sm:text-3xl font-bold text-accent">
          {t('fullName')}
        </h1>

        <div className='flex items-center gap-4'>
        <a
          href="https://drive.usercontent.google.com/u/0/uc?id=1s-47VQP6q5xQRpt5XV9GCraaenBv8QiG&export=download"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-primary font-bold px-4 py-1 rounded-md hover:opacity-80 transition"
        >
          My Resume
        </a>
        <select
          className="font-bold text-accent appearance-none bg-transparent border border-accent rounded-md px-2 py-1"
          onChange={handleLanguageChange}
        >
          <option value="eng" className="bg-primary text-accent">Eng</option>
          <option value="uz" className="bg-primary text-accent">Uzb</option>
          <option value="ru" className="bg-primary text-accent">Рус</option>
        </select>
</div>
        

      </div>
    </header>
  );
};

export default Header;
