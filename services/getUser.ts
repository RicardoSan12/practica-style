const getUser = () => {
  return fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then(({ results }) => {
      const {
        name: { first },
        picture: { medium },
      } = results[0];
      return { first, medium };
    });
};

export default getUser