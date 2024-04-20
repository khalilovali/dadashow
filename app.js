products.map((product) => {
  const heading = document.createElement("div");
  heading.classList.add("heading");

  const h1 = document.createElement("h1");
  h1.innerHTML = `Dada Redux Note Pad`;

  const formControl = document.createElement("input");
  formcontrol.classList.add("formcontrol");
  formControl.innerHtml = `Note title`;

  const notePart = document.createElement("input");
  notePart.classList.add("note-part");
  formControl.innerHtml = `Write note...`;

  const secondPart = document.createElement("div");
  secondPart.classList.add("second-part");

  const colors = document.createElement("div");
  colors.classList.add("colors");

  const color1 = document.createElement("div");
  color1.classList.add("color-1");

  const color2 = document.createElement("div");
  color2.classList.add("color-2");

  const color3 = document.createElement("div");
  color3.classList.add("color-3");

  const color4 = document.createElement("div");
  color4.classList.add("color-4");

  const color5 = document.createElement("div");
  color5.classList.add("color-5");

  const btn = document.createElement(div);
  btn.classList.add("btn");

  const button = document.createElement("button");
  button.innerHTML = `Save`;

  const search = document.createElement("div");
  search.classList.add("search");

  const poisk = document.createElement("input");
  poisk.classList.add("poisk");
  poisk.innerHtml = `Write to search`;

  const card = document.createElement("div");
  card.classList.add("card");

  const h4 = document.createElement("h4");
  h4.innerHTML = `Add a title to your note`;

  const p = document.createElement("p");
  p.innerHTML = `You can choose a color while adding notes. The notes you add will not be
  lost even if you refresh the page`;
});
