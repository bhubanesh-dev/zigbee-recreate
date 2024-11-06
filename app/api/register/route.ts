import dbConnect from "@/dbConfig/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request:Request) {
  await dbConnect();

  try {
    const { userRegdNo, password, batch } = await request.json();

    const findUserRegdNo = await UserModel.findOne({ userRegdNo });

    if (findUserRegdNo) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Username is already taken",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      userRegdNo,
      password: hashedPassword,
      batch:batch
    });
    await newUser.save();

    return new Response(
      JSON.stringify({
        success: true,
        message: "User registered successfully. Please verify your account.",
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error registering user",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
