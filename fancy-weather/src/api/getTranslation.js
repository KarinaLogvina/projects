const getTranslation = async (word) => {
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200504T194254Z.eff8a96fef4bd463.bf884cb26c02503749a287801028c6555d90c4ca&text=${word}&lang=ru-en`;
  const res = await fetch(url);
  const json = await res.json();
  return json.text[0];
};
