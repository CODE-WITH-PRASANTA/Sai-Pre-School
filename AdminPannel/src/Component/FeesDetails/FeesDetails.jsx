import React from "react";
import "./FeesDetails.css";

const FeesDetails = () => {

const base = "fees-details";

return (

<section className={base}>

{/* PAGE HEADER */}

<div className={`${base}__page-header`}>

<div className={`${base}__title`}>
<span className={`${base}__icon`}>💲</span>
<h2>Fees Details</h2>
</div>

<div className={`${base}__breadcrumb`}>
<span>Fees Collection</span>
<span className={`${base}__slash`}>/</span>
<span>Fees Details</span>
</div>

</div>


{/* CARD */}

<div className={`${base}__card`}>

{/* CARD HEADER */}

<div className={`${base}__card-header`}>

<div className={`${base}__card-title`}>
<span>💳</span>
<h3>Student Fees</h3>
</div>

<button className={`${base}__back-btn`}>
Back
</button>

</div>


{/* STUDENT SECTION */}

<div className={`${base}__content`}>

{/* LEFT PHOTO */}

<div className={`${base}__photo`}>

<img
src="https://randomuser.me/api/portraits/men/32.jpg"
alt="student"
/>

<h4>RASHI</h4>

</div>


{/* RIGHT TABLE */}

<div className={`${base}__table-box`}>

<table className={`${base}__table`}>

<tbody>

<tr>
<td>NAME</td>
<td>RASHI (Female)</td>
<td>CLASS / SECTION</td>
<td>7th (A)</td>
</tr>

<tr>
<td>FATHER NAME</td>
<td>BHAGVAT PRASAD</td>
<td>ADMISSION NO.</td>
<td>5598</td>
</tr>

<tr>
<td>MOBILE NUMBER</td>
<td>6651567864</td>
<td>ROLL NUMBER</td>
<td>4</td>
</tr>

<tr>
<td>CATEGORY</td>
<td>obc</td>
<td>RTE</td>
<td className="no">No</td>
</tr>

<tr>
<td>BUS STOP</td>
<td colSpan="3">galta ji Gate</td>
</tr>

<tr>
<td>NOTE</td>
<td colSpan="3"></td>
</tr>

<tr>
<td colSpan="4">
ADDRESS – GHODA CHRAUHAN, BANDA
</td>
</tr>

</tbody>

</table>

</div>

</div>


{/* FOOTER */}

<div className={`${base}__footer`}>

<div className={`${base}__date`}>
Date : 09-03-2026
</div>

<div className={`${base}__actions`}>

<button className={`${base}__btn dark`}>
Unassign Fees
</button>

<button className={`${base}__btn dark`}>
Assign Fees
</button>

<button className={`${base}__btn dark`}>
Assign Discount
</button>

<button className={`${base}__btn blue`}>
Paid History
</button>

<button className={`${base}__btn green`}>
Pay Fees
</button>

</div>

</div>

</div>

</section>

);

};

export default FeesDetails;