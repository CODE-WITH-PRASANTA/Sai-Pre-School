import React from "react";
import "./SearchNews.css";

import recent1 from "../../assets/Recent1.webp";
import recent2 from "../../assets/Recent2.webp";

import s1 from "../../assets/OurService1.webp";
import s2 from "../../assets/OurService2.webp";
import s3 from "../../assets/OurService3.webp";
import s4 from "../../assets/OurService4.webp";
import s5 from "../../assets/OurService5.webp";
import s6 from "../../assets/OurService6.webp";
import s7 from "../../assets/ourService7.webp";
import s8 from "../../assets/OurService8.webp";

const SearchNews = () => {

const base = "search-news";

const services = [s1,s2,s3,s4,s5,s6,s7,s8];

const tags = [
"Design","User interface","SEO",
"WordPress","Development","Joomla",
"Design","User interface","SEO",
"WordPress","Development","Joomla",
];

const categories = [
"Aciform",
"Championship",
"Chastening",
"Clerkship",
"Disinclination"
];

return (
<section className={base}>

<div className={`${base}__container`}>

{/* SEARCH */}
<div className={`${base}__box`}>
<h3 className={`${base}__title`}>Search</h3>

<div className={`${base}__search`}>
<input
type="text"
placeholder="Enter your keywords..."
/>

<button>
🔍
</button>
</div>
</div>

{/* RECENT POSTS */}
<div className={`${base}__box`}>

<h3 className={`${base}__title`}>Recent Posts</h3>

<div className={`${base}__recent`}>

<div className={`${base}__recentItem`}>
<img src={recent1} alt="" />

<div>
<h4>
Reasons Why You Cannot Learn Kids Education Well.
</h4>

<span>
BY JONE | 💬 28
</span>
</div>
</div>

<div className={`${base}__recentItem`}>
<img src={recent2} alt="" />

<div>
<h4>
Small But Important Things To Observe In Kids.
</h4>

<span>
BY JONE | 💬 28
</span>
</div>
</div>

</div>

</div>

{/* OUR SERVICES */}
<div className={`${base}__box`}>

<h3 className={`${base}__title`}>
Our Services
</h3>

<div className={`${base}__services`}>

{services.map((img,index)=>(
<img key={index} src={img} alt="" />
))}

</div>

</div>

{/* TAGS */}
<div className={`${base}__box`}>

<h3 className={`${base}__title`}>
Tags
</h3>

<div className={`${base}__tags`}>

{tags.map((tag,index)=>(
<span key={index}>
{tag}
</span>
))}

</div>

</div>

{/* CATEGORIES */}
<div className={`${base}__box`}>

<h3 className={`${base}__title`}>
Categories List
</h3>

<ul className={`${base}__categories`}>

{categories.map((item,index)=>(
<li key={index}>
{item}
</li>
))}

</ul>

</div>

</div>

</section>
);
};

export default SearchNews;