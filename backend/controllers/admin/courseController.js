const { categories, chapters, courses } = require("../../model")


exports.addCourseCategory = async(req,res)=>{
    const {categoryName,chapterId} = req.body 
    await categories.create({
        categoryName,
        courseChapterId : chapterId
    })
    res.status(200).json({
        message : "Category added successfully"
    })
}

exports.addCourseChapter = async(req,res)=>{
    const {chapterTitle,chapterDescription,courseVideo,chapterStatus,chapterType,courseId} = req.body 
    await chapters.create({
        chapterStatus,
        chapterTitle,
        chapterType,
        chapterDescription,
        courseId,
    })
    res.status(200).json({
        message : "Chapter created successfully"
    })
}

exports.addCourse = async(req,res)=>{

    const {courseName,courseDescription,coursePrice,courseCategories,courseChapters} = req.body 
    if(courseCategories.length ==0 || courseChapters.length === 0){
        return res.status(400).json({
            message : "Please provide courseCategories,courseChapters"
        })
    }
    await courses.create({
        courseName,
        coursePrice,
        courseImage,
        courseDescription,

    })

    res.status(200).json({
        message : "Course added successfully"
    })
}