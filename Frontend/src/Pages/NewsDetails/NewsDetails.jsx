import React from "react";
import "./NewsDetails.css";

import Kids from "../../Components/Kids/Kids";
import SearchNews from "../../Components/SearchNews/SearchNews";
import Reply from "../../Components/Reply/Reply";

const NewsDetails = () => {

const base = "news-details-page";

return (

<section className={base}>

<div className={`${base}__container`}>

{/* LEFT SIDE */}
<div className={`${base}__left`}>

<Kids />

<Reply />

</div>


{/* RIGHT SIDE */}
<div className={`${base}__right`}>

<SearchNews />

</div>

</div>

</section>

);

};

export default NewsDetails;