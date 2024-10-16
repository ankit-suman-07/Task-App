import React from 'react'
import Link from 'next/link'

const NewTask = () => {
  return (
    <div>
        <form>
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