import categorymodel from "../models/categorymodel.js";
import slugify from "slugify";
export const cretaeCategorycontroller = async (req,res)=>{
    try {

        const {name} = req.body;
        if(!name){
            return res.status(401).send({messsage:"namme is required"})
        }

        const existingCategory = await categorymodel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message: "Category already exist"
            })
        }

        const category = await new categorymodel({name , slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message :"category created ",
            category
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message : "Error in  Category"
        })
    }
}

// updateCategory
export const updateCategoryController = async (req,res)=>{

    try {
        const {name} = req.body;
        const {id} = req.params;
        const category = await categorymodel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true});
        res.status(200).send({message:"category updated succeffully" , success:true,category});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message : "Invalid something went wrong"
        })
    }
}   



export const categoryController= async (req,res)=>{
        try {
            const category = await categorymodel.find({})
            res.send({
                success:true,
                mesage: "u r welcome here from different side",
                category
            })
        } catch (error) {
            console.log(errorr);
            res.status(500).send({
                message:"cant fetch the details"
            })
        }
}


export const categoryControllerSingle = async (req,res)=>{
    try {   
        const {id} = req.params;
        const category = await categorymodel.findOne({slug:req.params.slug})
        res.status(200).send({
        success:true,
        message:  "SIngle category fetched",
        category
        })
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategoryControlller = async(req,res)=>{
    try {
        const {id} = req.params;
        await categorymodel.findByIdAndDelete(id);
        res.status(500).send({
            success:true,
            message: "Yo bro u deeted it successfully"
        })
    } catch (error) {
        console.log(error);
    }
}