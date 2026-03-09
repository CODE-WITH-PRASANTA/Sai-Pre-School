import React from "react";
import "./CollectFees.css";
import { Link } from "react-router-dom";

const CollectFees = () => {
  const base = "collect-fees";

  return (
    <section className={base}>
      {/* PAGE HEADER */}
      <div className={`${base}__page-header`}>
        <div className={`${base}__title`}>
          <span className={`${base}__icon`}>💰</span>
          <h2>Collect Fee</h2>
        </div>

        <div className={`${base}__breadcrumb`}>
          <span>Fees Collection</span>
          <span className={`${base}__slash`}>/</span>
          <span>Collect Fee</span>
        </div>
      </div>

      {/* CARD */}
      <div className={`${base}__card`}>
        {/* CARD HEADER */}
        <div className={`${base}__card-header`}>
          <span className={`${base}__search-icon`}>🔍</span>
          <h3>Select Criteria</h3>
        </div>

        {/* FORM */}
        <div className={`${base}__form`}>
          {/* CLASS */}
          <div className={`${base}__form-group`}>
            <label>
              Class <span>*</span>
            </label>
            <select>
              <option>Select Class</option>
              <option>Nursery</option>
              <option>Junior KG</option>
              <option>Senior KG</option>
              <option>Class 1</option>
              <option>Class 2</option>
            </select>
          </div>

          {/* SECTION */}
          <div className={`${base}__form-group`}>
            <label>Section</label>
            <select>
              <option>Select Section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>

          {/* KEYWORD */}
          <div className={`${base}__form-group`}>
            <label>Search by Keyword</label>

            <input
              type="text"
              placeholder="Enter student name / admission no"
            />

            {/* SEARCH BUTTON */}
            <Link to="/admin/feeslist" className={`${base}__btn-search`}>
              🔍 Search
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectFees;
