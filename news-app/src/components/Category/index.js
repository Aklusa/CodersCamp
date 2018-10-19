import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { newsSearch, setCurrentTheme } from "../../actions/index";

import { categoryColors, categories } from "../consts";
import { Container, CategoryList, CategoryElement } from "./style";

const country = "en";

class Category extends Component {

  render() {
    console.log("Co to jest", this.props.theme);
    return (
      <Container>
        <CategoryList>
          {categories.map((category, i) => (
            <CategoryElement
              key={i}
              color={categoryColors[i]}
              onClick={e => this.onClickCategoryButton(e)}
            >
              {category}
            </CategoryElement>
          ))}
        </CategoryList>
      </Container>
    );
  }

  onClickCategoryButton(e) {
    this.props.setCurrentTheme(e.currentTarget.innerHTML);
    this.props.newsSearch(e.currentTarget.innerHTML, "", country);
  }
}

const mapStateToProps = state => ({
  theme: state.theme
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      newsSearch,
      setCurrentTheme
    },
    dispatch
  );

export default connect(mapStateToProps,mapDispatchToProps)(Category);
