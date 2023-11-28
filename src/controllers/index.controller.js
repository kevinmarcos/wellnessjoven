export const getRoot =  (req, res) => {
  res.sendFile('./src/public/index.html', { root: '.' });
}

export const getRootSedentarismo =  (req, res) => {
  res.sendFile('./src/public/sedentarismo.html', { root: '.' });
}

export const getRootAboutUs =  (req, res) => {
  res.sendFile('./src/public/aboutUs.html', { root: '.' });
}
