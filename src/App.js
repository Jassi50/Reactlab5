import { useState } from "react";
import './App.css';
import Input from "./Input";
import Todos from "./Todos";
import Filter from "./Filter"

export default function App() {
  return (
    <div className="App">
      <Input />
      <Todos />
      <Filter />
    </div>
  );
}