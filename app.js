/* ************************** CRUD Operations Using Mongoose *************************** */ 

/* Import Mongoose ======================*/ 
const mongoose = require("mongoose");


/* Connect To Server ======================*/ 

const uri = "mongodb://localhost:27017/University";
mongoose.connect(uri, function(err){
    if(!err){
        console.log("Connection started successfully!");
    }
    else{
        console.log("Connection failed!");
    }
});



/* Create New Schema ======================*/ 

const StudentSchema = new mongoose.Schema({
    Student_id: {
        type: Number,
        required: [true, "Student Id cannot be null. Please provide student id!"]
    },
    Full_Name:{
        type: String,
        required: [true, "Student Name cannot be null. Please provide student name!"]
    },
    Batch: String,
    Branch: String,
    DOB: String
});



/* New collections ======================*/ 

const Student = new mongoose.model("Student", StudentSchema);



/* Documents To Be Inserted ======================*/ 

const docs = [{
    Student_id: 14801012018,
    Full_Name: "Ishika Bansal",
    Batch: "2018-2022",
    DOB: "04-08-2000",
    Branch: "CSE"
},
{
    Student_id: 12001012018,
    Full_Name: "Neha Pandey",
    Batch: "2018-2022",
    DOB: "28-11-2000",
    Branch: "CSE"
},
{
    Student_id: 14901012018,
    Full_Name: "Pariksha Prajapati",
    Batch: "2018-2022",
    DOB: "15-05-2001",
    Branch: "CSE"
},
{
    Student_id: 14801012018,
    Full_Name: "Sanjana Singh",
    Batch: "2018-2022",
    DOB: "02-02-2000",
    Branch: "CSE"
},
{
    Student_id: 15001012018,
    Full_Name: "Aditi Anand",
    Batch: "2018-2022",
    DOB: "08-08-2000",
    Branch: "IT"
},
{
    Student_id: 15101012018,
    Full_Name: "Himanshi Goyal",
    Batch: "2018-2022",
    DOB: "04-04-2000",
    Branch: "IT"
},
{
    Student_id: 2401032018,
    Full_Name: "Shreya Singh",
    Batch: "2018-2022",
    DOB: "10-08-2000",
    Branch: "MAE"
},
{
    Student_id: 2901012018,
    Full_Name: "Vanshika Uniyal",
    Batch: "2018-2022",
    DOB: "18-06-2000",
    Branch: "MAE"
}
];


/* *************** CRUD OPERATIONS **************** */ 


/* Create Operation ======================*/ 

Student.insertMany(docs, function(err){
    if(!err){
        console.log("Documents inserted successfully!");
    }
    else{
        console.log("Insert operation failed!");
    }
});



/* Read Operation ======================*/ 

const branch = "CSE";
Student.find(function(err, students_array){
    if(!err){
        console.log("Students of branch: " + branch + " are filtered out as follows:- ");
        if(students_array.length === 0){
            console.log("No documents found!");
        }
        else{
            students_array.forEach(element => {
                console.log(element);
            });;
        }
    }
    else{
        console.log("Find operation failed!");
    }
});



/* Update Operation ======================*/ 

const oldRollNumber = 2901012018;
const newRollNumber = 3001012018;
Student.updateOne({Student_id: oldRollNumber}, {Student_id: newRollNumber}, function(err){
    if(!err){
        console.log("Updation successful!");
    }
    else{
        console.log("Updation failed!")
    }
});


/* Delete Operation ======================*/ 

const branch_name = "CSE";
Student.deleteMany({Branch: branch_name}, function(err){
    if(!err){
        console.log("Successfully deleted the information of students from branch: " + branch_name + " from the database!");
    }
    else{
        console.log("Deletion failed!")
    }
});



/* Close connection ======================= */

mongoose.connection.close();