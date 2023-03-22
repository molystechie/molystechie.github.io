import { APIRoute } from "astro"
export async function get({params, request}) {
// export const get: APIRoute = ({ params, request }) => {
  // response.json({message: 'Hello Astro Folks'})
  // return new Response(
  //     JSON.stringify('Hello Astro Folks')
  // )



  // return {
  //     body: JSON.stringify('Hello Astro Folks')
  // }

  // if (request.method == "GET") {
  //   return {
  //     body: "Get request",
  //   };
  // } 



  // return {
  //     body: JSON.stringify(request)
  // }

  return {
      body: 'Hello API'
  }
}



export const post: APIRoute = ({ request }) => {
  return {
    body: JSON.stringify({
      message: "This was a POST!"
    })
  }
}