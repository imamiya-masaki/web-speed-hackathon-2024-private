import { COMPANY } from "../constants/Company";



export async function GET(request: Request) {return Response.json({data: COMPANY})}