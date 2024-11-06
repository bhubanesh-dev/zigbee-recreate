import dbConnect from "@/dbConfig/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "My jwt secret @root Bhubanesh"; // Replace with a strong secret key and store it in an environment variable for security.

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { userRegdNo, password } = await request.json();

    const user = await UserModel.findOne({ userRegdNo });

    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "User not found",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Incorrect password",
        }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, userRegdNo: user.userRegdNo }, // Payload
      JWT_SECRET,
      { expiresIn: "1h" } // Token expiry (1 hour in this case)
    );

    // If login is successful, return the token and success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Login successful",
        token, // Include the token in the response
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error during login",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
