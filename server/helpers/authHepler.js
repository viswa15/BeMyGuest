import bcrypt from 'bcrypt'


//hasing password
export const hashPassword = async(password) =>{
    try{
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        return hashedPassword
    }catch(e){
        console.log(e)
    }
}


//comparing password
export const comparePassword = async(password,hashedPassword) =>{
    return bcrypt.compare(password,hashedPassword)
}