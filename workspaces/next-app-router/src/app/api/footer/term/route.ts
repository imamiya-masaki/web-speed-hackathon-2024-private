import { TERM } from "../constants/Term";



export async function GET(request: Request) {return Response.json({data: TERM})}