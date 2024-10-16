import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ToDoItem from "@/components/ToDoItem";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleToDo(id: string, complete:boolean) {
  "use server"

  await prisma.todo.update({where: {id}, data: {complete}});
}

async function deleteToDo(id: string) {
  "use server"

  await prisma.todo.delete({where: {id}});
  redirect("/");
}

export default async function Home() {

  const todos = await getTodos();
  return (
    <div>
      <header>
        <div>Task-aPP</div>
        <Link href='/new-task' >New Task</Link>
      </header>
      <main>
        <h2>All tasks</h2>
        {
          todos.map((todo) => (
            <ToDoItem key={todo.id} {...todo} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
          ))
        }
      </main>
    </div>
  );
}
