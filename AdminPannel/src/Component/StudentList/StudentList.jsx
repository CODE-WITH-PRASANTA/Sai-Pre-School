import React, { useState } from "react";
import "./StudentList.css";
import { Link } from "react-router-dom";

const StudentList = () => {

const base = "student-list";

const [students] = useState([
{
id:1,
admission:"NLET / 5598",
roll:4,
name:"RASHI",
class:"7th",
section:"A",
dob:"07-10-2012",
father:"BHAGVAT PRASAD",
mother:"DROPDI",
phone:"6651567864"
},
{
id:2,
admission:"NLET / 5847",
roll:234344,
name:"ABHAY RAJ",
class:"5th",
section:"A",
dob:"01-01-2015",
father:"JAMUNA PRASAD",
mother:"-",
phone:"6396548562"
}
]);

return (

<section className={base}>

{/* HEADER */}

<div className={`${base}__header`}>

<div className={`${base}__title`}>
<span>📋</span>
<h2>Student List</h2>
</div>

<button className={`${base}__report-btn`}>
Cheque Reminder Report
</button>

</div>


{/* SEARCH BAR */}

<div className={`${base}__searchbar`}>

<div className={`${base}__entries`}>
<label>Show</label>

<select>
<option>10</option>
<option>25</option>
<option>50</option>
</select>

<span>entries</span>
</div>

<div className={`${base}__search`}>
<label>Search:</label>
<input type="text" placeholder="Search student..." />
</div>

</div>


{/* TABLE */}

<div className={`${base}__table-wrapper`}>

<table className={`${base}__table`}>

<thead>
<tr>
<th>ADMISSION NO.</th>
<th>ROLL NUMBER</th>
<th>NAME</th>
<th>CLASS</th>
<th>SECTION</th>
<th>DATE OF BIRTH</th>
<th>FATHER NAME</th>
<th>MOTHER NAME</th>
<th>GUARDIAN PHONE</th>
<th>ACTION</th>
</tr>
</thead>

<tbody>

{students.map((item)=>(
<tr key={item.id}>

<td>{item.admission}</td>
<td>{item.roll}</td>
<td className="name">{item.name}</td>
<td>{item.class}</td>
<td>{item.section}</td>
<td>{item.dob}</td>
<td>{item.father}</td>
<td>{item.mother}</td>
<td>{item.phone}</td>

<td>
    <Link to="/admin/feesdetails">
<button className="fees-btn">
Fees
</button>
</Link>
</td>

</tr>
))}

</tbody>

</table>

</div>


{/* FOOTER */}

<div className={`${base}__footer`}>

<span>
Showing 1 to {students.length} of {students.length} entries
</span>

<div className={`${base}__pagination`}>
<button disabled>Previous</button>
<button className="active">1</button>
<button disabled>Next</button>
</div>

</div>

</section>

);
};

export default StudentList;