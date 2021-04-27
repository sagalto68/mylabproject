import { useDispatch, useSelector } from 'react-redux';

import { setLanguage } from '../redux/language/languageActions';

const Footer = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.lang);

  return (
    <footer>
      <button 
        onClick={() => dispatch(setLanguage('es'))}
        disabled={lang === 'es'}
      >
        ES
      </button>
      <button
        onClick={() => dispatch(setLanguage('en'))}
        disabled={lang === 'en'}
      >
        EN
      </button>
    </footer>
  );
}

export default Footer;
