import "./style.css";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import parserHtml from "prettier/parser-html";

function pretiffy() {
  const text = document.querySelector(".textarea").value;
  const prettifiedText = prettier.format(text, {
    plugins: [parserBabel, parserHtml],
    parser: "babel",
  });
  // document.querySelector(".textarea").value = prettifiedText;
  console.log(text);
  // console.log(prettifiedText);
}

document.querySelector(".btn").addEventListener("click", () => pretiffy());

export default pretiffy;
