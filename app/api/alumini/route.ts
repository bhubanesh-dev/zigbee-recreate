import dbConnect from "@/dbConfig/dbConnect";
import AlumniModel from "@/models/Alumini";

export async function GET() {
  await dbConnect();
  try {
    const alumniData = await AlumniModel.find({});

    return new Response(
      JSON.stringify({
        success: true,
        message: "Alumni data retrieved successfully",
        alumniData, // Include the alumni data in the response
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to retrieve alumni data",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
