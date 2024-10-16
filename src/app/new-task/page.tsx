import React from 'react'
import Link from 'next/link'
import { prisma } from '@/db'
import { redirect } from 'next/navigation'

async function createTodo(data: FormData) {
    "use server"

    const title = data.get('title')
    if(typeof title !== 'string' || title.length === 0) {
        throw new Error('Invalid Title');
    }

    await prisma.todo.create({
        data: {title, complete: false}
    });

    redirect("/");
}

const NewTask = () => {
  return (
    <div>
        <form action={createTodo} >
            <input type='text' name='title' />
            <div>
                <button type="submit">Submit</button>
                <Link href=".." >Cancel</Link>
            </div>
        </form>
    </div>
  )
}

export default NewTask