import  mongoose  from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/mongographql',{
            useNewUrlParser: true,
            useUnifiedTopoly: true
        })
        console.log('==> DB FUNCIONANDO <3');
    } catch (error) {
        console.log("error");
        console.log(error);
    }
}

