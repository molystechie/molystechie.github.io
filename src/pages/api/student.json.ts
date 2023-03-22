export interface Student{
    id:number;
    name:string;
    email:string;
}
export async function get({request}){

    const students = (await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())) as Student[]
    return {
        body: JSON.stringify(students)
    }
}

/**   Retrive manual hard coded JSON data 
    export async function get(params: any){
    return {
        body: JSON.stringify([
            {
                id: 1,
                name: 'Deborah Malayek'
            },
            {
                id: 2,
                name: 'Viola Kiwelu'
            },
            {
                id: 3,
                name: 'John Lyimo'
            }
        ])
    }
}
 */