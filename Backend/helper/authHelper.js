import bcrypt from "bcrypt";


export const HashPassword = async(password)=>{
try {
    const salrounds = 10;
    const hashedpasword  = await bcrypt.hash(password , salrounds);
    return hashedpasword;
} catch (error) {
    console.log(error);
}
}



export const comparePassword = async (password , hashedpasword)=>{
    return bcrypt.compare(password , hashedpasword);
}