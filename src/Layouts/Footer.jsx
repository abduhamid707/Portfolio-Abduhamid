import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white py-4 mt-8">
      <p className="mt-4 text-center text-accent">&copy; {new Date().getFullYear()} {t("copyright") }</p>
    </footer>
  );
};

export default Footer; 
