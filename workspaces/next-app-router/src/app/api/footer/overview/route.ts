import { OVERVIEW } from "../constants/Overview";



export async function GET(request: Request) {return Response.json({data: OVERVIEW})}