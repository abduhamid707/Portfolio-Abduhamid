
import { useTranslation } from 'react-i18next'; 
const Header = () => {
  const { t, i18n } = useTranslation(); 

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value); // Tilni o'zgartirish
  };

  return (
    <header className="fixed top-0 left-0 right-0 py-4 shadow-md bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-accent">
          {t('fullName')}
        </h1>
        <select
                  //   className="font-bold text-accent bg-transparent border border-accent rounded-md px-2 py-1"
                   className="font-bold text-accent appearance-none bg-transparent border border-accent rounded-md px-2 py-1"
                  
          onChange={handleLanguageChange}
        >
          <option value="uz" className="bg-primary text-accent">Uzb</option>
          <option value="ru" className="bg-primary text-accent">Рус</option>
          <option value="eng" className="bg-primary text-accent">Eng</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
