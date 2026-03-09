import React, { useState } from "react";
import "./Admission.css";

const Admission = () => {

const base = "admission-ui";

const [open,setOpen] = useState("student");

const [studentPhoto,setStudentPhoto] = useState(null);
const [fatherPhoto,setFatherPhoto] = useState(null);
const [motherPhoto,setMotherPhoto] = useState(null);

const toggle = (id)=>{
setOpen(open === id ? "" : id);
};

const handlePhoto = (e,setter)=>{
const file = e.target.files[0];
if(file){
setter(URL.createObjectURL(file));
}
};

return (

<section className={base}>

<div className={`${base}__container`}>

{/* HEADER */}

<div className={`${base}__header`}>
<h2>Student Admission</h2>

<button className={`${base}__download`}>
⬇ Download Form
</button>
</div>


{/* STUDENT DETAILS */}

<div className={`${base}__card`}>

<div
className={`${base}__card-header`}
onClick={()=>toggle("student")}
>
Student Details
<span>{open==="student"?"▲":"▼"}</span>
</div>

{open==="student" && (

<div className={`${base}__card-body`}>

<div className={`${base}__form`}>

<div className={`${base}__grid`}>

<input placeholder="Admission No *"/>
<select><option>Class *</option></select>
<select><option>Section *</option></select>

<input placeholder="Roll Number"/>
<input placeholder="Biometric ID"/>
<input type="date"/>

<input placeholder="First Name *"/>
<input placeholder="Last Name"/>
<select><option>Gender *</option></select>

<input type="date"/>
<select><option>Category</option></select>
<input placeholder="Religion"/>

<input placeholder="Caste"/>
<input placeholder="Mobile Number"/>
<input placeholder="Email"/>

<select><option>Blood Group</option></select>
<select><option>House</option></select>
<select><option>Sponsor</option></select>

<input placeholder="Height"/>
<input placeholder="Weight"/>
<input placeholder="Aadhar Number"/>

</div>


<label className={`${base}__photo`}>

<input
type="file"
accept="image/*"
onChange={(e)=>handlePhoto(e,setStudentPhoto)}
/>

{studentPhoto ? (
<img src={studentPhoto} alt="student"/>
) : (
<div className="photo-placeholder">
Upload Photo
<span>JPG / PNG (Max 2MB)</span>
</div>
)}

</label>

</div>

</div>

)}

</div>



{/* CUSTOM FIELD */}

<div className={`${base}__card`}>

<div
className={`${base}__card-header`}
onClick={()=>toggle("custom")}
>
Custom Field
<span>{open==="custom"?"▲":"▼"}</span>
</div>

{open==="custom" && (

<div className={`${base}__card-body`}>

<div className={`${base}__single-grid`}>
<input placeholder="PEN"/>
<input placeholder="SR NO"/>
<input placeholder="APAAR ID"/>
</div>

<div className={`${base}__checkbox`}>
<label><input type="checkbox"/> Good</label>
<label><input type="checkbox"/> Average</label>
<label><input type="checkbox"/> Bad</label>
</div>

</div>

)}

</div>



{/* PARENT DETAILS */}

<div className={`${base}__card`}>

<div
className={`${base}__card-header`}
onClick={()=>toggle("parent")}
>
Parent / Guardian Details
<span>{open==="parent"?"▲":"▼"}</span>
</div>

{open==="parent" && (

<div className={`${base}__card-body`}>

<h3 className={`${base}__sub-title`}>Father Details</h3>

<div className={`${base}__form`}>

<div className={`${base}__grid`}>

<input placeholder="Father Name"/>
<input placeholder="Father Phone"/>
<input type="date"/>

<input placeholder="Father Occupation"/>
<input type="date"/>

</div>

<label className={`${base}__photo`}>

<input
type="file"
accept="image/*"
onChange={(e)=>handlePhoto(e,setFatherPhoto)}
/>

{fatherPhoto ? (
<img src={fatherPhoto} alt="father"/>
) : (
<div className="photo-placeholder">
Upload Photo
<span>JPG / PNG</span>
</div>
)}

</label>

</div>


<h3 className={`${base}__sub-title`}>Mother Details</h3>

<div className={`${base}__form`}>

<div className={`${base}__grid`}>

<input placeholder="Mother Name"/>
<input placeholder="Mother Phone"/>
<input type="date"/>
<input placeholder="Mother Occupation"/>

</div>

<label className={`${base}__photo`}>

<input
type="file"
accept="image/*"
onChange={(e)=>handlePhoto(e,setMotherPhoto)}
/>

{motherPhoto ? (
<img src={motherPhoto} alt="mother"/>
) : (
<div className="photo-placeholder">
Upload Photo
<span>JPG / PNG</span>
</div>
)}

</label>

</div>

</div>

)}

</div>



{/* OTHER DETAILS */}

<div className={`${base}__card`}>

<div
className={`${base}__card-header`}
onClick={()=>toggle("other")}
>
Other Details
<span>{open==="other"?"▲":"▼"}</span>
</div>

{open==="other" && (

<div className={`${base}__card-body`}>

<textarea className={`${base}__textarea`} placeholder="Current Address"/>
<textarea className={`${base}__textarea`} placeholder="Permanent Address"/>

<textarea className={`${base}__textarea`} placeholder="Previous School Details"/>
<textarea className={`${base}__textarea`} placeholder="Note"/>

</div>

)}

</div>



{/* DOCUMENT UPLOAD */}

<div className={`${base}__card`}>

<div
className={`${base}__card-header`}
onClick={()=>toggle("docs")}
>
Upload Documents
<span>{open==="docs"?"▲":"▼"}</span>
</div>

{open==="docs" && (

<div className={`${base}__card-body`}>

<table className={`${base}__table`}>

<thead>
<tr>
<th>#</th>
<th>DOCUMENT NAME</th>
<th>UPLOAD FILE</th>
</tr>
</thead>

<tbody>

{[
"Report Card",
"TC",
"Samagra ID",
"NIDA Card Number",
"Previous Year Marksheet",
"Student Photo",
"Student DOB Certificate",
"Aadhaar Card",
"Aadhaar Card (Parent)",
"Income Certificate",
"PIP"
].map((doc,i)=>(

<tr key={i}>
<td>{i+1}</td>
<td>{doc}</td>
<td>
<label className="file-upload">
<input type="file"/>
<span>Choose File</span>
</label>
</td>
</tr>

))}

</tbody>

</table>

</div>

)}

</div>

<button className={`${base}__submit`}>
Submit
</button>

</div>

</section>

);

};

export default Admission;