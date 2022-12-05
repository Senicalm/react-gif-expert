export const getGift = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=279ErdYpVdtkA0A2102a5z6PleLDSE1S&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifts = data.map((gift) => ({
    id: gift.id,
    title: gift.title,
    url: gift.images.downsized_medium.url,
  }));

  return gifts;
};
