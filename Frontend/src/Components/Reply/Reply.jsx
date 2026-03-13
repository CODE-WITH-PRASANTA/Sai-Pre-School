import React from "react";
import "./Reply.css";

const Reply = () => {

const base = "reply";

return (

<section className={base}>

<div className={`${base}__container`}>

<h2 className={`${base}__title`}>
Leave a Reply
</h2>

<form className={`${base}__form`}>

<div className={`${base}__row`}>

<input
type="text"
placeholder="Author"
/>

<input
type="email"
placeholder="Email"
/>

<input
type="text"
placeholder="Website"
/>

</div>

<textarea
placeholder="Comment"
rows="6"
/>

<button type="submit">
POST COMMENT
</button>

</form>

</div>

</section>

);
};

export default Reply;