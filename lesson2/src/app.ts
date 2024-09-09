let button: HTMLElement | null = document.getElementById("button");

const clickHandler = (message: string) => {
  console.log(message)
}

if(button){
    button.addEventListener("click", () => clickHandler('hello'));
}
