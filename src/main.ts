const title: HTMLHeadElement = document.querySelector("#title");

title.addEventListener("click", () => {
  const text: string = prompt("How you doing?!");
  title.textContent = text;
  console.log("Text content updated!");
});
