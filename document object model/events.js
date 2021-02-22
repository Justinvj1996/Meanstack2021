var clk = document.querySelector("#clk")
clk.addEventListener("click", () => {
    clk.textContent="Clicked";
    clk.style.color = "red";
})
var dbclk = document.querySelector("#dbclk")
dbclk.addEventListener("dblclick", () => {
    dbclk.textContent="Double Clicked";
    dbclk.style.color = "green";
})
var over = document.querySelector("#over")
over.addEventListener("mouseover", () => {
    over.textContent="OPeration rajavembala";
    over.style.color = "violet";
})
var over = document.querySelector("#over")
over.addEventListener("mouseout", () => {
    over.style.color = "red";
})