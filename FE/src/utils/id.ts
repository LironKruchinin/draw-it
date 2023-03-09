export const NewId = (idLength: number): string => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
  const idArr = [];
  for (let i = 0; i < idLength; i++) {
    idArr.push(possible[Math.ceil(Math.random() * possible.length)]);
  }
  return idArr.join("");
};
