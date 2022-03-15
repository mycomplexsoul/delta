const copyTextToClipboard = (text: string): Promise<any> => {
  return navigator.clipboard?.writeText(text);
};

export {
  copyTextToClipboard
};
