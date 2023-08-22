import React, { FormEvent, useRef, useState } from "react";
import { TaskModel } from "../models/TaskModel";
import { useTaskContext } from "../context/TodoContext";

const Form = () => {
  const inputTaskTitleRef = useRef<HTMLInputElement>(null);
  const inputTaskDescRef = useRef<HTMLInputElement>(null);

  const todoContext = useTaskContext()
  
  const addTask = todoContext.addTask;


  const isTitleCorrect = (): boolean => {
    return inputTaskTitleRef.current?.value.trim() != "";
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isTitleCorrect()) {
        console.log("no anda");
        
      return;
    } 

    const title: string = inputTaskTitleRef.current?.value.toString()!!;
    const desc: string = inputTaskDescRef.current?.value.toString() ?? "";
    const task: TaskModel = new TaskModel((Math.random() * 10000).toString(), title, desc, false);
    addTask(task)
    console.log(task);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center mx-auto w-3/4 md:w-96"
    >
      <div className="flex flex-col w-full">
        <label className="text-white text-lg py-2" htmlFor="task-title">
          Task title
        </label>
        <input
          ref={inputTaskTitleRef}
          className="outline-none p-2 bg-sky-800 text-white"
          type="text"
          id="task-title"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-white text-lg py-2" htmlFor="task-desc">
          Task description
        </label>
        <input
          ref={inputTaskDescRef}
          className="outline-none p-2 bg-sky-800 text-white"
          type="text"
          id="task-desc"
        />
      </div>

      <button
        className="bg-red-500 w-full py-1 mt-4 rounded-sm text-white text-lg font-bold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
