import React, { Suspense, lazy, Component } from "react";
import axios from "axios";
import Header from "../../components/header/header";
import ModalSummary from "../../components/ModalSummary/ModalSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Basket from "../../components/Basket/Basket";
// import Filter from "../../components/Filter/Filter";
import "./fetcher.css";

const Albums = lazy(() => import("../../components/albums/albums"));

class App extends Component {
  state = {
    posts: [],
    filteredPosts: [],
    show: false,
    id: "",
    sort: "",
    favItems: []
  };

  componentDidMount() {
    axios
      .get("https://itunes.apple.com/in/rss/topalbums/limit=100/json")
      .then(res => {
        // console.log(res.data.feed.entry);
        this.setState({
          posts: res.data.feed.entry,
          filteredPosts: res.data.feed.entry
        });
      });
  }

  modalShow = titleId => {
    this.setState({ show: true, id: titleId });
  };

  modalClosedHandler = () => {
    this.setState({ show: false });
  };

  handleAddToFav = (e, product) => {
    let ItemsAlreadyInFavItems = false;
    const favItems = this.state.favItems;

    favItems.forEach(cp => {
      if (cp.title.label === product.title.label) {
        cp.count += 1;
        ItemsAlreadyInFavItems = true;
      }
    });

    if (!ItemsAlreadyInFavItems) {
      favItems.push({ ...product, count: 1 });
    }

    localStorage.setItem("favItems", JSON.stringify(favItems));
    this.setState({ favItems: favItems });
    console.log(favItems);
  };

  handleChangeSort = e => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== "") {
        state.posts["im:price"].label.sort((a, b) =>
          state.sort === "lowest"
            ? a.price < b.price
              ? 1
              : -1
            : a.price > b.price
            ? 1
            : -1
        );
      } else {
        state.posts["im:name"].label.sort();
      }
      return { filteredPosts: state.posts };
    });
  };

  render() {
    const loadingImg = (
      <div className="album-img">
        <img
          src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif"
          alt="Loading"
        />
      </div>
    );

    const albums = this.state.filteredPosts.map(post => {
      return (
        <Suspense key={post.id.label} fallback={loadingImg}>
          <Albums
            image={post["im:image"][2].label}
            name={post["im:name"].label}
            id={post.title.label}
            link={post.id.label}
            clicked={this.modalShow}
            handleAddToFav={this.handleAddToFav}
            product={post}
          />
        </Suspense>
      );
    });

    const modalSummary = this.state.filteredPosts.map(post => {
      return post.title.label === this.state.id ? (
        <ModalSummary
          image={post["im:image"][2].label}
          price={post["im:price"].label}
          date={post["im:releaseDate"].label}
          name={post["im:name"].label}
          artist={post["im:artist"].label}
          title={post.title.label}
          link={post.id.label}
          modalClosed={this.modalClosedHandler}
        />
      ) : null;
    });

    return (
      <Aux>
        <Header
          count={this.state.filteredPosts.length}
          sort={this.state.sort}
          handleChangeSort={this.handleChangeSort}
        />
        <Basket favItems={this.state.favItems} />
        <Modal show={this.state.show} modalClosed={this.modalClosedHandler}>
          {modalSummary}
        </Modal>
        <div className="albums">{albums}</div>
      </Aux>
    );
  }
}

export default App;
