import { useSelector } from 'react-redux';

import MainLayout from '../components/layouts/MainLayout';

const TEXTS = {
  es: 'Inicio',
  en: 'Home'
}

const HomePage = () => {
  const lang = useSelector(state => state.lang);
  return (
    <MainLayout>
      {TEXTS[lang]}
    </MainLayout>
  )
}

export default HomePage;
