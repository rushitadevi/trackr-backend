const express = require("express");
const bodyParser = require("body-parser");
const schoolRouter = express.Router();
const SchoolSchema = require("../models/School");

schoolRouter.post("/create", async (req, res) => {
    try {
        console.log(req.body)
      var School = await SchoolSchema.create(req.body)
      res.send(School);
    } catch (exx) {
      res.statusCode = 500;
      res.send(exx);
    }
  });

  schoolRouter.get("/", async (req, res) => {
    try {
      var School = await SchoolSchema.find({})
      res.send(School);
    } catch (exx) {
      res.statusCode = 500;
      res.send(exx);
    }
  });

  schoolRouter.get("/:id", async (req, res) => {
    try {
      var School = await SchoolSchema.findById({_id:req.params.id})
      if(School===null)
      {
          res.statusCode=200
          res.send("school not found")
      }
      else
      {
        res.send(School);
      }
    } catch (exx) {
      res.statusCode = 500;
      res.send(exx);
    }
  });

  schoolRouter.delete("/:id", async (req, res) => {
    try {
      var School = await SchoolSchema.findByIdAndDelete({_id:req.params.id})
      if(School===null)
      {
         res.statusCode=200
         res.send("school not found") 
      }
      else
      {
        res.send("school deleted successfully");
      }      
    } catch (exx) {
      res.statusCode = 500;
      res.send(exx);
    }
  });

  schoolRouter.put("/:id",async(req,res)=>{
      try
      {
          console.log(req.body)
         var School=await SchoolSchema.findByIdAndUpdate({_id:req.params.id},req.body)
         res.render('error', {        
            message: err.message,
            error: {}
        });
          res.send("school updated successfully.")    
      }
      catch(ex)
      {
          res.statusCode=500
      }
  })

  module.exports = schoolRouter;
