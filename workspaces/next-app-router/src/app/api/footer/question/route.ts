import { QUESTION } from "../constants/Question";



export async function GET(request: Request) {return Response.json({data: QUESTION})}