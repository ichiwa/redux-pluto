/* @flow */
import { connect } from "react-redux";
import { compose } from "recompose";
import { loadingSelector } from "../../../redux/modules/reducer";
import GlobalIndicator from "./GlobalIndicator";

export default compose(
  connect(state => ({
    loading: loadingSelector(state),
  })),
)(GlobalIndicator);
