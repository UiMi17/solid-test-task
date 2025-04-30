const getCurrentLanguage = () => {
  return localStorage.getItem('language') || 'en';
};

export default getCurrentLanguage;
