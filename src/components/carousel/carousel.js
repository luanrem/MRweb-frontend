import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'

import { Container, Photo, Thumb } from './styles';


import photo1 from '../../assets/pictures/CarouselPhotos/1.JPG';
import photo2 from '../../assets/pictures/CarouselPhotos/2.JPG';
import photo3 from '../../assets/pictures/CarouselPhotos/3.JPG';
import photo4 from '../../assets/pictures/CarouselPhotos/4.JPG';
import photo5 from '../../assets/pictures/CarouselPhotos/5.JPG';
import photo6 from '../../assets/pictures/CarouselPhotos/6.JPG';
import photo7 from '../../assets/pictures/CarouselPhotos/7.JPG';
import photo8 from '../../assets/pictures/CarouselPhotos/8.JPG';
import photo9 from '../../assets/pictures/CarouselPhotos/9.jpg';
import photo10 from '../../assets/pictures/CarouselPhotos/10.JPG';
import photo11 from '../../assets/pictures/CarouselPhotos/11.JPG';
import photo12 from '../../assets/pictures/CarouselPhotos/12.JPG';
import photo13 from '../../assets/pictures/CarouselPhotos/13.JPG';
import photo14 from '../../assets/pictures/CarouselPhotos/14.JPG';
import photo15 from '../../assets/pictures/CarouselPhotos/15.JPG';
import photo16 from '../../assets/pictures/CarouselPhotos/16.JPG';
import photo17 from '../../assets/pictures/CarouselPhotos/17.JPG';
import photo18 from '../../assets/pictures/CarouselPhotos/18.JPG';
import photo19 from '../../assets/pictures/CarouselPhotos/19.jpeg';
import photo20 from '../../assets/pictures/CarouselPhotos/20.jpeg';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      itemsInSlide: 1,
      items: [photo1,
              photo2,
              photo3,
              photo4,
              photo5,
              photo6,
              photo7,
              photo8,
              photo9,
              photo10,
              photo11,
              photo12,
              photo13,
              photo14,
              photo15,
              photo16,
              photo17,
              photo18,
              photo19,
              photo20],
      stagePadding: {
        paddingLeft: 0,
        paddingRight: 0,
      }
    };
  }

  slideTo = (i) => this.setState({ currentIndex: i });

  onSlideChanged = (e) => this.setState({ currentIndex: e.item });

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

  renderThumbs = () =>
    <Thumb>
      {this.state.items.map((item, i) =>
      <li key={i} onClick={() => this.slideTo(i)}> <img src={item} alt="Item"/></li>)}
    </Thumb>;

  renderGallery() {
    const { currentIndex, items, stagePadding } = this.state;

    return (<AliceCarousel
      dotsDisabled={false}
      buttonsDisabled={true}
      slideToIndex={currentIndex}
      onSlideChanged={this.onSlideChanged}
      autoPlay={true}
      autoPlayInterval={3000}
      stagePadding={stagePadding}
      swipeDisabled={false}
      touchTrackingEnabled={true}
      mouseTrackingEnabled={true}
      autoHeight={false}
    >
      { items.map((item, i) =>
        <img src={ item }
        alt="CrouselPhotos"
          >
        </img>) }
    </AliceCarousel>);
  }

  render() {
    return (
      <Container>
        <Photo>
          { this.renderGallery() }
        </Photo>

      </Container>
    );
  }
}

export default Gallery;
