import { APIRoute } from "astro"

const TodoItems = [
    {name:"Task 1", description: "A first todo"},
    {name:"Task 2", description: "A second todo"},
]

export async function get({request}) {
    return new Response(
        JSON.stringify(
            TodoItems
            ),
            { status: 200 }
        )

    //     return {
    //     body: JSON.stringify('Hello Astro Folks')
    //   }

    // return {
    //     body: 'Hello API'
    // }
  }