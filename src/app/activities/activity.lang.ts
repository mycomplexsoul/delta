const TEXT = {
  ACTIVITIES_TITLE: {
    en: "Kanban Activities",
    es: "Kanban Actividades",
  },
  STATUS_CAPTURED: {
    en: "CAPTURED",
    es: "CAPTURADO",
  },
  STATUS_BACKLOG: {
    en: "BACKLOG",
    es: "EN DEFINICIÓN",
  },
  STATUS_OPEN: {
    en: "OPEN",
    es: "ABIERTO",
  },
  STATUS_IN_PROGRESS: {
    en: "IN PROGRESS",
    es: "EN PROGRESO",
  },
  STATUS_VERIFICATION: {
    en: "VERIFICATION",
    es: "VERIFICACIÓN",
  },
  STATUS_CLOSED: {
    en: "CLOSED",
    es: "CERRADO",
  },
  TIMELINE: {
    en: "Timeline",
    es: "Estatus",
  },
  TASKS: {
    en: "Tasks",
    es: "Actividades",
  },
};

// TEXT.STATUS_CAPTURED.es

const getTextForLang = (lang: string = "en") => ({
  ...Object.entries(TEXT).reduce((prev, [key, value]) => {
    prev[key] = value[lang];
    return prev;
  }, {}),
});

// const TEXT = getTextForLang(lang);
// TEXT.STATUS_CAPTURED

export { getTextForLang };