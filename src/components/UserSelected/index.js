import React from "react";
import axios from "axios";
import { symptoms } from "../../data";
import { searchResults } from "../../helpers";
import styles from "./index.module.css";
import Modal from "../Modal";

class UserSelected extends React.Component {
  state = {
    query: "",
    show: true
  };

  handleChange = e => {
    const { value } = e.target;
    const applyFilter = value ? searchResults(symptoms, value) : [];
    this.setState({
      query: value,
      search_results: applyFilter
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { symptoms } = this.props;
    if (symptoms.length > 0) {
      this.setState({ loading: true, error: false });
      try {
        const res = await axios.post(
          "http://localhost:2018/symptoms-identify",
          { symptoms: JSON.stringify(symptoms) }
        );
        if (res)
          return this.setState({
            loading: false,
            loaded: true,
            data: { ...res.data }
          });
      } catch (error) {
        this.setState({ loading: false, error });
      }
    }
  };

  render() {
    const {
      handleDelete,
      symptoms: sym,
      handleSave,
      loading,
      loaded
    } = this.props;
    const { query, search_results } = this.state;
    return (
      <div className="chat">
        <div className="items">
          {sym.length > 0 && (
            <>
              <h4>Your symptoms: </h4>
              {sym.map((ele, i) => (
                <p key={i}>
                  {ele}{" "}
                  <span onClick={handleDelete(ele)} className="delete">
                    &#x2718;
                  </span>
                </p>
              ))}
              <h5 className="btn" onClick={this.handleSubmit}>
                Submit
              </h5>
            </>
          )}
        </div>
        <div className="input">
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            placeholder="search for symptoms.."
          />
          <div className="searchResults">
            {search_results &&
              search_results.map((ele, i) => (
                <h6 key={i} onClick={handleSave(ele)}>
                  {ele}
                </h6>
              ))}
          </div>
          {loading && (
            <div className={`${styles.loading} ${styles["style-2"]}`}>
              <div className={`${styles["loading-wheel"]}`}></div>
            </div>
          )}
          {!loaded && (
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <p>Modal</p>
              <p>Data</p>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default UserSelected;
