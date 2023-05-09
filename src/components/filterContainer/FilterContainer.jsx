import Wrapper from "./filterContainer.styles";

const FilterContainer = () => {
  return (
    <Wrapper>
      <div className="sub-container">
        <h2 className="heading-secondary">product categories</h2>
        <div className="form-row">
          <input type="checkbox" name="hat" id="hat" />
          <label htmlFor="hat">hat</label>
        </div>
        <div className="form-row">
          <input type="checkbox" name="tshirt" id="t-shirt" />
          <label htmlFor="t-shirt">t-shirt</label>
        </div>
      </div>
      <div className="sub-container">
        <h2 className="heading-secondary">filter by price</h2>
        <div className="form-row">
          <span className="lowest-price">0</span>
          <input type="range" name="price" min="0" max="1000" id="price" />
          <span className="lowest-price">1000</span>
        </div>
      </div>
      <div className="sub-container">
        <h2 className="heading-secondary">product categories</h2>
        <div className="form-row">
          <input type="radio" name="sort" id="lowest" />
          <label htmlFor="lowest">lowest first</label>
        </div>
        <div className="form-row">
          <input type="radio" name="sort" id="highest" />
          <label htmlFor="highest">highest first</label>
        </div>
      </div>
    </Wrapper>
  );
};

export default FilterContainer;
