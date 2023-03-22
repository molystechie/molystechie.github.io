const people = [
        {
          "name": "Janet Smith",
          "gender" : "Female",
          "hobbies": {
            "likes": ["Reading", 'Cooking'],
            "dislikes": ["boxing"]
          }
        },
        {
          "name": "Jackson Linus",
          "gender" : "Male",
          "hobbies": {
            "likes": ["Basketball","Running"],
            "dislikes": ["farming"]
          }
        },
        {
          "name": "David Richard",
          "gender" : "Male",
          "hobbies": {
            "likes": ["swmimming", "TV"],
            "dislikes": ["cooking"]
          }
        }
]
export async function get({params, request}) {
    return {
        body: JSON.stringify(people)
    }
}