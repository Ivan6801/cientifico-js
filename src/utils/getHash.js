const getHash = () => {
  const hash = location.hash.slice(1).toLowerCase(); // Cambia "slide" a "slice" y "toLocateLowerCase" a "toLowerCase"
  return hash.split("/")[1] || "/";
};

export default getHash;
