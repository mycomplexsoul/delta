const TEXT = {
  FINISHED_AT: {
    en: "Done at",
    es: "Finalizado el",
  },
};

const getTextForLang = (lang: string = "en") => ({
  ...Object.entries(TEXT).reduce((prev, [key, value]) => {
    prev[key] = value[lang];
    return prev;
  }, {}),
});

// const TEXT = getTextForLang(lang);
// TEXT.FINISHED_AT

export { getTextForLang };
