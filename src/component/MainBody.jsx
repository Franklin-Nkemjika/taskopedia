import Student from "./Student";
import StudentReview from "./StudentReview";

function MainBody() {
  const whatwewilllearn = "react Js";
  const tCourse = 3;
  return (
    <div className=" px-4 col-10" style={{ minHeight: "70vh" }}>
      <p>
        In this course, we will learn {whatwewilllearn} by building TaskOPedia!{" "}
        <br></br>
        <span>Total course - {tCourse}</span>
      </p>

      <ul>
        <li>Basic foundation </li>
        <li>functional and Basic component </li>
      </ul>

      <div className="container row">Student Enrolled</div>
      <Student programExperience={4} studentName="Franklin Nkemjika" headShot="https://api.lorem.space/image/face?w=150&h=152">
        <StudentReview/>
      </Student>
      <Student programExperience={2} studentName="vic sharp" headShot="https://api.lorem.space/image/face?w=150&h=155">
      <StudentReview></StudentReview>
      </Student>
      <Student programExperience={1} studentName="spaces coverup" headShot="https://api.lorem.space/image/face?w=150&h=154"/>
    </div>
  );
}

export default MainBody;
