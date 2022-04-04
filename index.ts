import { Printer } from "./Printer";
import "./style.css";
import data from "./data.json";

Printer.print("TS Test");
let a: number = 2;
a++;
Printer.print(a, "TS Test");

console.log(data[0].name);
